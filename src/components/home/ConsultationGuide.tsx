import { Button } from "~/components/ui/button";

export function ConsultationGuide() {
	return (
		<section className="border-slate-200 border-y bg-slate-50 py-16">
			<div className="container mx-auto px-4">
				<div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:flex-row md:p-12">
					<div>
						<h2 className="mb-2 font-bold text-2xl text-slate-900 md:text-3xl">
							现在就开启升学规划
						</h2>
						<p className="text-slate-600">
							预约专业老师一对一咨询，获取更适合孩子当前阶段的备考建议。
						</p>
					</div>
					<div className="flex flex-col items-center gap-4 sm:flex-row">
						<div className="text-center md:text-right">
							<div className="mb-1 text-slate-500 text-sm">电话咨询</div>
							<div className="font-bold text-2xl text-blue-700">
								4444-028-222
							</div>
						</div>
						<Button
							className="rounded-full bg-blue-600 px-8 py-6 text-lg hover:bg-blue-700"
							size="lg"
						>
							预约到访
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
