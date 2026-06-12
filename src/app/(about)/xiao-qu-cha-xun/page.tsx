import { GraduationCapIcon, MapPinIcon, SchoolIcon } from "lucide-react";
import type { Metadata } from "next";
import { PageHero } from "~/components/PageHero";
import { PageTopNav } from "~/components/PageTopNav";
import { PhoneButton } from "~/components/phone-action";
import { SimpleCard } from "~/components/ui/simple-card";
import { getVisibleCampuses } from "~/lib/constants/campuses";
import { SITE_FULL_NAME, SITE_HOTLINE_TEXT } from "~/lib/constants/site";

export const metadata: Metadata = {
	title: "校区查询",
	description: `查看${SITE_FULL_NAME}全部校区信息，快速了解各校区地址、课程方向、学习环境与到校咨询入口。`,
};

export default function CampusListPage() {
	const campuses = getVisibleCampuses();

	return (
		<div className="min-h-screen bg-slate-50">
			<PageTopNav backHref="/" backLabel="返回首页" title="校区查询" />
			<main className="pb-16">
				<PageHero
					actions={
						<PhoneButton className="h-12 rounded-xl px-6 font-semibold">
							电话咨询校区安排：{SITE_HOTLINE_TEXT}
						</PhoneButton>
					}
					badge={`${SITE_FULL_NAME} · 校区查询`}
					description={
						<>
							这里集中展示 {SITE_FULL_NAME}
							目前已整理的校区信息，方便家长先对比校区定位、课程方向、学习环境与到校方式，再决定进一步咨询。
						</>
					}
					title="校区查询"
				/>

				<section className="pb-12 md:pb-20">
					<div className="container mx-auto px-4 pt-8 md:pt-12">
						<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
							{campuses.map((campus) => (
								<SimpleCard
									description={campus.listSummary}
									href={`/xiao-qu-cha-xun/${campus.slug}`}
									imageAlt={campus.title}
									imageSrc={campus.coverImage}
									key={campus.slug}
									meta={`${campus.subtitle} · ${campus.address}`}
									title={campus.title}
								/>
							))}
							{campuses.length === 0 && (
								<div className="rounded-2xl border border-slate-300 border-dashed py-20 text-center">
									<p className="text-slate-500">暂无校区内容</p>
								</div>
							)}
						</div>
					</div>
				</section>

				<section className="container mx-auto px-4 pt-10">
					<div className="grid gap-6 rounded-2xl bg-white p-6 md:grid-cols-3 md:p-8">
						<div className="rounded-2xl bg-slate-50 p-5">
							<div className="inline-flex rounded-full bg-primary/10 p-2 text-primary">
								<MapPinIcon className="size-4" />
							</div>
							<h3 className="mt-4 font-semibold text-slate-950">先看位置</h3>
							<p className="mt-2 text-slate-600 text-sm leading-7">
								如果家长更关注到校距离、交通便利度和来访安排，可以优先查看各校区地址与路线信息。
							</p>
						</div>
						<div className="rounded-2xl bg-slate-50 p-5">
							<div className="inline-flex rounded-full bg-primary/10 p-2 text-primary">
								<GraduationCapIcon className="size-4" />
							</div>
							<h3 className="mt-4 font-semibold text-slate-950">再看课程</h3>
							<p className="mt-2 text-slate-600 text-sm leading-7">
								不同校区展示重点略有差异，家长可以先筛选更符合孩子学段与阶段目标的课程方向。
							</p>
						</div>
						<div className="rounded-2xl bg-slate-50 p-5">
							<div className="inline-flex rounded-full bg-primary/10 p-2 text-primary">
								<SchoolIcon className="size-4" />
							</div>
							<h3 className="mt-4 font-semibold text-slate-950">最后约到校</h3>
							<p className="mt-2 text-slate-600 text-sm leading-7">
								如果想进一步了解教室、自习区与管理节奏，建议先电话预约，再到校实地查看学习环境。
							</p>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
