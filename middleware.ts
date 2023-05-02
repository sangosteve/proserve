export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    "/",
    "/:slug*",
    "/dashboard/:slug*",
    "/items/:slug*",
    "/purchases/:slug*",
    "/sales/:slug*",
  ],
};
