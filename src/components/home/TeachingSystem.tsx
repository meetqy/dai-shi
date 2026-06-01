export function TeachingSystem() {
  const features = [
    { title: "标准化课程体系", desc: "围绕高考目标建立更清晰的教学进度与内容安排" },
    { title: "专属教研资料", desc: "提供阶段讲义、训练题组与针对性复习资料" },
    { title: "分层教学方案", desc: "根据学生基础差异匹配更合适的教学方法" },
  ];

  return (
    <section id="teaching" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
          教学教研体系
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="p-8 border border-slate-100 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-lg" />
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
