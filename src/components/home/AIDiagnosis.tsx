export function AIDiagnosis() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-white">
          <div className="flex-1">
            <div className="inline-block px-4 py-1 bg-blue-500 rounded-full text-sm font-bold mb-6">AI 智能分析</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">AI 学情诊断与提分方案</h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              通过人工智能识别学生知识薄弱点，结合阶段成绩、学习习惯与目标院校需求，生成更有针对性的提分建议与学习路径。
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">精准诊断</div>
                <div className="text-sm text-slate-400">定位薄弱环节</div>
              </div>
              <div className="bg-white/10 px-6 py-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-400">个性方案</div>
                <div className="text-sm text-slate-400">匹配提分路径</div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full aspect-square md:aspect-auto md:h-[400px] bg-slate-800 rounded-2xl flex items-center justify-center text-slate-500 border border-white/10">
            AI 学情诊断界面占位
          </div>
        </div>
      </div>
    </section>
  );
}
