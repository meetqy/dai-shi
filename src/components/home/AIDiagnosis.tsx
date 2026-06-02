export function AIDiagnosis() {
	return (
		<section className="overflow-hidden bg-white py-20">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center gap-12 rounded-3xl bg-slate-900 p-8 text-white md:flex-row md:p-16">
					<div className="flex-1">
						<div className="mb-6 inline-block rounded-full bg-blue-500 px-4 py-1 font-bold text-sm">
							AI 智能分析
						</div>
						<h2 className="mb-6 font-bold text-3xl md:text-5xl">
							AI 学情诊断与提分方案
						</h2>
						<p className="mb-8 text-lg text-slate-300 leading-relaxed">
							通过人工智能识别学生知识薄弱点，结合阶段成绩、学习习惯与目标院校需求，生成更有针对性的提分建议与学习路径。
						</p>
						<div className="flex flex-wrap gap-4">
							<div className="rounded-xl bg-white/10 px-6 py-4">
								<div className="font-bold text-2xl text-blue-400">精准诊断</div>
								<div className="text-slate-400 text-sm">定位薄弱环节</div>
							</div>
							<div className="rounded-xl bg-white/10 px-6 py-4">
								<div className="font-bold text-2xl text-blue-400">个性方案</div>
								<div className="text-slate-400 text-sm">匹配提分路径</div>
							</div>
						</div>
					</div>
					<div className="flex aspect-square w-full flex-1 items-center justify-center rounded-2xl border border-white/10 bg-slate-800 text-slate-500 md:aspect-auto md:h-[400px]">
						AI 学情诊断界面占位
					</div>
				</div>
			</div>
		</section>
	);
}
