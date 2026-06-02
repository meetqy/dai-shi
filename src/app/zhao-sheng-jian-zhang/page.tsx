import Link from "next/link";
import { getAllBrochures } from "~/lib/brochures";
import { ChevronRightIcon } from "lucide-react";

export const metadata = {
	title: "招生简章列表 - 戴氏教育",
	description: "查看戴氏教育历年高考全日制招生简章",
};

export default function BrochuresPage() {
	const brochures = getAllBrochures();

	return (
		<div className="bg-slate-50 py-12 md:py-20">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h1 className="mb-4 font-bold text-3xl text-slate-900 md:text-5xl">
						招生简章
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-slate-600">
						为您提供最新、最全面的高考全日制备考方案与招生信息。
					</p>
				</div>

				<div className="mx-auto max-w-4xl grid gap-6">
					{brochures.map((brochure) => (
						<Link
							href={`/zhao-sheng-jian-zhang/${brochure.year}`}
							key={brochure.year}
							className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:p-8"
						>
							<div className="flex items-center gap-6">
								<div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 font-bold text-2xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
									{brochure.year.slice(-2)}
								</div>
								<div>
									<h2 className="mb-1 font-bold text-xl text-slate-900 md:text-2xl">
										{brochure.title}
									</h2>
									<p className="text-slate-500">
										发布日期：{brochure.year}-01-01
									</p>
								</div>
							</div>
							<ChevronRightIcon className="size-6 text-slate-300 group-hover:translate-x-1 group-hover:text-primary transition-all" />
						</Link>
					))}

					{brochures.length === 0 && (
						<div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
							<p className="text-slate-500">暂无招生简章内容</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
