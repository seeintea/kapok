import quote from "@/data/quote.json";

export async function GET() {
  const len = quote.length;
  const data = quote[Math.floor(Math.random() * len)];
  return Response.json({ data });
}
