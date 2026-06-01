export function FacultyTeam() {
  return (
    <section id="faculty" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">师资团队</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">严选学科骨干教师与教学带头人，形成经验丰富、分工明确、长期稳定的教学团队。</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <div className="h-64 bg-slate-200 flex items-center justify-center text-slate-400">
                教师照片占位 {i}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">骨干教师 {i}</h3>
                <p className="text-blue-600 text-sm mb-3">10 年以上教学经验</p>
                <p className="text-slate-500 text-sm italic">关注学生基础、方法与状态，让每一次进步都更有方向。</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
