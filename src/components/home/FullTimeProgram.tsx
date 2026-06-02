export function FullTimeProgram() {
  return (
    <section className="bg-slate-50 py-20" id="program">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-6 font-bold text-3xl text-slate-900 md:text-4xl">高考全日制项目介绍</h2>
            <p className="mb-8 text-lg text-slate-600 leading-relaxed">面向希望集中备考的学生，提供更加系统的课程安排、作息管理、学习跟踪与阶段反馈，帮助学生在稳定节奏中提升成绩。</p>
            <ul className="space-y-4">
              {["沉浸式备考环境", "个性化学习跟踪", "学科教师全程指导", "心理状态支持服务"].map((item) => (
                <li className="flex items-center gap-3 text-slate-700" key={item}>
                  <div className="size-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex h-100 w-full flex-1 items-center justify-center rounded-2xl bg-slate-200 text-slate-400">项目配图占位（600 x 400）</div>
        </div>
      </div>
    </section>
  );
}
