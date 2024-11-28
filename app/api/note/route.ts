import { isNodeInvoke, invokeErrorHandle } from "@/utils/api";
import note from "@/data/note"

export async function GET(req: Request) {
  const valid = isNodeInvoke(req);
  if (!valid) return invokeErrorHandle("Invalid request");
  return Response.json({ data: note });
}
