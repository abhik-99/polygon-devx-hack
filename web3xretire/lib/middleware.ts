export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/asset-management/:path*",
    "/dashboard/:path*",
    "/funds/:path*",
    "/profile/:path*",
  ],
};
