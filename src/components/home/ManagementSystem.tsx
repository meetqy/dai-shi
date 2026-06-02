export function ManagementSystem() {
	const points = [
		{ title: "严格作息管理", desc: "帮助学生建立稳定、高效的备考节奏" },
		{ title: "日常检测反馈", desc: "及时检查知识掌握情况并快速查漏补缺" },
		{ title: "班主任陪伴督学", desc: "学习与生活双线跟进，提升执行效率" },
		{ title: "阶段成长报告", desc: "定期向家长同步学习表现与成长变化" },
	];

	return (
		<section className="bg-white py-20" id="management">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center gap-12 md:flex-row-reverse">
					<div className="flex-1">
						<h2 className="mb-8 font-bold text-3xl text-slate-900 md:text-4xl">
							教学管理体系
						</h2>
						<div className="grid gap-6 sm:grid-cols-2">
							{points.map((p) => (
								<div className="rounded-xl bg-slate-50 p-6" key={p.title}>
									<h3 className="mb-2 font-bold text-primary">{p.title}</h3>
									<p className="text-slate-600 text-sm">{p.desc}</p>
								</div>
							))}
						</div>
					</div>
					<div className="flex h-[400px] w-full flex-1 items-center justify-center rounded-2xl bg-slate-200 text-slate-400">
						教学管理配图占位
					</div>
				</div>
			</div>
		</section>
	);
}
