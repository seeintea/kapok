import { headers } from "next/headers";

export async function getAppHost() {
  const header = await headers();
  const proto = header.get("x-forwarded-proto");
  const host = header.get("host");
  if (!proto || !host) {
    return "";
  }
  return `${proto}://${host}`;
}

const completedRoutes = ["/photo"];

export async function getCurrentRoute() {
  const header = await headers();
  const path = header.get("req-pathname") ?? "";
  if (!path) return "";
  return completedRoutes.find((route) => path.startsWith(route)) ?? "";
}
