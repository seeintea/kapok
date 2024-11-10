import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const headers = new Headers(request.headers);
  const url = request.url;
  const pathname = new URL(url).pathname;
  headers.set("req-pathname", pathname);
  return NextResponse.next({
    request: { headers },
  });
}
