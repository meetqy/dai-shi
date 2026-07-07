import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

type MarkdownContentProps = {
	content: string;
	resolveHref?: (href: string) => string | null;
};

function cleanHeadingText(text: string) {
	return text.replace(/^\s*\d+[\s.、．-]*/g, "").trim();
}

const MARKDOWN_IMAGE_PATTERN = /!\[[^\]]*]\([^)]+\)/g;
const RESOURCE_PATH_PATTERN =
	/(?:\/|public\/)?(?:assets|老师|校区|honors|address|daishi-site\/uploads)\/[^\s`，。；、）)\]]+\.(?:jpg|jpeg|png|webp|gif)/gi;

function cleanInlineText(text: string) {
	return text
		.replace(MARKDOWN_IMAGE_PATTERN, "")
		.replace(RESOURCE_PATH_PATTERN, "")
		.replace(/\s+([，。；、])/g, "$1")
		.replace(/[：:]\s*$/g, "")
		.trim();
}

function canRenderImage(src: string) {
	if (/^https?:\/\//i.test(src)) {
		return true;
	}

	if (!src.startsWith("/")) {
		return false;
	}

	try {
		return fs.existsSync(path.join(process.cwd(), "public", decodeURI(src)));
	} catch {
		return false;
	}
}

function parseInline(
	text: string,
	resolveHref: MarkdownContentProps["resolveHref"],
) {
	const cleanedText = cleanInlineText(text);
	const parts = cleanedText.split(/(\*\*[^*]+\*\*|\[[^\]]+]\([^)]+\))/g);
	const occurrences = new Map<string, number>();

	return parts.map((part) => {
		const occurrence = occurrences.get(part) ?? 0;
		occurrences.set(part, occurrence + 1);
		const key = `${part}-${occurrence}`;

		if (part.startsWith("**") && part.endsWith("**")) {
			const strongText = part.slice(2, -2);
			const strongLinkMatch = strongText.match(/^\[([^\]]+)]\(([^)]+)\)$/);
			if (strongLinkMatch) {
				const [, label = "", href = ""] = strongLinkMatch;
				const resolvedHref = resolveHref?.(href) ?? href;

				if (resolvedHref.startsWith("http")) {
					return (
						<a
							className="font-semibold text-primary underline-offset-4 hover:underline"
							href={resolvedHref}
							key={key}
							rel="noopener noreferrer"
							target="_blank"
						>
							{label}
						</a>
					);
				}

				return (
					<Link
						className="font-semibold text-primary underline-offset-4 hover:underline"
						href={resolvedHref}
						key={key}
					>
						{label}
					</Link>
				);
			}

			return (
				<strong className="font-semibold text-slate-950" key={key}>
					{strongText}
				</strong>
			);
		}

		const linkMatch = part.match(/^\[([^\]]+)]\(([^)]+)\)$/);
		if (linkMatch) {
			const [, label = "", href = ""] = linkMatch;
			const resolvedHref = resolveHref?.(href) ?? href;

			if (resolvedHref.startsWith("http")) {
				return (
					<a
						className="font-medium text-primary underline-offset-4 hover:underline"
						href={resolvedHref}
						key={key}
						rel="noopener noreferrer"
						target="_blank"
					>
						{label}
					</a>
				);
			}

			return (
				<Link
					className="font-medium text-primary underline-offset-4 hover:underline"
					href={resolvedHref}
					key={key}
				>
					{label}
				</Link>
			);
		}

		return part;
	});
}

function MarkdownTable({
	lines,
	resolveHref,
}: {
	lines: string[];
	resolveHref: MarkdownContentProps["resolveHref"];
}) {
	const rows = lines
		.map((line) =>
			line
				.trim()
				.replace(/^\|/, "")
				.replace(/\|$/, "")
				.split("|")
				.map((cell) => cell.trim()),
		)
		.filter((cells) => !cells.every((cell) => /^:?-{3,}:?$/.test(cell)));

	const [headers = [], ...bodyRows] = rows;

	return (
		<div className="my-8 overflow-x-auto rounded-2xl border border-slate-200">
			<table className="min-w-full border-collapse text-left text-sm">
				<thead className="bg-slate-50 text-slate-700">
					<tr>
						{headers.map((header) => (
							<th
								className="border-slate-200 border-b px-4 py-3 font-semibold"
								key={header}
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{bodyRows.map((row) => (
						<tr
							className="border-slate-100 border-b last:border-b-0"
							key={row.join("|")}
						>
							{row.map((cell) => (
								<td
									className="px-4 py-4 text-slate-700 leading-7"
									key={`${row.join("|")}-${cell}`}
								>
									{parseInline(cell, resolveHref)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export function MarkdownContent({
	content,
	resolveHref,
}: MarkdownContentProps) {
	const lines = content.split("\n");
	const elements: React.ReactNode[] = [];
	let index = 0;

	while (index < lines.length) {
		const line = lines[index]?.trimEnd() ?? "";

		if (!line.trim()) {
			index += 1;
			continue;
		}

		if (/^-{3,}$/.test(line.trim())) {
			elements.push(
				<hr className="my-8 border-slate-200" key={`divider-${index}`} />,
			);
			index += 1;
			continue;
		}

		const imageMatch = line.match(/^!\[([^\]]*)]\(([^)]+)\)$/);
		if (imageMatch) {
			const [, alt = "", src = ""] = imageMatch;
			if (!canRenderImage(src)) {
				index += 1;
				continue;
			}

			elements.push(
				<figure
					className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
					key={`image-${index}`}
				>
					<Image
						alt={alt}
						className="h-auto max-h-[520px] w-full object-contain"
						height={900}
						src={src}
						unoptimized
						width={1200}
					/>
					{alt ? (
						<figcaption className="border-slate-200 border-t px-4 py-3 text-slate-500 text-sm">
							{alt}
						</figcaption>
					) : null}
				</figure>,
			);
			index += 1;
			continue;
		}

		if (line.startsWith("|")) {
			const tableLines: string[] = [];
			while (
				index < lines.length &&
				(lines[index]?.trim().startsWith("|") ?? false)
			) {
				tableLines.push(lines[index] ?? "");
				index += 1;
			}
			elements.push(
				<MarkdownTable
					key={`table-${index}`}
					lines={tableLines}
					resolveHref={resolveHref}
				/>,
			);
			continue;
		}

		if (line.startsWith("- ")) {
			const items: string[] = [];
			while (
				index < lines.length &&
				(lines[index]?.trim().startsWith("- ") ?? false)
			) {
				const item = cleanInlineText((lines[index] ?? "").trim().slice(2));
				if (item) {
					items.push(item);
				}
				index += 1;
			}

			if (items.length === 0) {
				continue;
			}

			elements.push(
				<ul
					className="my-6 space-y-3 border-slate-200 border-t"
					key={`list-${index}`}
				>
					{items.map((item) => (
						<li
							className="border-slate-200 border-b py-3 text-slate-700 leading-8"
							key={item}
						>
							{parseInline(item, resolveHref)}
						</li>
					))}
				</ul>,
			);
			continue;
		}

		if (/^\d+[.)、]\s+/.test(line.trim())) {
			const items: string[] = [];
			while (
				index < lines.length &&
				/^\d+[.)、]\s+/.test(lines[index]?.trim() ?? "")
			) {
				const item = cleanInlineText(
					(lines[index] ?? "").trim().replace(/^\d+[.)、]\s+/, ""),
				);
				if (item) {
					items.push(item);
				}
				index += 1;
			}

			if (items.length === 0) {
				continue;
			}

			elements.push(
				<ol
					className="my-6 list-decimal space-y-3 border-slate-200 border-t pl-5"
					key={`ordered-list-${index}`}
				>
					{items.map((item) => (
						<li
							className="border-slate-200 border-b py-3 pl-1 text-slate-700 leading-8"
							key={item}
						>
							{parseInline(item, resolveHref)}
						</li>
					))}
				</ol>,
			);
			continue;
		}

		const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
		if (headingMatch) {
			const [, marks = "", heading = ""] = headingMatch;
			const level = marks.length;
			const className =
				level === 1
					? "mt-2 mb-6 font-bold text-4xl text-slate-950 leading-tight"
					: level === 2
						? "mt-12 mb-5 font-bold text-3xl text-slate-950 leading-tight"
						: "mt-8 mb-4 font-semibold text-2xl text-slate-900 leading-tight";
			const Heading = `h${Math.min(level, 3)}` as "h1" | "h2" | "h3";
			elements.push(
				<Heading className={className} key={`heading-${index}`}>
					{parseInline(cleanHeadingText(heading), resolveHref)}
				</Heading>,
			);
			index += 1;
			continue;
		}

		const paragraphLines = [line];
		index += 1;
		while (
			index < lines.length &&
			lines[index]?.trim() &&
			!lines[index]?.trim().startsWith("#") &&
			!lines[index]?.trim().startsWith("- ") &&
			!/^\d+[.)、]\s+/.test(lines[index]?.trim() ?? "") &&
			!lines[index]?.trim().startsWith("|") &&
			!lines[index]?.trim().startsWith("![")
		) {
			paragraphLines.push(lines[index] ?? "");
			index += 1;
		}

		const paragraph = paragraphLines.join(" ").trim();
		const cleanParagraph = cleanInlineText(paragraph);
		if (!cleanParagraph) {
			continue;
		}
		elements.push(
			<p className="my-5 text-slate-700 leading-8" key={`paragraph-${index}`}>
				{parseInline(cleanParagraph, resolveHref)}
			</p>,
		);
	}

	return <div className="max-w-none">{elements}</div>;
}
