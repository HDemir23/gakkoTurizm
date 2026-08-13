import { NextResponse, type NextRequest } from "next/server";

// Fail closed: yeni bir deployment'ta degisken unutulursa site normal yayina acilmaz.
const paymentFailed =
  (process.env.PAYMENT_FAILED ?? "true").trim().toLowerCase() === "true";

export function middleware(request: NextRequest) {
  if (!paymentFailed || request.nextUrl.pathname === "/maintenance") {
    return NextResponse.next();
  }

  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";

  return NextResponse.rewrite(maintenanceUrl, {
    status: 402,
    statusText: "Payment Required",
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "X-Service-Status": "Payment Required"
    }
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4|webm|css|js|map|woff|woff2)$).*)"
  ]
};
