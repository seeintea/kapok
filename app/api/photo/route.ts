import { isNodeInvoke, invokeErrorHandle } from "@/utils/api";
import photo from "@/data/photos";

import type { QueryPhotoParams } from "@/types/photo"

export async function POST(req: Request){
  const valid = isNodeInvoke(req);
  if (!valid) return invokeErrorHandle("Invalid request");
  const params = (await req.json()) as QueryPhotoParams;
  const total = photo.length;
  const { current, size } = params;
  const start = current - 1;
  if (start * size > total) {
    return Response.json({ data: [], total, current, size });
  }
  const data = photo.slice(start * size, current * size);
  return Response.json({ data, total, current, size });
}
