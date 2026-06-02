import Link from "next/link";
import { Button } from "~/components/ui/button";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 border-slate-200 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link className="font-bold text-2xl text-primary" href="/">
          戴氏教育
        </Link>

        <nav className="hidden items-center gap-8 font-medium md:flex">
          <Link className="text-slate-900 transition-colors hover:text-primary" href="/">
            首页
          </Link>
          <Link className="text-slate-600 transition-colors hover:text-primary" href="#program">
            高考全日制
          </Link>
          <Link className="text-slate-600 transition-colors hover:text-primary" href="#teaching">
            教学体系
          </Link>
          <Link className="text-slate-600 transition-colors hover:text-primary" href="#faculty">
            师资团队
          </Link>
          <Link className="text-slate-600 transition-colors hover:text-primary" href="#campus-life">
            校区环境
          </Link>
        </nav>

        <Button className="px-6">立即咨询</Button>
      </div>
    </header>
  );
}
