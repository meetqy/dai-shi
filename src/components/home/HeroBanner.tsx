import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-slate-950">
      <div className="relative h-125 w-full">
        <Image alt="戴氏教育高考提分主视觉" className="object-cover object-center" fill priority sizes="100vw" src="/assets/高考提分解决方案-(4).png" />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-black/25 via-transparent to-black/35" />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/88 via-black/58 to-transparent">
        <div className="container mx-auto px-6 pt-28 pb-10 md:px-16 md:pt-36 md:pb-14">
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="mb-4 text-sm text-white/75 uppercase tracking-[0.3em] md:text-base">高考备考解决方案</p>
            <h1 className="mb-6 font-extrabold text-4xl leading-tight md:text-5xl lg:text-6xl" style={{ textShadow: "0 6px 30px rgba(0, 0, 0, 0.45)" }}>
              专注高考提分
              <br />
              成就理想未来
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-base text-slate-200 leading-8 md:text-lg" style={{ textShadow: "0 2px 18px rgba(0, 0, 0, 0.5)" }}>
              围绕学生目标、学科基础与学习状态，提供更系统的高考备考解决方案。
            </p>
            <div className="flex justify-center">
              <Link className="inline-flex rounded-full bg-primary px-10 py-4 font-semibold text-lg text-primary-foreground transition-colors hover:bg-primary/90" href="#gao-kao-quan-ri-zhi">
                了解课程项目
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
