import Link from "next/link";

export function AdmissionsEntry() {
	return (
		<section className="bg-blue-700 py-20 text-white" id="brochure">
			<div className="container mx-auto px-4 text-center">
				<h2 className="mb-6 font-bold text-3xl md:text-5xl">
					2026 招生简章入口
				</h2>
				<p className="mx-auto mb-10 max-w-2xl text-xl opacity-90">
					查看最新招生简章，快速了解课程设置、收费说明、报名流程与入学安排。
				</p>
				<Link
					className="inline-block rounded-full bg-white px-10 py-4 font-bold text-blue-700 text-lg transition-colors hover:bg-slate-100"
					href="/brochure"
				>
					查看招生简章
				</Link>
			</div>
		</section>
	);
}
