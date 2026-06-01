import Image from "next/image";
import Link from "next/link";

export function GlobalHeader() {
  return (
    <header className="sticky top-0 z-50 border-slate-200/80 border-b bg-white/90 backdrop-blur">
      <div className="border-slate-200/80 border-b bg-slate-50/95">
        <div className="mx-auto flex min-h-10 w-full max-w-7xl flex-col justify-center gap-2 px-4 py-2 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link className="transition-colors hover:text-slate-950" href="/">
              戴氏教育
            </Link>
            <span className="text-slate-300">|</span>
            <Link className="transition-colors hover:text-slate-950" href="/">
              考试资讯
            </Link>
            <span className="text-slate-300">|</span>
            <Link className="transition-colors hover:text-slate-950" href="/">
              校区查询
            </Link>
          </nav>
          <div className="text-left text-xs text-slate-500 sm:text-sm lg:text-right">24 小时免费热线：xxxx，统一热线电话：xxxx</div>
        </div>
      </div>
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3 text-slate-950 transition-opacity hover:opacity-80" href="/">
          <Image alt="DAI SHI Logo" className="h-20 w-auto object-contain" height={160} priority src="/logo.png" width={95} />
        </Link>
      </div>
    </header>
  );
}
