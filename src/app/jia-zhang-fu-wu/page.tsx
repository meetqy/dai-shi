import { CalendarIcon, ChevronRightIcon, FileTextIcon, TagIcon } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { PageTopNav } from "~/components/PageTopNav";
import { PhoneButton } from "~/components/phone-action";
import { getCategoryDescription, getCategoryLabel, getCategoriesWithArticles, JIA_ZHANG_ARTICLES } from "~/lib/constants/jia-zhang-fu-wu";
import { SITE_HOTLINE_TEXT } from "~/lib/constants/site";
import { getAllJiaZhangArticles } from "~/lib/jia-zhang-fu-wu";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "家长服务 - 戴氏教育高考中心",
  description: "戴氏教育家长服务中心：学管服务流程、教学管理规范、家长指南、学习方法、备考攻略与高考资讯集中呈现，帮助家长系统性解决高三备考中的各类问题。",
};

function formatDate(iso: string) {
  const date = new Date(iso);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export default function JiaZhangFuWuPage() {
  const articles = getAllJiaZhangArticles();
  const availableCategories = getCategoriesWithArticles();
  const totalArticles = articles.length;
  const totalFaqCount = JIA_ZHANG_ARTICLES.reduce((sum, article) => {
    if (article.content.kind === "faq") {
      return sum + article.content.sections.reduce((sectionSum, section) => sectionSum + section.items.length, 0);
    }
    return sum;
  }, 0);

  return (
    <div className="min-h-screen bg-slate-50 pb-16 md:pb-24">
      <PageTopNav backHref="/" backLabel="返回首页" title="家长服务" />

      {/* Hero */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-medium text-primary text-sm">戴氏教育 · 家长服务中心</div>
            <h1 className="mb-4 font-bold text-3xl text-slate-900 md:text-5xl">家长服务</h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600 leading-relaxed md:text-lg">
              系统性呈现戴氏教育的学管服务流程、教学管理规范、家长沟通指南与备考攻略。 帮助家长在孩子高三这一年，少一分焦虑，多一分笃定。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PhoneButton className="h-12 w-full rounded-xl px-8 font-semibold sm:w-auto" size="lg">
                立即电话咨询：{SITE_HOTLINE_TEXT}
              </PhoneButton>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span>已收录</span>
                <span className="font-semibold text-slate-900">{totalArticles}</span>
                <span>篇</span>
                <span className="text-slate-300">·</span>
                <span className="font-semibold text-slate-900">{totalFaqCount}</span>
                <span>个家长问答</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 分类导航 */}
      {availableCategories.length > 0 && (
        <section className="border-slate-200 border-b bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <span className="mr-2 flex shrink-0 items-center gap-1.5 font-medium text-slate-500 text-sm">
                <TagIcon className="size-4" />
                分类：
              </span>
              {availableCategories.map((category) => (
                <span
                  className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-medium text-primary text-sm"
                  key={category.id}
                  title={category.description}
                >
                  {category.label}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 文章列表 */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex items-baseline justify-between">
            <h2 className="font-bold text-2xl text-slate-900">全部内容</h2>
            <span className="text-slate-500 text-sm">共 {articles.length} 篇</span>
          </div>

          {articles.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-slate-300 border-dashed bg-white py-20 text-center">
              <FileTextIcon className="mx-auto mb-3 size-10 text-slate-300" />
              <p className="text-slate-500">暂无内容，敬请期待</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {articles.map((article) => (
                <Link
                  className="group block rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-primary/40 hover:shadow-sm md:p-8"
                  href={`/jia-zhang-fu-wu/${article.slug}`}
                  key={article.slug}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className={cn("inline-flex items-center rounded-full px-3 py-1 font-medium text-xs", article.highlighted ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-700")}>
                          {getCategoryLabel(article.category)}
                        </span>
                        {article.highlighted && <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700 text-xs">置顶</span>}
                      </div>
                      <h3 className="wrap-break-word mb-2 font-bold text-slate-900 text-xl transition-colors group-hover:text-primary md:text-2xl">{article.title}</h3>
                      <p className="wrap-break-word mb-3 line-clamp-2 text-slate-600 leading-relaxed">{article.summary}</p>
                      <p className="text-slate-400 text-sm">{getCategoryDescription(article.category)}</p>
                    </div>
                    <ChevronRightIcon className="mt-2 size-6 shrink-0 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-slate-100 border-t pt-4 text-slate-400 text-sm">
                    <CalendarIcon className="size-4" />
                    <span>发布于 {formatDate(article.publishedAt)}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-3xl bg-slate-900 px-6 py-10 text-center text-white md:px-12 md:py-14">
            <h2 className="font-bold text-2xl leading-tight md:text-4xl">还有问题没找到答案？</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300 md:text-lg">每个孩子的情况都不同。直接电话沟通，我们为您匹配最合适的方案。</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <PhoneButton className="h-12 rounded-xl px-8 font-semibold" size="lg">
                立即电话咨询：{SITE_HOTLINE_TEXT}
              </PhoneButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
