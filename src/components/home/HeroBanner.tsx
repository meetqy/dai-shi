import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-125 w-full">
        <Image alt="戴氏教育高考提分主视觉" className="object-cover" fill priority sizes="100vw" src="/assets/高考提分解决方案-(4).jpg" />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 p-4 text-center text-white">
        <h1 className="mb-4 font-bold text-4xl md:text-6xl">专注高考提分 成就理想未来</h1>
        <p className="max-w-2xl text-xl md:text-2xl">围绕学生目标、学科基础与学习状态，提供更系统的高考备考解决方案。</p>
        <Link className="mt-8 rounded-full bg-primary px-8 py-3 font-semibold text-lg text-primary-foreground transition-all hover:bg-primary/90" href="#gao-kao-quan-ri-zhi">
          了解课程项目
        </Link>
      </div>
    </section>
  );
}
