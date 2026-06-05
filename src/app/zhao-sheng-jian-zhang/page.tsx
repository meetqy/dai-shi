import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { PageTopNav } from "~/components/PageTopNav";
import { getAllBrochures } from "~/lib/brochures";

export const metadata = {
	title: "招生简章列表",
	description: "查看戴氏教育历年高考全日制招生简章",
};

export default function BrochuresPage() {
	const brochures = getAllBrochures();

	return (
		<div className="bg-slate-50 pb-12 md:pb-20">
			<PageTopNav backHref="/" backLabel="返回首页" title="招生简章" />
			<div className="container mx-auto px-4 pt-8 md:pt-12">
				<div className="mb-12 text-center">
					<h1 className="mb-4 font-bold text-3xl text-slate-900 md:text-5xl">
						招生简章
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-slate-600">
						为您提供最新、最全面的高考全日制备考方案与招生信息。
					</p>
				</div>

				<div className="mx-auto grid max-w-4xl gap-6">
					{brochures.map((brochure) => (
						<Link
							className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md md:items-center md:p-8"
							href={`/zhao-sheng-jian-zhang/${brochure.year}`}
							key={brochure.year}
						>
							<div className="flex min-w-0 items-start gap-4 md:items-center md:gap-6">
								<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-bold text-2xl text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
									{brochure.year.slice(-2)}
								</div>
								<div className="min-w-0 flex-1">
									<h2 className="wrap-break-word mb-1 font-bold text-slate-900 text-xl md:text-2xl">
										{brochure.title}
									</h2>
									<p className="text-slate-500">
										发布日期：{Number(brochure.year) - 1}-01-01
									</p>
								</div>
							</div>
							<ChevronRightIcon className="size-6 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-primary" />
						</Link>
					))}

					{brochures.length === 0 && (
						<div className="rounded-2xl border border-slate-300 border-dashed py-20 text-center">
							<p className="text-slate-500">暂无招生简章内容</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
