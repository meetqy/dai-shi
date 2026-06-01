export function ManagementSystem() {
  const points = [
    { title: "严格作息管理", desc: "帮助学生建立稳定、高效的备考节奏" },
    { title: "日常检测反馈", desc: "及时检查知识掌握情况并快速查漏补缺" },
    { title: "班主任陪伴督学", desc: "学习与生活双线跟进，提升执行效率" },
    { title: "阶段成长报告", desc: "定期向家长同步学习表现与成长变化" },
  ];

  return (
    <section id="management" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              教学管理体系
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p) => (
                <div key={p.title} className="p-6 bg-slate-50 rounded-xl">
                  <h3 className="font-bold text-blue-700 mb-2">{p.title}</h3>
                  <p className="text-sm text-slate-600">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 w-full h-[400px] bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400">
            教学管理配图占位
          </div>
        </div>
      </div>
    </section>
  );
}
