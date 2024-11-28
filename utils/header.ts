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