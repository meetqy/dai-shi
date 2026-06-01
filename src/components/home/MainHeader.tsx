import Link from "next/link";
import { Button } from "~/components/ui/button";

export function MainHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-700">
          戴氏教育
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="text-slate-900 hover:text-blue-600 transition-colors">首页</Link>
          <Link href="#program" className="text-slate-600 hover:text-blue-600 transition-colors">高考全日制</Link>
          <Link href="#teaching" className="text-slate-600 hover:text-blue-600 transition-colors">教学体系</Link>
          <Link href="#faculty" className="text-slate-600 hover:text-blue-600 transition-colors">师资团队</Link>
          <Link href="#campus-life" className="text-slate-600 hover:text-blue-600 transition-colors">校区环境</Link>
        </nav>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
          立即咨询
        </Button>
      </div>
    </header>
  );
}
