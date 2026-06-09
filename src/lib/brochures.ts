import fs from "node:fs";
import path from "node:path";
import { SITE_FULL_NAME } from "~/lib/constants/site";

const BROCHURE_PATH_CANDIDATES = [
	path.join(process.cwd(), "素材资源", "招生简章"),
	path.join(process.cwd(), "招生简章"),
];

function getBrochuresPath() {
	return BROCHURE_PATH_CANDIDATES.find((candidate) => fs.existsSync(candidate));
}

export interface Brochure {
	year: string;
	title: string;
	content: string;
	fileName: string;
}

export function getAllBrochures(): Omit<Brochure, "content">[] {
	const brochuresPath = getBrochuresPath();

	if (!brochuresPath) {
		return [];
	}

	const files = fs.readdirSync(brochuresPath);
	return files
		.filter((file) => file.endsWith(".md"))
		.map((file) => {
			const year = file.replace(/\.md$/, "");
			return {
				year,
				title: `${year} 届${SITE_FULL_NAME}招生简章`,
				fileName: file,
			};
		})
		.sort((a, b) => Number(b.year) - Number(a.year));
}

export function getBrochureByYear(year: string): Brochure | null {
	const brochuresPath = getBrochuresPath();

	if (!brochuresPath) {
		return null;
	}

	const filePath = path.join(brochuresPath, `${year}.md`);
	if (!fs.existsSync(filePath)) {
		return null;
	}

	const content = fs.readFileSync(filePath, "utf8");
	return {
		year,
		title: `${year} 届${SITE_FULL_NAME}招生简章`,
		content,
		fileName: `${year}.md`,
	};
}
