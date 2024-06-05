import { existsSync, readFileSync, readdirSync } from "node:fs";
import { parse } from "yaml";
import { rimrafSync } from "rimraf";
import clc from "cli-color";
import { getPath, getParentPath } from "../utils/path";

const getWorkspacePaths = (path: string) => {
	const configPath = getPath([path, "pnpm-workspace.yaml"]);
	const configContent = readFileSync(configPath).toString();
	const config = parse(configContent);
	return (config?.packages as string[]) ?? [];
};

const getDeleteNodeModulesParentPaths = (path: string, projectPath: string) => {
	const parentPaths: string[] = [];
	const pathSplit = path.split("/");
	if (pathSplit.length > 1) {
		const subParentPath = getPath([projectPath, pathSplit[0]]);
		const dirPaths = readdirSync(subParentPath);
		for (const path of dirPaths) {
			const fullPath = getPath([projectPath, pathSplit[0], path, "node_modules"]);
			if (existsSync(fullPath)) {
				parentPaths.push(fullPath);
			}
		}
	} else {
		parentPaths.push(getPath([projectPath, pathSplit[0], "node_modules"]));
	}
	return parentPaths;
};

(() => {
	const parentPath = getParentPath();
	const workspacePaths = getWorkspacePaths(parentPath);
	const deleteNodeModulesParentPaths: string[] = [];
	for (const path of workspacePaths) {
		const paths = getDeleteNodeModulesParentPaths(path, parentPath);
		deleteNodeModulesParentPaths.push(...paths);
	}
	for (const path of deleteNodeModulesParentPaths) {
		rimrafSync(path);
		console.log(clc.red(`delete ${path}`));
	}
	const lastPath = getPath([parentPath, "node_modules"]);
	rimrafSync(lastPath);
	console.log(clc.red(`delete ${lastPath}`));
})();
