import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "~/components/home/Footer";
import { PageTopNav } from "~/components/PageTopNav";
import { PhoneButton } from "~/components/phone-action";
import { SITE_HOTLINE_TEXT } from "~/lib/constants/site";
import { TEACHERS } from "~/lib/constants/teachers";

export const metadata: Metadata = {
  title: "老师团队 - 戴氏教育",
  description: "查看戴氏教育高考团队核心老师介绍，了解老师履历、教学成果与教研方向。",
};

export default function TeachersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageTopNav backHref="/" backLabel="返回首页" title="老师团队" />
      <main className="pb-16">
        <section className="bg-white">
          <div className="container mx-auto px-4 py-10 md:py-14">
            <p className="font-semibold text-primary text-sm">老师团队</p>
            <h1 className="mt-3 max-w-4xl font-bold text-4xl text-slate-950 leading-tight md:text-5xl">核心老师介绍与教学履历</h1>
            <p className="mt-5 max-w-4xl text-lg text-slate-600 leading-8">这里集中展示戴氏教育核心老师的教学背景、教研方向与代表性成果，方便家长和学生更直观了解师资实力。</p>
            <div className="mt-8">
              <PhoneButton className="h-12 rounded-xl px-6 font-semibold">电话咨询老师安排：{SITE_HOTLINE_TEXT}</PhoneButton>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pt-6 md:pt-8">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {TEACHERS.map((teacher) => (
              <Link className="overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-1 hover:shadow-md" href={`/lao-shi/${teacher.slug}`} key={teacher.slug}>
                <div className="relative aspect-4/5 bg-slate-100">
                  <Image alt={`${teacher.name}老师`} className="object-cover object-top" fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" src={teacher.image} />
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-2xl text-slate-950">{teacher.name}</h2>
                  <p className="mt-2 font-medium text-primary">{teacher.title}</p>
                  <p className="mt-4 line-clamp-3 text-slate-600 leading-7">{teacher.summary}</p>
                  <div className="mt-5 space-y-2 text-slate-500 text-sm">
                    {teacher.education ? <p>毕业院校：{teacher.education}</p> : null}
                    {teacher.experience ? <p>{teacher.experience}</p> : null}
                  </div>
                  <p className="mt-5 font-semibold text-primary text-sm">查看详情</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
