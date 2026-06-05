import Image from "next/image";

const campusImages = [
	{ src: "/assets/校区环境1.png", alt: "校区环境展示一" },
	{ src: "/assets/校区环境2.jpg", alt: "校区环境展示二" },
	{ src: "/assets/校区环境3.jpg", alt: "校区环境展示三" },
	{ src: "/assets/校区环境4.jpg", alt: "校区环境展示四" },
	{ src: "/assets/校区环境5.jpg", alt: "校区环境展示五" },
	{ src: "/assets/校区环境6.png", alt: "校区环境展示六" },
];

export function CampusEnvironment() {
	return (
		<section className="bg-slate-50 py-20" id="xiao-qu">
			<div className="container mx-auto px-4">
				<div className="mb-16 text-center">
					<h2 className="mb-4 font-bold text-3xl text-slate-900 md:text-4xl">
						孩子在戴氏的学习环境
					</h2>
					<p className="mx-auto max-w-2xl text-slate-600">
						教室、宿舍、自习室和生活区统一规划，孩子在安静、专注的环境里安心备考。
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
					{campusImages.map((image) => (
						<div
							className="relative aspect-video overflow-hidden rounded-lg"
							key={image.src}
						>
							<Image
								alt={image.alt}
								className="object-cover"
								fill
								sizes="(min-width: 768px) 33vw, 50vw"
								src={image.src}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
