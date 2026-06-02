export function CoreEndorsement() {
	const stats = [
		{ label: "办学经验", value: "30+" },
		{ label: "全国校区", value: "200+" },
		{ label: "专职教师", value: "1000+" },
		{ label: "服务学生", value: "10万+" },
	];

	return (
		<section className="bg-white py-16">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
					{stats.map((stat) => (
						<div className="text-center" key={stat.label}>
							<div className="mb-2 font-bold text-4xl text-blue-600 md:text-5xl">
								{stat.value}
							</div>
							<div className="font-medium text-slate-600">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
