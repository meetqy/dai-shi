export function HeroBanner() {
	return (
		<section className="relative w-full overflow-hidden">
			<div className="flex h-125 w-full items-center justify-center bg-slate-200 font-medium text-slate-400 text-xl">
				首屏横幅图片占位（1920 x 500）
			</div>

			<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-center text-white">
				<h1 className="mb-4 font-bold text-4xl md:text-6xl">
					专注高考提分 成就理想未来
				</h1>
				<p className="max-w-2xl text-xl md:text-2xl">
					围绕学生目标、学科基础与学习状态，提供更系统的高考备考解决方案。
				</p>
				<button
					className="mt-8 rounded-full bg-blue-600 px-8 py-3 font-semibold text-lg text-white transition-all hover:bg-blue-700"
					type="button"
				>
					了解课程项目
				</button>
			</div>
		</section>
	);
}
