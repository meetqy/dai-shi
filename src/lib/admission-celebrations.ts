import { readdir } from "node:fs/promises";
import path from "node:path";

const CELEBRATIONS_ROOT_DIR = path.join(process.cwd(), "public", "喜报");
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

export type AdmissionCelebrationImage = {
	alt: string;
	fileName: string;
	src: string;
};

export type AdmissionCelebrationYear = {
	images: AdmissionCelebrationImage[];
	label: string;
	year: string;
};

function sortByNumericFileName(a: string, b: string) {
	const aName = path.parse(a).name;
	const bName = path.parse(b).name;
	const aNumber = Number(aName);
	const bNumber = Number(bName);

	if (!Number.isNaN(aNumber) && !Number.isNaN(bNumber) && aNumber !== bNumber) {
		return aNumber - bNumber;
	}

	return aName.localeCompare(bName, "zh-Hans-CN", { numeric: true });
}

function sortYearsDescending(a: string, b: string) {
	const aYear = Number(a);
	const bYear = Number(b);

	if (!Number.isNaN(aYear) && !Number.isNaN(bYear) && aYear !== bYear) {
		return bYear - aYear;
	}

	return b.localeCompare(a, "zh-Hans-CN", { numeric: true });
}

export async function getAdmissionCelebrationYears(): Promise<
	AdmissionCelebrationYear[]
> {
	try {
		const yearEntries = await readdir(CELEBRATIONS_ROOT_DIR, {
			withFileTypes: true,
		});

		const yearDirectories = yearEntries
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name)
			.sort(sortYearsDescending);

		const celebrationYears = await Promise.all(
			yearDirectories.map(async (year) => {
				const yearDir = path.join(CELEBRATIONS_ROOT_DIR, year);
				const files = await readdir(yearDir, { withFileTypes: true });

				const images = files
					.filter((file) => {
						if (!file.isFile()) {
							return false;
						}

						const extension = path.extname(file.name).toLowerCase();
						return IMAGE_EXTENSIONS.has(extension);
					})
					.map((file) => file.name)
					.sort(sortByNumericFileName)
					.map((fileName, index) => ({
						alt: `${year}年大学录取喜报第${index + 1}张`,
						fileName,
						src: encodeURI(`/喜报/${year}/${fileName}`),
					}));

				return {
					images,
					label: `${year}年大学录取喜报`,
					year,
				};
			}),
		);

		return celebrationYears.filter((item) => item.images.length > 0);
	} catch {
		return [];
	}
}
