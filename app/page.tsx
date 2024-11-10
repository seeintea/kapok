"use server";

import { getApiBaseUrl } from "@/utils/header";

export default async function Home() {
  const verse = await getVerse();
  return <p style={{ padding: "0.25rem 0", textAlign: "center" }}>{verse}</p>;
}

async function getVerse() {
  const baseUrl = await getApiBaseUrl();
  if (!baseUrl) return "云去山如画。";
  const ret = await fetch(`${baseUrl}/api/one`, {});
  const json = await ret.json();
  return json?.data ?? "云去山如画。";
}
