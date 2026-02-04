import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("access_token");

    return NextResponse.json({
      isAuthenticated: !!accessToken,
    });
  } catch (error) {
    console.error("Auth status error:", error);
    return NextResponse.json(
      { error: "Internal server error", isAuthenticated: false },
      { status: 500 }
    );
  }
}
