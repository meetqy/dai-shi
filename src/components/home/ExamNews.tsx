import Link from "next/link";

export function ExamNews() {
	const news = [
		{
			date: "2026-05-20",
			title: "2026 年高考政策新变化，家长和学生需要重点关注什么？",
			category: "政策",
		},
		{
			date: "2026-05-15",
			title: "高考冲刺阶段如何高效复习？这 5 个方法值得参考",
			category: "备考",
		},
		{
			date: "2026-05-10",
			title: "重点院校最新招生信息发布，志愿规划要提前准备",
			category: "招生",
		},
	];

	return (
		<section className="bg-white py-20" id="news">
			<div className="container mx-auto px-4">
				<div className="mb-12 flex items-end justify-between">
					<div>
						<h2 className="mb-2 font-bold text-3xl text-slate-900 md:text-4xl">
							考试资讯
						</h2>
						<p className="text-slate-600">
							及时掌握高考政策、备考动态与升学信息。
						</p>
					</div>
					<Link
						className="font-semibold text-primary hover:underline"
						href="/news"
					>
						查看更多
					</Link>
				</div>

				<div className="grid gap-8 md:grid-cols-3">
					{news.map((item) => (
						<div className="group cursor-pointer" key={item.title}>
							<div className="mb-4 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-slate-200 text-slate-400">
								资讯配图占位
							</div>
							<div className="mb-2 flex items-center gap-3">
								<span className="font-bold text-primary text-xs uppercase tracking-wider">
									{item.category}
								</span>
								<span className="text-slate-400 text-xs">{item.date}</span>
							</div>
							<h3 className="font-bold text-lg leading-tight transition-colors group-hover:text-primary">
								{item.title}
							</h3>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
