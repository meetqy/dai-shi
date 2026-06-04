import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
	return (
		<section className="relative w-full overflow-hidden">
			<div className="relative h-125 w-full">
				<Image
					alt="戴氏教育高考提分主视觉"
					className="object-cover"
					fill
					priority
					sizes="100vw"
					src="/assets/高考提分解决方案-(4).jpg"
				/>
			</div>

			<h1 className="sr-only">专注高考提分 成就理想未来</h1>

			<div className="absolute inset-0 flex items-end">
				<div className="w-full bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-32 pb-8">
					<div className="container mx-auto px-6 text-center text-white md:px-16">
						<h2
							className="mb-3 font-bold text-xl md:text-2xl"
							style={{ textShadow: "0 2px 12px rgba(0, 0, 0, 0.8)" }}
						>
							围绕学生目标、学科基础与学习状态，提供更系统的高考备考解决方案。
						</h2>
						<Link
							className="mt-4 inline-block rounded-full bg-primary px-8 py-3 font-semibold text-lg text-primary-foreground transition-all hover:bg-primary/90"
							href="#gao-kao-quan-ri-zhi"
						>
							了解课程项目
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
