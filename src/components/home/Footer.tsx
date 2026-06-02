import Link from "next/link";

export function Footer() {
	return (
		<footer className="bg-slate-900 py-16 text-white">
			<div className="container mx-auto px-4">
				<div className="mb-12 grid gap-12 md:grid-cols-4">
					<div className="col-span-1 md:col-span-1">
						<h3 className="mb-6 font-bold text-2xl">戴氏教育</h3>
						<p className="text-slate-400 text-sm leading-relaxed">
							专注个性化教学与高考备考服务，围绕教学、管理、陪伴与规划，为学生提供更系统的成长支持。
						</p>
					</div>

					<div>
						<h4 className="mb-6 font-bold text-slate-500 text-sm uppercase tracking-widest">
							核心项目
						</h4>
						<ul className="space-y-4 text-slate-400">
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#program"
								>
									高考全日制
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#teaching"
								>
									教学教研
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="#faculty"
								>
									师资团队
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-6 font-bold text-slate-500 text-sm uppercase tracking-widest">
							帮助中心
						</h4>
						<ul className="space-y-4 text-slate-400">
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="/faq"
								>
									常见问题
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="/campuses"
								>
									校区查询
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="/zhao-sheng-jian-zhang"
								>
									招生简章
								</Link>
							</li>
							<li>
								<Link
									className="transition-colors hover:text-white"
									href="/news"
								>
									考试资讯
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-6 font-bold text-slate-500 text-sm uppercase tracking-widest">
							联系我们
						</h4>
						<ul className="space-y-4 text-slate-400">
							<li>咨询热线：4444-028-222</li>
							<li>联系邮箱：info@daishi.cn</li>
							<li>联系地址：四川省成都市</li>
						</ul>
					</div>
				</div>

				<div className="border-white/10 border-t pt-8 text-center text-slate-500 text-sm">
					<p>© 2026 戴氏教育 版权所有</p>
				</div>
			</div>
		</footer>
	);
}
