import quote from "@/data/quote.json";

export async function GET() {
  const len = quote.length;
  const single = quote[Math.floor(Math.random() * len)];
  return Response.json({ single });
}
