import { notFound } from "next/navigation";
import Link from "next/link";
import { getBrochureByYear } from "~/lib/brochures";
import { ChevronLeftIcon, PhoneIcon, CheckCircle2Icon, BookOpenIcon, UsersIcon, ShieldCheckIcon, GraduationCapIcon } from "lucide-react";
import { Button } from "~/components/ui/button";
import { SITE_HOTLINE_TEL, SITE_HOTLINE_TEXT } from "~/lib/constants/site";

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { year } = await params;
  const brochure = getBrochureByYear(year);

  if (!brochure) return { title: "未找到页面" };

  return {
    title: `${brochure.title} - 戴氏教育`,
    description: brochure.content.slice(0, 150),
  };
}

export default async function BrochureDetailPage({ params }: PageProps) {
  const { year } = await params;
  const brochure = getBrochureByYear(year);

  if (!brochure) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* 顶部导航 */}
      <div className="sticky top-20 z-40 border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <Link href="/zhao-sheng-jian-zhang" className="flex items-center text-slate-600 hover:text-primary transition-colors">
            <ChevronLeftIcon className="size-4 mr-1" />
            返回列表
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-sm text-slate-500">咨询热线：{SITE_HOTLINE_TEXT}</span>
            <Button size="sm" asChild>
              <Link href={SITE_HOTLINE_TEL}>立即咨询</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 头部 Banner */}
      <div className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block rounded-full bg-primary/20 px-4 py-1 text-primary text-sm font-bold mb-6">{year} 届官方发布</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            {brochure.title.split("——")[0]}
            <span className="block text-2xl md:text-3xl font-normal text-slate-400 mt-4">{brochure.title.split("——")[1] || "33年西南高考教培领航者，用心成就每一份热爱"}</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5000+</div>
              <div className="text-slate-400 text-sm">年全日制学子信任</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">33年</div>
              <div className="text-slate-400 text-sm">高考教培积淀</div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">ISO9001</div>
              <div className="text-slate-400 text-sm">国际质量体系认证</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* 第一板块：教学教研 */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <BookOpenIcon className="size-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">第一大板块：教学教研体系</h2>
              </div>

              <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">1</span>
                      师资选拔 ｜ 顶级教研天团
                    </h3>
                    <p className="text-slate-600 leading-relaxed">名校领衔教研，历经六层严苛考核，老师录取率仅 1%。汇聚行业优秀师资，筑牢教学根基。</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">2</span>
                      教学方法 ｜ DSE高效学习法
                    </h3>
                    <p className="text-slate-600 leading-relaxed">拒绝死记硬背。阶梯式输入（听得懂）+ 靶向式输出（会做题）+ 限时化训练（做得快）。</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white text-xs">3</span>
                      教学导航 ｜ AI 大数据把控
                    </h3>
                    <p className="text-slate-600 leading-relaxed">33年经验数字化。全量数据采集，精准智能分析薄弱点，实时调整教学策略。</p>
                  </div>
                </div>
                <div className="bg-slate-100 rounded-2xl flex items-center justify-center min-h-[300px] text-slate-400 italic">教学教研场景配图（老师研讨/AI看板）</div>
              </div>
            </div>
          </section>

          {/* 第二板块：教学管理 */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <ShieldCheckIcon className="size-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">第二大板块：教学管理体系</h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { title: "一人一档", desc: "入学三维摸底，根治应试陋习，精准卡死提分点。" },
                  { title: "课堂管理", desc: "三步七段高效课堂，全天候五大过关闭环。" },
                  { title: "家校共育", desc: "特种兵家长群，每日四大军情推送，透明化管理。" },
                  { title: "情感陪伴", desc: "持证学管师陪伴，助力亲子关系破局，减压备考。" },
                ].map((item) => (
                  <div key={item.title} className="bg-slate-50 p-6 rounded-2xl hover:bg-primary/5 transition-colors group">
                    <h3 className="font-bold text-slate-900 mb-3 group-hover:text-primary">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-slate-100 rounded-2xl flex items-center justify-center h-48 text-slate-400 italic">教学管理透明化报告配图</div>
            </div>
          </section>

          {/* 环境篇 */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <UsersIcon className="size-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">环境篇 ｜ 四馆一体化支持生态圈</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["图书馆", "自习馆", "体能馆", "心能馆"].map((name) => (
                  <div key={name} className="flex flex-col gap-3">
                    <div className="aspect-square bg-slate-100 rounded-xl flex items-center justify-center text-slate-400 text-xs italic">{name}实景图</div>
                    <div className="text-center font-bold text-slate-700">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 承诺保障 */}
          <section className="bg-primary rounded-3xl shadow-2xl overflow-hidden p-8 md:p-16 text-center text-white">
            <GraduationCapIcon className="size-16 mx-auto mb-8 opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold mb-8">我们的底气与承诺</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-12 text-lg">三十三年护考路，守护一颗父母心！为了让您完全放心，我们提供全行业最具诚意的两大安全保障。</p>
            <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">试学保障</h3>
                <p className="text-sm text-primary-foreground/70">7天免费试学，入学7天内如有任何不满意，可申请全额退费。</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold mb-4">退费保障</h3>
                <p className="text-sm text-primary-foreground/70">学习期间因任何原因不满意，可按比例随时退还余下学费。</p>
              </div>
            </div>
          </section>

          {/* 底部行动 call to action */}
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">想了解更多备考细节？</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full px-10 h-14 text-lg" asChild>
                <Link href={SITE_HOTLINE_TEL}>
                  <PhoneIcon className="size-5 mr-2" />
                  立即电话咨询
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-lg bg-white">
                预约到校参观
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
