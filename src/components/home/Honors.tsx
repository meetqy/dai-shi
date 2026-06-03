import { Award, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";
import { HONORS } from "~/lib/constants/honors";

export function Honors() {
	const featuredHonors = HONORS.slice(0, 3);
	const icons = [Trophy, ShieldCheck, Award];

	return (
		<section className="bg-white py-14 md:py-16" id="honors">
			<div className="container mx-auto px-4">
				<div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
					<div className="max-w-2xl">
						<p className="mb-3 font-semibold text-primary text-sm">权威认证</p>
						<h2 className="mb-3 font-bold text-2xl text-slate-900 md:text-3xl">
							用真实荣誉强化品牌可信度
						</h2>
						<p className="text-slate-600">
							首页不做大篇幅铺陈，只精选展示最有代表性的权威认可，让家长快速建立信任感。
						</p>
					</div>
					<div className="rounded-full bg-slate-50 px-4 py-2 text-slate-500 text-sm">
						30+ 年办学积累，沉淀长期口碑与社会认可
					</div>
				</div>

				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{featuredHonors.map((honor, index) => {
						const Icon = icons[index] ?? Award;

						return (
							<div
								className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-all hover:border-primary/20 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
								key={honor.title}
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
									<Icon className="h-6 w-6" />
								</div>

								<div className="mb-3 flex items-center justify-between gap-3">
									<h3 className="font-bold text-lg text-slate-900">
										{honor.title}
									</h3>
									{honor.year && (
										<span className="text-slate-400 text-sm">{honor.year}</span>
									)}
								</div>

								<p className="mb-2 font-medium text-primary/80 text-sm">
									颁发单位：{honor.issuer}
								</p>
								{honor.description && (
									<p className="line-clamp-2 text-slate-500 text-sm leading-relaxed">
										{honor.description}
									</p>
								)}
							</div>
						);
					})}
				</div>

				<div className="mt-6 rounded-2xl border border-slate-200 border-dashed bg-slate-50 px-5 py-4 text-center text-slate-500 text-sm">
					<span>
						更多品牌荣誉已整理为独立展示页，首页只保留精简背书更利于转化。
					</span>
					<Link
						className="ml-2 font-semibold text-primary transition-colors hover:text-primary/80"
						href="/honors"
					>
						查看全部荣誉资质
					</Link>
				</div>
			</div>
		</section>
	);
}
