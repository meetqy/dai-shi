export function HomeSchoolService() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">家校共育服务</h2>
        <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
          建立学校、家长与学生之间的高效沟通机制，让学习反馈、生活管理与心理状态支持更加及时、透明、有效。
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {["考勤动态同步", "周度学习反馈", "家长沟通指导"].map((item) => (
            <div key={item} className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-lg font-semibold">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
