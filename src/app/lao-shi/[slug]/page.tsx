import { MedalIcon, SchoolIcon, SparklesIcon } from "lucide-react";
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

function InfoBlock({ icon: Icon, title, items }: { icon: typeof MedalIcon; title: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="size-5" />
        </div>
        <h2 className="font-bold text-2xl text-slate-950">{title}</h2>
      </div>
      <ul className="mt-6 space-y-3 text-slate-700 leading-8">
        {items.map((item) => (
          <li key={item}>{item}</li>
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

  return (
    <div className="min-h-screen bg-slate-50">
      <PageTopNav backHref="/lao-shi" backLabel="返回老师团队" title={teacher.name} />
      <main className="pb-16">
        <section className="bg-white">
          <div className="container mx-auto grid gap-8 px-4 py-10 md:grid-cols-[320px_minmax(0,1fr)] md:py-14">
            <div className="relative h-105 overflow-hidden rounded-3xl bg-slate-100">
              <Image alt={`${teacher.name}老师`} className="object-cover object-top" fill priority sizes="(max-width: 768px) 100vw, 320px" src={teacher.image} />
            </div>
            <div>
              <p className="font-semibold text-primary text-sm">老师详情</p>
              <h1 className="mt-3 font-bold text-4xl text-slate-950 md:text-5xl">{teacher.name}</h1>
              <p className="mt-3 font-medium text-primary text-xl">{teacher.title}</p>
              <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-8">{teacher.summary}</p>
              <div className="mt-8 grid gap-3 md:grid-cols-2">
                {teacher.education ? <div className="rounded-2xl bg-slate-50 px-4 py-4 text-slate-700">毕业院校：{teacher.education}</div> : null}
                {teacher.experience ? <div className="rounded-2xl bg-slate-50 px-4 py-4 text-slate-700">{teacher.experience}</div> : null}
              </div>
              <div className="mt-8">
                <PhoneButton className="h-12 rounded-xl px-6 font-semibold">电话咨询老师安排：{SITE_HOTLINE_TEXT}</PhoneButton>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pt-6 md:pt-8">
          <div className="grid gap-6">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <SparklesIcon className="size-5" />
                </div>
                <h2 className="font-bold text-2xl text-slate-950">老师简介</h2>
              </div>
              <div className="mt-6 space-y-4 text-slate-700 leading-8">
                {teacher.introduction.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>

            <InfoBlock icon={MedalIcon} items={teacher.honors} title="荣誉与任职" />
            <InfoBlock icon={SchoolIcon} items={teacher.achievements} title="教学成果与经验" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
