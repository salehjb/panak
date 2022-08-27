import { NextResponse } from "next/server";
import Cookies from "universal-cookie";

export default async function middleware(req) {
  const cookies = new Cookies(req.headers.get("cookie")).getAll();

  const token = cookies["next-auth.session-token"];

  const url = req.url;

  const baseURL = "http://localhost:3000";

  if (url.includes("/dashboard") && !token) {
    return NextResponse.redirect(`${baseURL}/login`);
  }

  if ((url.includes("/login") || url.includes("/signup")) && token) {
    return NextResponse.redirect(`${baseURL}`);
  }
}
