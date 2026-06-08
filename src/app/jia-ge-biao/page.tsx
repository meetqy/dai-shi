import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { PageTopNav } from "~/components/PageTopNav";

export const metadata = {
	title: "价格表",
	description: "查看戴氏教育各校区各类课程价格表与优惠政策",
};

const priceListItems = [
	{
		slug: "shun-ji-gao-kao-fu-du",
		title: "总部校区（顺吉）2027届高考复读优惠政策",
		description: "高考中心总部校区（顺吉）2027届高考复读、高三全日制全科班最新优惠政策与收费标准",
		category: "高考复读",
		campus: "总部校区（顺吉）",
	},
];

export default function PriceListPage() {
	return (
		<div className="bg-slate-50 pb-12 md:pb-20">
			<PageTopNav backHref="/" backLabel="返回首页" title="价格表" />
			<div className="container mx-auto px-4 pt-8 md:pt-12">
				<div className="mb-12 text-center">
					<h1 className="mb-4 font-bold text-3xl text-slate-900 md:text-5xl">
						价格表
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-slate-600">
						为您提供戴氏教育各校区各类课程的价格信息与优惠政策。
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{priceListItems.map((item) => (
						<Link
							className="group flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-primary/30 hover:shadow-sm md:items-center md:p-8"
							href={`/jia-ge-biao/${item.slug}`}
							key={item.slug}
						>
							<div className="flex min-w-0 items-start gap-4 md:items-center md:gap-6">
								<div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
									<span className="text-xs font-medium">{item.campus}</span>
								</div>
								<div className="min-w-0 flex-1">
									<div className="mb-1 inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600">
										{item.category}
									</div>
									<h2 className="wrap-break-word mb-2 font-bold text-slate-900 text-lg md:text-xl">
										{item.title}
									</h2>
									<p className="text-slate-500 text-sm">
										{item.description}
									</p>
								</div>
							</div>
							<ChevronRightIcon className="size-6 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-primary" />
						</Link>
					))}

					{priceListItems.length === 0 && (
						<div className="rounded-2xl border border-slate-300 border-dashed py-20 text-center">
							<p className="text-slate-500">暂无价格表内容</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
