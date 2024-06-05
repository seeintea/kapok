import { type } from "node:os";

export function getPath(paths: string[]) {
	const separator = type() === "Windows_NT" ? "\\" : "/";
	return paths.join(separator);
}

export function getParentPath() {
	const separator = type() === "Windows_NT" ? "\\" : "/";
	const currentPathItems = __dirname.split(separator);
	const parentPath = currentPathItems.slice(0, currentPathItems.length - 1).join(separator);
  return parentPath
}
