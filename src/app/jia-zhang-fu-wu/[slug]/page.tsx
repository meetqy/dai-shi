import type { LucideIcon } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PageTopNav } from "~/components/PageTopNav";
import { PhoneButton } from "~/components/phone-action";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { type BottomCta, type JiaZhangArticle } from "~/lib/constants/jia-zhang-fu-wu";
import { SITE_HOTLINE_TEXT } from "~/lib/constants/site";
import { getAllJiaZhangArticles, getJiaZhangArticleBySlug } from "~/lib/jia-zhang-fu-wu";
import { cn } from "~/lib/utils";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllJiaZhangArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getJiaZhangArticleBySlug(slug);
  if (!article) {
    return { title: "未找到页面" };
  }
  return {
    description: article.summary,
    title: `${article.title} - 戴氏教育家长服务`,
  };
}

function InlineFaqCta({ buttonText, description, icon: Icon, title }: { buttonText: string; description: string; icon: LucideIcon; title: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-sm">
      <div className="flex flex-col gap-6 rounded-[calc(1.5rem-1px)] bg-slate-50/50 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="size-6" />
          </div>
          <div className="max-w-xl">
            <h3 className="font-bold text-slate-900 text-xl leading-tight">{title}</h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center">
          <PhoneButton className="h-12 w-full rounded-xl px-8 font-semibold md:w-auto">{buttonText}</PhoneButton>
        </div>
      </div>
    </div>
  );
}

function FaqBlock({ article }: { article: JiaZhangArticle }) {
  if (article.content.kind !== "faq") return null;
  const { sections, bottomCta } = article.content;

  const visibleSections = sections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => !item.answer.includes("（待补充）")),
    }))
    .filter((section) => section.items.length > 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: visibleSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    ),
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />
      <div className="space-y-12">
        {visibleSections.map((section) => (
          <div className="space-y-6" key={section.title}>
            <section className="space-y-4">
              <h2 className="border-red-500 border-l-4 pl-4 font-semibold text-slate-800 text-xl">{section.title}</h2>
              <Accordion collapsible type="single">
                {section.items.map((item) => (
                  <AccordionItem className={cn(item.isNegative && "bg-red-50/40")} key={`${section.title}-${item.question}`} value={`${section.title}-${item.question}`}>
                    <AccordionTrigger className="py-4 text-base text-slate-900 hover:no-underline">
                      <span className="pr-4 font-medium text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="max-w-none text-slate-600 leading-7">{item.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
            {section.cta ? <InlineFaqCta {...section.cta} /> : null}
          </div>
        ))}
      </div>
      {bottomCta ? <BottomCtaBlock cta={bottomCta} /> : null}
    </>
  );
}

function BottomCtaBlock({ cta }: { cta: BottomCta }) {
  return (
    <div className="mt-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-12 text-center text-white md:px-12 md:py-16">
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-medium text-sm text-white/90 backdrop-blur-sm">{cta.badge}</div>
          <h2 className="font-bold text-3xl leading-tight md:text-5xl">{cta.title}</h2>
          <p className="mx-auto mt-6 text-lg text-slate-300 md:text-xl">{cta.description}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PhoneButton className="h-14 rounded-2xl px-10 text-lg" size="lg">
              {cta.buttonText}：{SITE_HOTLINE_TEXT}
            </PhoneButton>
          </div>
          <p className="mt-6 text-slate-400 text-sm">服务时间：周一至周日 09:00 - 21:00</p>
        </div>
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      </div>
    </div>
  );
}

export default async function JiaZhangArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getJiaZhangArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <PageTopNav backHref="/jia-zhang-fu-wu" backLabel="返回家长服务" title={article.title} />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-4 font-bold text-4xl text-slate-900 md:text-5xl">家长问答</h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">关于成都戴氏教育的各类家长疑问解答，涵盖收费标准、全封闭管理、校区地址及提分效果。如有其他问题欢迎随时咨询我们。</p>
        </div>

        {/* 文章内容 */}
        {article.content.kind === "faq" ? <FaqBlock article={article} /> : null}
      </div>
    </div>
  );
}
