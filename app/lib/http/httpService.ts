import { cookies } from "next/headers";

const API_BASE_URL =
  process.env.API_BASE_URL ?? "http://localhost:8000";

type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

type HttpServiceOptions = {
  url: string;
  method: HttpMethod;
  headers?: Record<string, string>;
  isAuthenticated: boolean;
  body?: unknown;
};

/**
 * HTTP service for making authenticated API calls from server-side components.
 * 
 * @param options - Configuration options for the HTTP request
 * @param options.url - The API endpoint URL (relative or absolute)
 * @param options.method - HTTP method (GET, POST, PATCH, DELETE)
 * @param options.headers - Optional additional headers to include
 * @param options.isAuthenticated - Whether authentication is required (reads access_token cookie)
 * @param options.body - Optional request body (for POST/PATCH requests)
 * @returns Promise resolving to the JSON response
 * @throws Error if isAuthenticated is true but access_token cookie is not found
 */
export async function httpService<T = unknown>(
  options: HttpServiceOptions
): Promise<T> {
  const { url, method, headers = {}, isAuthenticated, body } = options;

  // Build the full URL
  const baseUrl = API_BASE_URL.replace(/\/$/, "");
  const normalizedPath = url.startsWith("/") ? url : `/${url}`;
  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${normalizedPath}`;

  // Read access_token from cookies if authentication is required
  let accessToken: string | undefined;
  if (isAuthenticated) {
    const cookieStore = await cookies();
    const accessTokenCookie = cookieStore.get("access_token");
    
    if (!accessTokenCookie || !accessTokenCookie.value) {
      throw new Error("Authentication required: access_token cookie not found");
    }
    
    accessToken = accessTokenCookie.value;
  }

  // Prepare headers
  const requestHeaders: Record<string, string> = {
    Accept: "application/json",
    ...headers,
  };

  // Add Content-Type for requests with body
  if (body && (method === "POST" || method === "PATCH")) {
    requestHeaders["Content-Type"] = "application/json";
  }

  // Add Authorization header if authenticated
  if (isAuthenticated && accessToken) {
    requestHeaders["Authorization"] = `Bearer ${accessToken}`;
  }

  // Prepare fetch options
  const fetchOptions: RequestInit = {
    method,
    headers: requestHeaders,
  };

  // Add body for POST and PATCH requests
  if (body && (method === "POST" || method === "PATCH")) {
    fetchOptions.body = JSON.stringify(body);
  }

  // Make the API call
  const response = await fetch(fullUrl, fetchOptions);

  // Handle error responses
  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage: string;
    
    try {
      const errorJson = JSON.parse(errorText);
      errorMessage = errorJson.detail || errorJson.message || `HTTP error: ${response.status} ${response.statusText}`;
    } catch {
      errorMessage = errorText || `HTTP error: ${response.status} ${response.statusText}`;
    }
    
    throw new Error(errorMessage);
  }

  // Handle empty responses (e.g., DELETE requests)
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    return {} as T;
  }

  return response.json() as Promise<T>;
}
