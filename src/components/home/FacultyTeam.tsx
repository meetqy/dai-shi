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
					{[1, 2, 3, 4].map((i) => (
						<div
							className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
							key={i}
						>
							<div className="flex h-64 items-center justify-center bg-slate-200 text-slate-400">
								教师照片占位 {i}
							</div>
							<div className="p-6">
								<h3 className="mb-1 font-bold text-lg">骨干教师 {i}</h3>
								<p className="mb-3 text-blue-600 text-sm">10 年以上教学经验</p>
								<p className="text-slate-500 text-sm italic">
									关注学生基础、方法与状态，让每一次进步都更有方向。
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
