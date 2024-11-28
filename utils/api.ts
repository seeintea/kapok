export function isNodeInvoke(request: Request) {
  const ua = request.headers.get("user-agent");
  return ua === "node";
}

export function invokeErrorHandle(message: string) {
  return Response.json({ message }, { status: 500 });
}