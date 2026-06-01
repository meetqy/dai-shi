import Link from "next/link";

export function ExamNews() {
  const news = [
    { date: "2026-05-20", title: "2026 年高考政策新变化，家长和学生需要重点关注什么？", category: "政策" },
    { date: "2026-05-15", title: "高考冲刺阶段如何高效复习？这 5 个方法值得参考", category: "备考" },
    { date: "2026-05-10", title: "重点院校最新招生信息发布，志愿规划要提前准备", category: "招生" },
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">考试资讯</h2>
            <p className="text-slate-600">及时掌握高考政策、备考动态与升学信息。</p>
          </div>
          <Link href="/news" className="text-blue-600 font-semibold hover:underline">查看更多</Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.title} className="group cursor-pointer">
              <div className="aspect-[16/9] bg-slate-200 rounded-xl mb-4 overflow-hidden flex items-center justify-center text-slate-400">
                资讯配图占位
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{item.category}</span>
                <span className="text-xs text-slate-400">{item.date}</span>
              </div>
              <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
