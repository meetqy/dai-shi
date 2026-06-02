export function CampusEnvironment() {
	return (
		<section className="bg-slate-50 py-20" id="campus-life">
			<div className="container mx-auto px-4">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl text-slate-900 md:text-4xl">
						校区环境展示
					</h2>
					<p className="mx-auto max-w-2xl text-slate-600">
						教学区、宿舍区、自习区与生活配套统一规划，为学生提供舒适、专注的备考环境。
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
					{[1, 2, 3, 4, 5, 6].map((i) => (
						<div
							className="flex aspect-video items-center justify-center rounded-lg bg-slate-200 text-slate-400"
							key={i}
						>
							校区环境图片占位 {i}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
