export function StudentParentFeedback() {
  const testimonials = [
    { name: "张同学", role: "高考生", text: "老师讲解很细致，阶段规划也很明确，几个月下来成绩提升非常明显。" },
    { name: "李家长", role: "学生家长", text: "学校管理规范，老师沟通及时，孩子在学习状态和自信心上都有很大变化。" },
    { name: "王同学", role: "复读生", text: "AI 学情诊断帮我快速找到了短板，复习方向更清晰，学习效率也更高。" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">学生成果与家长口碑</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 relative">
              <div className="text-blue-600 text-4xl font-serif absolute top-4 left-4 opacity-20">"</div>
              <p className="text-slate-700 mb-6 relative z-10">{t.text}</p>
              <div>
                <div className="font-bold text-slate-900">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
