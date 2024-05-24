import { rmdir, readdir, writeFile } from "node:fs/promises";
import { existsSync, mkdirSync, unlinkSync } from "node:fs";

const render = (name: string) => {
	const iconName = name
		.split("-")
		.map((item) => item.charAt(0).toUpperCase() + item.slice(1))
		.join("");

	return [
		`// GENERATE BY ../../scripts/generate
// DON NOT EDIT IT MANUALLY
import type React from "react";
import ${iconName} from "@/assets/${name}.svg";

export default function ${iconName}Icon(props: React.SVGAttributes<SVGElement>): React.ReactNode {
  return <${iconName} {...props} />;
}
`,
		iconName,
	];
};

const exportRender = (names: string[]) => {
	return `// GENERATE BY ../../scripts/generate
// DON NOT EDIT IT MANUALLY
${names.map((item) => `import ${item} from "./${item}";`).join("\n")}

export {
	${names.map((item) => `${item},`).join("\n")}
}
`;
};

(async () => {
	const currentPathItems = __dirname.split("/");
	const parentPath = currentPathItems.slice(0, currentPathItems.length - 1).join("/");

	const assetsPath = `${parentPath}/src/assets`;
	const targetPath = `${parentPath}/src/components`;

	// remove old component files
	if (existsSync(targetPath)) {
		const oldComponent = await readdir(targetPath);
		for (const component of oldComponent) {
			const compFullPath = `${targetPath}/${component}`;
			unlinkSync(compFullPath);
		}
		await rmdir(targetPath);
	}
	mkdirSync(targetPath);

	const iconFiles = await readdir(assetsPath);
	const iconName = iconFiles.filter((item) => item.includes(".svg")).map((item) => item.replace(".svg", ""));
	if (!iconName.length) return;

	const tasks = [];
	const exportNames = [];
	for (const name of iconName) {
		const [content, componentName] = render(name);
		const componentPath = `${targetPath}/${componentName}Icon.tsx`;
		exportNames.push(`${componentName}Icon`);
		tasks.push(writeFile(componentPath, content));
	}
	const exportContent = exportRender(exportNames);
	tasks.push(writeFile(`${targetPath}/index.tsx`, exportContent));
	await Promise.all(tasks);
})();
