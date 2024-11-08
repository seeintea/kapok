import photo from "@/data/photo";

export async function GET() {
  return Response.json({ photo });
}
