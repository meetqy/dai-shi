import type { Brochure } from "~/lib/brochures";

export function BrochureTemplateGeneric({ brochure }: { brochure: Brochure }) {
	return (
		<div className="bg-white min-h-screen py-12 md:py-20">
			<article className="container mx-auto px-4 max-w-4xl">
				<header className="mb-12 border-b pb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
						{brochure.title}
					</h1>
					<div className="flex items-center gap-4 text-slate-500">
						<span className="bg-slate-100 px-3 py-1 rounded-full text-sm">通用模版</span>
						<time>{brochure.year}-01-01</time>
					</div>
				</header>
				<div className="prose prose-slate max-w-none prose-lg">
					<div className="whitespace-pre-wrap text-slate-700 leading-relaxed">
						{brochure.content}
					</div>
				</div>
			</article>
		</div>
	);
}
