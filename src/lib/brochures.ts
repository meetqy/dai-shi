import fs from "node:fs";
import path from "node:path";

const BROCHURES_PATH = path.join(process.cwd(), "招生简章");

export interface Brochure {
	year: string;
	title: string;
	content: string;
	fileName: string;
}

export function getAllBrochures(): Omit<Brochure, "content">[] {
	if (!fs.existsSync(BROCHURES_PATH)) {
		return [];
	}

	const files = fs.readdirSync(BROCHURES_PATH);
	return files
		.filter((file) => file.endsWith(".md"))
		.map((file) => {
			const year = file.replace(/\.md$/, "");
			return {
				year,
				title: `${year} 届戴氏教育高考中心招生简章`,
				fileName: file,
			};
		})
		.sort((a, b) => Number(b.year) - Number(a.year));
}

export function getBrochureByYear(year: string): Brochure | null {
	const filePath = path.join(BROCHURES_PATH, `${year}.md`);
	if (!fs.existsSync(filePath)) {
		return null;
	}

	const content = fs.readFileSync(filePath, "utf8");
	return {
		year,
		title: `${year} 届戴氏教育高考中心招生简章`,
		content,
		fileName: `${year}.md`,
	};
}
