import Link from "next/link";

export function AdmissionsEntry() {
  return (
    <section id="brochure" className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">2026 招生简章入口</h2>
        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          查看最新招生简章，快速了解课程设置、收费说明、报名流程与入学安排。
        </p>
        <Link 
          href="/brochure" 
          className="inline-block bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors"
        >
          查看招生简章
        </Link>
      </div>
    </section>
  );
}
