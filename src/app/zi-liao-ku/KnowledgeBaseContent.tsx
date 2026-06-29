import { ArchiveIcon, BookOpenTextIcon, CalendarDaysIcon } from "lucide-react";
import Link from "next/link";
import { PageHero } from "~/components/PageHero";
import { PageTopNav } from "~/components/PageTopNav";
import { PhoneButton } from "~/components/phone-action";
import { SITE_FULL_NAME, SITE_HOTLINE_TEXT } from "~/lib/constants/site";
import {
	getKnowledgeArticleFilterById,
	getKnowledgeArticleFilters,
	getKnowledgeArticles,
	getKnowledgeArticlesByFilter,
	type KnowledgeArticleFilter,
} from "~/lib/knowledge-base";

type KnowledgeBaseContentProps = {
	activeFilterId?: string;
};

function formatMeta(article: ReturnType<typeof getKnowledgeArticles>[number]) {
	const parts = [
		article.categoryLabel,
		article.year ? `${article.year} 年资料` : undefined,
	].filter(Boolean);
	return parts.join(" · ");
}

function filterHref(filter: KnowledgeArticleFilter) {
	return `/zi-liao-ku/fen-lei/${filter.id}`;
}

function FilterButton({
	active,
	children,
	href,
}: {
	active: boolean;
	children: React.ReactNode;
	href: string;
}) {
	return (
		<Link
			aria-current={active ? "page" : undefined}
			className={
				active
					? "rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground text-sm transition-colors"
					: "rounded-full bg-slate-100 px-4 py-2 font-medium text-slate-700 text-sm transition-colors hover:bg-primary/10 hover:text-primary"
			}
			href={href}
		>
			{children}
		</Link>
	);
}

export function KnowledgeBaseContent({
	activeFilterId,
}: KnowledgeBaseContentProps) {
	const allArticles = getKnowledgeArticles();
	const articles = getKnowledgeArticlesByFilter(activeFilterId) ?? allArticles;
	const filters = getKnowledgeArticleFilters();
	const activeFilter = activeFilterId
		? getKnowledgeArticleFilterById(activeFilterId)
		: null;
	const yearArticleCount = allArticles.filter((article) => article.year).length;

	return (
		<div className="min-h-screen bg-slate-50 pb-16 md:pb-24">
			<PageTopNav backHref="/" backLabel="返回首页" title="资料库" />
			<PageHero
				actions={
					<PhoneButton className="h-12 rounded-xl px-6 font-semibold">
						电话咨询：{SITE_HOTLINE_TEXT}
					</PhoneButton>
				}
				badge={`${SITE_FULL_NAME} · 家长资料`}
				description={
					activeFilter
						? activeFilter.description
						: "这里集中展示课程、校区、收费、考试时间与升学服务相关信息，方便家长按主题快速查找。"
				}
				title={activeFilter ? activeFilter.title : "资料库"}
			/>

			<section className="container mx-auto px-4 py-10">
				<div className="grid gap-4 md:grid-cols-3">
					<div className="rounded-2xl bg-white p-6">
						<ArchiveIcon className="size-5 text-primary" />
						<div className="mt-4 text-slate-500 text-sm">当前资料</div>
						<div className="mt-2 font-bold text-3xl text-slate-950">
							{articles.length}
						</div>
					</div>
					<div className="rounded-2xl bg-white p-6">
						<CalendarDaysIcon className="size-5 text-primary" />
						<div className="mt-4 text-slate-500 text-sm">年份资料</div>
						<div className="mt-2 font-bold text-3xl text-slate-950">
							{yearArticleCount}
						</div>
					</div>
					<div className="rounded-2xl bg-white p-6">
						<BookOpenTextIcon className="size-5 text-primary" />
						<div className="mt-4 text-slate-500 text-sm">分类入口</div>
						<div className="mt-2 font-bold text-3xl text-slate-950">
							{filters.length}
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 pb-10">
				<div className="rounded-2xl bg-white p-6 md:p-8">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<div>
							<div className="text-primary text-sm">资料分类</div>
							<h2 className="mt-1 font-bold text-2xl text-slate-950">
								按分类查看
							</h2>
						</div>
						<FilterButton active={!activeFilterId} href="/zi-liao-ku">
							全部资料（{allArticles.length}）
						</FilterButton>
					</div>
					<div className="mt-5 flex flex-wrap gap-2">
						{filters.map((filter) => (
							<FilterButton
								active={activeFilterId === filter.id}
								href={filterHref(filter)}
								key={filter.id}
							>
								{filter.title}（{filter.count}）
							</FilterButton>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4">
				<div className="mb-6 flex items-end justify-between gap-4">
					<div>
						<div className="text-primary text-sm">
							{activeFilter ? "筛选结果" : "全部资料"}
						</div>
						<h2 className="mt-1 font-bold text-2xl text-slate-950">
							{activeFilter ? activeFilter.title : "全部资料"}
						</h2>
					</div>
					<div className="text-slate-500 text-sm">{articles.length} 篇</div>
				</div>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{articles.map((article) => (
						<Link
							className="group rounded-2xl bg-white p-5 transition-colors hover:bg-slate-100"
							href={`/zi-liao-ku/${article.slug}`}
							key={article.slug}
						>
							<div className="flex flex-wrap gap-2">
								<span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-500 text-xs group-hover:bg-white">
									{formatMeta(article)}
								</span>
							</div>
							<h3 className="mt-4 line-clamp-2 font-semibold text-lg text-slate-950 leading-7">
								{article.title}
							</h3>
							<p className="mt-3 line-clamp-3 text-slate-600 text-sm leading-7">
								{article.summary}
							</p>
						</Link>
					))}
				</div>
			</section>
		</div>
	);
}
