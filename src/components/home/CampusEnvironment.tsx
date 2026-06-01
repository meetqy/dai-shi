export function CampusEnvironment() {
  return (
    <section id="campus-life" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">校区环境展示</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">教学区、宿舍区、自习区与生活配套统一规划，为学生提供舒适、专注的备考环境。</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
              校区环境图片占位 {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
