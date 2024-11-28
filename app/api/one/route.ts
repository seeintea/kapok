import { isNodeInvoke, invokeErrorHandle } from "@/utils/api";
import one from "@/data/one.json";

export async function GET(req: Request) {
  const valid = isNodeInvoke(req);
  if (!valid) return invokeErrorHandle("Invalid request");
  const data = one[Math.floor(Math.random() * one.length)];
  return Response.json({ data });
}
