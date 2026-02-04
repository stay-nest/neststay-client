import { NextRequest, NextResponse } from "next/server";
import { httpService } from "@/app/lib/http/httpService";
import type { LocationsApiResponse } from "@/app/types/location";

export async function GET(request: NextRequest) {
  try {
    // Extract query parameters
    const searchParams = request.nextUrl.searchParams;
    const page = searchParams.get("page") || "1";
    const pageSize = searchParams.get("page_size") || "10";
    
    // Construct backend URL with query params
    const backendUrl = `/locations/?page=${page}&page_size=${pageSize}`;
    
    // Call backend via httpService (unauthenticated)
    const data = await httpService<LocationsApiResponse>({
      url: backendUrl,
      method: "GET",
      isAuthenticated: false,
    });
    
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal server error" },
      { status: 500 }
    );
  }
}
