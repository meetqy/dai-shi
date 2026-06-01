export function FullTimeProgram() {
  return (
    <section id="program" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              高考全日制项目介绍
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              面向希望集中备考的学生，提供更加系统的课程安排、作息管理、学习跟踪与阶段反馈，帮助学生在稳定节奏中提升成绩。
            </p>
            <ul className="space-y-4">
              {["沉浸式备考环境", "个性化学习跟踪", "学科教师全程指导", "心理状态支持服务"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700">
                  <div className="size-2 rounded-full bg-blue-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full h-[400px] bg-slate-200 rounded-2xl flex items-center justify-center text-slate-400">
            项目配图占位（600 x 400）
          </div>
        </div>
      </div>
    </section>
  );
}
