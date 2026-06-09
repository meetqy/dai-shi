import type { Metadata } from "next";
import { PageTopNav } from "~/components/PageTopNav";
import { PhoneButton } from "~/components/phone-action";
import { TeacherCard } from "~/components/teachers/TeacherCard";
import { SITE_HOTLINE_TEXT, SITE_FULL_NAME } from "~/lib/constants/site";
import { TEACHERS } from "~/lib/constants/teachers";

export const metadata: Metadata = {
	title: "老师团队",
	description:
		`查看${SITE_FULL_NAME}核心老师介绍，了解老师履历、教学成果与教研方向。`,
};

export default function TeachersPage() {
	return (
		<div className="min-h-screen bg-slate-50">
			<PageTopNav backHref="/" backLabel="返回首页" title="老师团队" />
			<main className="pb-16">
				<section className="bg-white">
					<div className="container mx-auto px-4 py-10 md:py-14">
						<p className="font-semibold text-primary text-sm">老师团队</p>
						<h1 className="mt-3 max-w-4xl font-bold text-4xl text-slate-950 leading-tight md:text-5xl">
							核心老师介绍与教学履历
						</h1>
						<p className="mt-5 max-w-4xl text-lg text-slate-600 leading-8">
							这里集中展示{SITE_FULL_NAME}核心老师的教学背景、教研方向与代表性成果，方便家长和学生更直观了解师资实力。
						</p>
						<div className="mt-8">
							<PhoneButton className="h-12 rounded-xl px-6 font-semibold">
								电话咨询老师安排：{SITE_HOTLINE_TEXT}
							</PhoneButton>
						</div>
					</div>
				</section>

				<section className="container mx-auto px-4 pt-6 md:pt-8">
					<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{TEACHERS.map((teacher) => (
							<TeacherCard key={teacher.slug} teacher={teacher} />
						))}
					</div>
				</section>
			</main>
		</div>
	);
}
