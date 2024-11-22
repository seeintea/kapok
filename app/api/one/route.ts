import one from "@/data/one.json";

export async function GET() {
  const data = one[Math.floor(Math.random() * one.length)];
  return Response.json({ data });
}
