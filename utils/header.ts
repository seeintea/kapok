import { headers } from "next/headers";

export async function getApiBaseUrl(): Promise<string> {
  const header = await headers();
  const proto = header.get("x-forwarded-proto");
  const host = header.get("host");
  if (!proto || !host) {
    return "";
  }
  return `${proto}://${host}`;
}

// const completed = ["/blog", "/photo", "/note"];
const completed: string[] = ["/photo"];
export async function getLayoutFull(): Promise<boolean> {
  const header = await headers();
  const path = header.get("req-pathname") ?? "";
  return completed.some((item) => path.startsWith(item));
}

export async function getCurrentRoute(): Promise<string> {
  const header = await headers();
  const path = header.get("req-pathname") ?? "";
  if (!path) return "";
  return completed.find((item) => path.startsWith(item)) ?? "";
}
