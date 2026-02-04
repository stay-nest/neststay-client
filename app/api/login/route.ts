import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8000";

interface LoginRequest {
  email?: string;
  mobile?: string;
  password?: string;
  otp?: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
  token_type: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: LoginRequest = await request.json();
    const { email, mobile, password, otp } = body;

    // Validate request
    if (!email && !mobile) {
      return NextResponse.json(
        { error: "Email or mobile number is required" },
        { status: 400 }
      );
    }

    // For email/password login
    if (email && password) {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json(
          { error: errorData.detail || "Login failed" },
          { status: response.status }
        );
      }

      const data: LoginResponse = await response.json();

      // Set HTTP-only cookies
      const cookieStore = await cookies();
      cookieStore.set("access_token", data.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: "/",
      });

      cookieStore.set("refresh_token", data.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });

      return NextResponse.json({
        success: true,
        token_type: data.token_type,
      });
    }

    // For mobile/OTP login (when endpoint is available)
    if (mobile && otp) {
      // TODO: Update this when OTP endpoint is available
      // For now, return an error indicating OTP login is not yet implemented
      return NextResponse.json(
        { error: "OTP login is not yet implemented" },
        { status: 501 }
      );
    }

    return NextResponse.json(
      { error: "Invalid request. Provide email+password or mobile+otp" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
