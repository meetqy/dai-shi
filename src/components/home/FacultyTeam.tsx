import Link from "next/link";
import { TeacherCard } from "~/components/teachers/TeacherCard";
import { TEACHERS } from "~/lib/constants/teachers";

export function FacultyTeam() {
	return (
		<section className="bg-slate-50 py-20" id="lao-shi-tuan-dui">
			<div className="container mx-auto px-4">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl text-slate-900 md:text-4xl">
						师资团队
					</h2>
					<p className="mx-auto max-w-2xl text-slate-600">
						严选学科骨干教师与教学带头人，形成经验丰富、分工明确、长期稳定的教学团队。
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{TEACHERS.map((teacher) => (
						<TeacherCard key={teacher.slug} teacher={teacher} />
					))}
				</div>
				<div className="mt-10 text-center">
					<Link
						className="font-semibold text-primary transition-opacity hover:opacity-80"
						href="/lao-shi"
					>
						查看全部老师详情
					</Link>
				</div>
			</div>
		</section>
	);
}
