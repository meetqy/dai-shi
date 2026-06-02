export function HomeSchoolService() {
	return (
		<section className="bg-blue-600 py-20 text-white">
			<div className="container mx-auto px-4 text-center">
				<h2 className="mb-8 font-bold text-3xl md:text-4xl">家校共育服务</h2>
				<p className="mx-auto mb-12 max-w-3xl text-xl opacity-90">
					建立学校、家长与学生之间的高效沟通机制，让学习反馈、生活管理与心理状态支持更加及时、透明、有效。
				</p>
				<div className="grid gap-8 md:grid-cols-3">
					{["考勤动态同步", "周度学习反馈", "家长沟通指导"].map((item) => (
						<div
							className="rounded-xl bg-white/10 p-6 backdrop-blur-sm"
							key={item}
						>
							<div className="font-semibold text-lg">{item}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
