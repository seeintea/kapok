import photo from "@/data/photo";

import type { PhotoParams } from "@/types/photo"

export async function POST(req: Request){
  const params = (await req.json()) as PhotoParams;
  const total = photo.length;
  const { current, size } = params;
  const start = current - 1;
  if (start * size > total) {
    return Response.json({ data: [], total, current, size });
  }
  const data = photo.slice(start * size, current * size);
  return Response.json({ data, total, current, size });
}
