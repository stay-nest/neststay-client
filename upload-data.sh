#!/bin/bash

# Ask user to choose data type
echo "What would you like to upload?"
echo "1) Location data"
echo "2) Hotel data"
read -p "Enter your choice (1 or 2): " choice

# Set FILE_NAME and API_URL based on user choice
case $choice in
    1)
        FILE_NAME="mock-data/properties.json"
        API_URL="/locations"
        DATA_TYPE="location"
        ;;
    2)
        FILE_NAME="mock-data/hotels.json"
        API_URL="/hotels"
        DATA_TYPE="hotel"
        ;;
    *)
        echo "Error: Invalid choice. Please run the script again and select 1 or 2."
        exit 1
        ;;
esac

# Load variables from .env file
if [ -f .env ]; then
    # Extract API_BASE_URL from .env file (handles comments and empty lines)
    API_BASE_URL=$(grep -v '^#' .env | grep -v '^$' | grep "^API_BASE_URL=" | cut -d '=' -f2- | tr -d '"' | tr -d "'")
    # Extract ACCESS_TOKEN from .env file (handles comments and empty lines)
    ACCESS_TOKEN=$(grep -v '^#' .env | grep -v '^$' | grep "^ACCESS_TOKEN=" | cut -d '=' -f2- | tr -d '"' | tr -d "'")
fi

# Build full API URL: if API_URL doesn't start with http:// or https://, prepend API_BASE_URL
if [[ ! "$API_URL" =~ ^https?:// ]]; then
    # Check if API_BASE_URL is set (required for relative URLs)
    if [ -z "$API_BASE_URL" ]; then
        echo "Error: API_BASE_URL not found in .env file!"
        echo "Please add API_BASE_URL=http://localhost:8000 to your .env file"
        exit 1
    fi
    # Remove trailing slash from API_BASE_URL if present
    API_BASE_URL="${API_BASE_URL%/}"
    # Remove leading slash from API_URL if present (we'll add it)
    API_URL="${API_URL#/}"
    # Combine them
    API_URL="${API_BASE_URL}/${API_URL}"
fi

# Check if ACCESS_TOKEN is set
if [ -z "$ACCESS_TOKEN" ]; then
    echo "Error: ACCESS_TOKEN not found in .env file!"
    echo "Please add ACCESS_TOKEN=your-token-here to your .env file"
    exit 1
fi

# Check if file exists
if [ ! -f "$FILE_NAME" ]; then
    echo "Error: File '$FILE_NAME' not found!"
    exit 1
fi

# Check if file is readable
if [ ! -r "$FILE_NAME" ]; then
    echo "Error: File '$FILE_NAME' is not readable!"
    exit 1
fi

# Check if jq is installed (required for JSON transformation)
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not found. Please install jq to use this script."
    exit 1
fi

# Validate JSON syntax
if ! jq empty "$FILE_NAME" 2>/dev/null; then
    echo "Error: Invalid JSON in '$FILE_NAME'"
    exit 1
fi

# Count total items
total_items=$(jq '. | length' "$FILE_NAME")
echo "Found $total_items ${DATA_TYPE}s in '$FILE_NAME'"
echo "Uploading to '$API_URL'..."
echo ""

# Process each item
success_count=0
error_count=0

for i in $(seq 0 $((total_items - 1))); do
    if [ "$DATA_TYPE" = "location" ]; then
        # Extract and transform location data to match API schema
        item_data=$(jq -r --argjson idx $i '.[$idx].location | {
            hotel_id: .hotel_id,
            name: .name,
            description: .description,
            address: .address,
            latitude: .latitude,
            longitude: .longitude,
            city: .city,
            state: .state,
            country: .country,
            contact_phone: "+91-0000000000",
            contact_email: "contact@example.com"
        }' "$FILE_NAME")
    else
        # For hotels, data is already in the correct format, use it directly
        item_data=$(jq -r --argjson idx $i '.[$idx]' "$FILE_NAME")
    fi
    
    item_name=$(echo "$item_data" | jq -r '.name')
    echo "[$((i + 1))/$total_items] Uploading: $item_name"
    
    # Make POST request with JSON data
    # Use -L to follow redirects, --post301 and --post302 to preserve POST method on redirects
    response=$(curl -s -L --post301 --post302 -w "\n%{http_code}" -X POST "$API_URL" \
        -H "Content-Type: application/json" \
        -H "Authorization: Bearer $ACCESS_TOKEN" \
        -d "$item_data")
    
    # Sleep for 1 second after the API call
    sleep 1
    
    # Extract HTTP status code (last line)
    http_code=$(echo "$response" | tail -n1)
    
    # Extract response body (all lines except last)
    response_body=$(echo "$response" | sed '$d')
    
    # Check response
    if [ "$http_code" -ge 200 ] && [ "$http_code" -lt 300 ]; then
        echo "  ✓ Success! HTTP Status: $http_code"
        ((success_count++))
    else
        echo "  ✗ Error! HTTP Status: $http_code"
        echo "  Response: $response_body"
        ((error_count++))
    fi
    echo ""
done

# Summary
echo "=========================================="
echo "Upload Summary:"
echo "  Total: $total_items"
echo "  Success: $success_count"
echo "  Errors: $error_count"
echo "=========================================="

# Exit with error if any failed
if [ $error_count -gt 0 ]; then
    exit 1
else
    exit 0
fi
