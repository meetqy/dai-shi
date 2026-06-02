import { BookOpenTextIcon, FileStackIcon, Layers3Icon } from "lucide-react";

export function TeachingSystem() {
	const features = [
		{
			icon: <BookOpenTextIcon className="h-8 w-8 text-primary" />,
			title: "标准化课程体系",
			desc: "围绕高考目标建立更清晰的教学进度与内容安排",
		},
		{
			icon: <FileStackIcon className="h-8 w-8 text-primary" />,
			title: "专属教研资料",
			desc: "提供阶段讲义、训练题组与针对性复习资料",
		},
		{
			icon: <Layers3Icon className="h-8 w-8 text-primary" />,
			title: "分层教学方案",
			desc: "根据学生基础差异匹配更合适的教学方法",
		},
	];

	return (
		<section className="bg-white py-20" id="teaching">
			<div className="container mx-auto px-4 text-center">
				<h2 className="mb-12 font-bold text-3xl text-slate-900 md:text-4xl">
					教学教研体系
				</h2>
				<div className="grid gap-8 md:grid-cols-3">
					{features.map((f) => (
						<div
							className="rounded-xl border border-slate-100 p-8"
							key={f.title}
						>
							<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								{f.icon}
							</div>
							<h3 className="mb-4 font-bold text-xl">{f.title}</h3>
							<p className="text-slate-600">{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
