import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer } from "~/components/home/Footer";
import { PageTopNav } from "~/components/PageTopNav";
import { PhoneButton } from "~/components/phone-action";
import { SITE_HOTLINE_TEXT } from "~/lib/constants/site";
import { getTeacherBySlug, TEACHERS } from "~/lib/constants/teachers";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return TEACHERS.map((teacher) => ({
    slug: teacher.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);

  if (!teacher) {
    return {
      title: "未找到老师",
    };
  }

  return {
    title: `${teacher.name}老师介绍 - 戴氏教育`,
    description: teacher.summary,
  };
}

function TeacherSection({ items, title }: { items: string[]; title: string }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-2xl bg-slate-50 p-6 md:p-8">
      <p className="font-semibold text-primary text-sm">{title}</p>
      <ul className="mt-5 space-y-4 text-slate-700 leading-8">
        {items.map((item) => (
          <li className="flex gap-3" key={item}>
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function TeacherDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const teacher = getTeacherBySlug(slug);

  if (!teacher) {
    notFound();
  }

  const profileFacts = [teacher.education ? { label: "毕业院校", value: teacher.education } : null, teacher.experience ? { label: "教学经历", value: teacher.experience } : null].filter(
    (item): item is { label: string; value: string } => Boolean(item),
  );

  return (
    <div className="min-h-screen bg-slate-50">
      <PageTopNav backHref="/lao-shi" backLabel="返回老师团队" title={teacher.name} />
      <main className="pb-16">
        <section className="bg-white">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <div className="overflow-hidden rounded-[2rem] bg-slate-50">
              <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-12 lg:p-10">
                <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-slate-100">
                  <Image alt={`${teacher.name}老师`} className="object-cover object-top" fill priority sizes="(max-width: 1024px) 100vw, 360px" src={teacher.image} />
                </div>

                <div className="flex flex-col justify-center">
                  <p className="font-semibold text-primary text-sm">老师详情</p>
                  <h1 className="mt-3 font-bold text-4xl text-slate-950 leading-tight md:text-5xl">{teacher.name}</h1>
                  <p className="mt-3 font-medium text-primary text-xl">{teacher.title}</p>
                  <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-8">{teacher.summary}</p>

                  {profileFacts.length > 0 ? (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {profileFacts.map((fact) => (
                        <div className="rounded-full bg-white px-4 py-2 text-slate-700 text-sm" key={fact.label}>
                          <span className="text-slate-500">{fact.label}：</span>
                          <span className="font-medium text-slate-900">{fact.value}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-8">
                    <PhoneButton className="h-12 rounded-xl px-6 font-semibold">电话咨询老师安排：{SITE_HOTLINE_TEXT}</PhoneButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container mx-auto px-4 pb-16">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                <section>
                  <p className="font-semibold text-primary text-sm">老师简介</p>
                  <h2 className="mt-3 font-bold text-3xl text-slate-950">围绕高考提分目标展开教学与陪伴</h2>
                  <div className="mt-6 space-y-4 text-slate-700 leading-8">
                    {teacher.introduction.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </section>

                <div className="space-y-6">
                  <TeacherSection items={teacher.honors} title="荣誉与任职" />
                  <TeacherSection items={teacher.achievements} title="教学成果与经验" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
