import { ArrowRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { MarkdownContent } from "~/components/MarkdownContent";
import { PageTopNav } from "~/components/PageTopNav";
import { PhoneButton, PhoneLink } from "~/components/phone-action";
import { Button } from "~/components/ui/button";
import { SITE_HOTLINE_TEXT } from "~/lib/constants/site";
import {
	getKnowledgeArticleByAnySlug,
	getKnowledgeArticles,
	resolveKnowledgeHref,
} from "~/lib/knowledge-base";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return getKnowledgeArticles().map((article) => ({
		slug: article.slug,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { slug } = await params;
	const articleResult = getKnowledgeArticleByAnySlug(slug);
	const article = articleResult?.article ?? null;

	if (!article) {
		return {
			title: "未找到资料",
		};
	}

	return {
		description: article.summary,
		title: `${article.title} - 资料库`,
	};
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
	const { slug } = await params;
	const articleResult = getKnowledgeArticleByAnySlug(slug);

	if (!articleResult) {
		notFound();
	}

	if (!articleResult.isCanonical) {
		redirect(encodeURI(`/zi-liao-ku/${articleResult.article.slug}`));
	}

	const { article } = articleResult;

	return (
		<div className="min-h-screen bg-white">
			<PageTopNav
				backHref="/zi-liao-ku"
				backLabel="返回资料库"
				title={article.title}
			/>
			<main className="container mx-auto px-4 py-10 md:py-14">
				<div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
					<article>
						<header className="border-slate-200 border-b pb-8">
							<div className="flex flex-wrap gap-2">
								<span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 text-sm">
									{article.categoryLabel}
								</span>
								{article.year ? (
									<span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600 text-sm">
										{article.year} 年资料
									</span>
								) : null}
							</div>
							<h1 className="mt-5 font-bold text-4xl text-slate-950 leading-tight md:text-5xl">
								{article.title}
							</h1>
							<p className="mt-5 text-slate-600 leading-8">{article.summary}</p>
						</header>

						{article.historical ? (
							<div className="my-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900 leading-8">
								如需了解当前收费、考试时间、政策或校区安排，可以查看相关页面或电话咨询。
								{article.relatedLatestHref ? (
									<Link
										className="ml-2 font-semibold underline-offset-4 hover:underline"
										href={article.relatedLatestHref}
									>
										查看相关页面
									</Link>
								) : null}
							</div>
						) : null}

						<MarkdownContent
							content={article.content}
							resolveHref={resolveKnowledgeHref}
						/>
					</article>

					<aside className="lg:sticky lg:top-32 lg:self-start">
						<div className="rounded-2xl bg-slate-50 p-6">
							<h2 className="font-semibold text-slate-950">阅读提示</h2>
							<div className="mt-4 space-y-4 text-slate-600 text-sm leading-7">
								<p>分类：{article.categoryLabel}</p>
								{article.publishedAt ? (
									<p>发布日期：{article.publishedAt}</p>
								) : null}
								<p>统一咨询电话：{SITE_HOTLINE_TEXT}</p>
							</div>
							<div className="mt-6 flex flex-col gap-3">
								<PhoneButton className="h-11 rounded-xl">
									电话确认最新信息
								</PhoneButton>
								{article.relatedLatestHref ? (
									<Button asChild className="h-11 rounded-xl" variant="outline">
										<Link href={article.relatedLatestHref}>
											查看相关页面
											<ArrowRightIcon className="size-4" />
										</Link>
									</Button>
								) : null}
								<Button asChild className="h-11 rounded-xl" variant="outline">
									<PhoneLink>咨询热线：{SITE_HOTLINE_TEXT}</PhoneLink>
								</Button>
							</div>
						</div>
					</aside>
				</div>
			</main>
		</div>
	);
}
