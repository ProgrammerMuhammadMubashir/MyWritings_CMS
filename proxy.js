import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function proxy(request) {
  const token = request.cookies.get("token")?.value;



    if (!token) {
      return NextResponse.redirect(
        new URL("/AdminLogin", request.url)
      );
    }
else{
    try {
      jwt.verify(token, process.env.SECRET);
      return NextResponse.next();
    } catch {
      return NextResponse.redirect(
        new URL("/AdminLogin", request.url)
      );
    }
  }
}


export const config = {
  matcher: "/Admin"
};
