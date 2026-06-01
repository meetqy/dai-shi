import Link from "next/link";

export function TopUtilityBar() {
  return (
    <div className="bg-slate-50 border-b border-slate-200 py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm text-slate-600">
        <div className="flex gap-4">
          <Link href="/news" className="hover:text-blue-600 transition-colors">Exam News</Link>
          <Link href="/campuses" className="hover:text-blue-600 transition-colors">Campus Search</Link>
          <Link href="/faq" className="hover:text-blue-600 transition-colors">FAQ</Link>
        </div>
        <div>
          <span>24h Hotline: 4444-028-222</span>
        </div>
      </div>
    </div>
  );
}
