import Image from "next/image";
import Link from "next/link";
import { TEACHERS } from "~/lib/constants/teachers";

export function FacultyTeam() {
	return (
		<section className="bg-slate-50 py-20" id="faculty">
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
						<Link
							className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
							href={`/lao-shi/${teacher.slug}`}
							key={teacher.slug}
						>
							<div className="relative h-64">
								<Image
									alt={`${teacher.name}老师`}
									className="object-cover object-top"
									fill
									sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
									src={teacher.image}
								/>
							</div>
							<div className="p-6">
								<h3 className="mb-1 font-bold text-lg">{teacher.name}</h3>
								<p className="mb-3 text-primary text-sm">{teacher.title}</p>
								<p className="text-slate-500 text-sm italic">
									{teacher.summary}
								</p>
								<p className="mt-4 font-medium text-primary text-sm">
									查看老师详情
								</p>
							</div>
						</Link>
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
