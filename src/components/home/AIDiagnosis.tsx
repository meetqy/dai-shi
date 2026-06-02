import { BrainCircuitIcon, TargetIcon, ZapIcon, BarChart3Icon } from "lucide-react";

export function AIDiagnosis() {
  const features = [
    {
      icon: <TargetIcon className="size-5" />,
      title: "精准定位薄弱环节",
      desc: "毫秒级扫描知识图谱，锁定 1% 的关键失分点",
    },
    {
      icon: <ZapIcon className="size-5" />,
      title: "动态调整学习路径",
      desc: "根据每日练习反馈，自动优化次日复习重点",
    },
    {
      icon: <BarChart3Icon className="size-5" />,
      title: "可视化成长画像",
      desc: "多维数据分析，让每一分进步都清晰可见",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 md:p-16 lg:p-20">
          {/* 背景装饰 */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="relative z-10 grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 text-primary">
                  <BrainCircuitIcon className="size-5" />
                </div>
                <span className="font-bold tracking-wider text-primary text-sm uppercase">AI Intelligence</span>
              </div>

              <h2 className="mb-8 font-bold text-4xl text-white md:text-5xl lg:text-6xl leading-[1.1]">
                AI 学情诊断
                <br />
                <span className="text-primary">精准提分</span>方案
              </h2>

              <p className="mb-12 max-w-xl text-lg text-slate-400 leading-relaxed">戴氏教育独家 AI 算法，将 33 年教学经验数字化。不再盲目刷题，通过大数据分析，为每位学生定制最高效的提分路径。</p>

              <div className="grid gap-6">
                {features.map((f) => (
                  <div key={f.title} className="flex gap-4 group">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="mb-1 font-bold text-white text-lg">{f.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* 模拟 AI 诊断界面 */}
              <div className="relative aspect-[4/3] w-full rounded-2xl border border-white/10 bg-slate-900/50 p-4 backdrop-blur-sm md:p-8">
                <div className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between border-white/5 border-b pb-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/50" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                      <div className="h-3 w-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="h-2 w-32 rounded-full bg-white/5" />
                  </div>

                  <div className="grid flex-1 grid-cols-2 gap-4">
                    <div className="rounded-xl bg-white/5 p-4 flex flex-col justify-between">
                      <div className="text-xs text-slate-500">知识点掌握度</div>
                      <div className="text-3xl font-bold text-primary">82%</div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full w-[82%] bg-primary" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-white/5 p-4 flex flex-col justify-between">
                      <div className="text-xs text-slate-500">预计提升空间</div>
                      <div className="text-3xl font-bold text-green-400">+45</div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((j) => (
                          <div key={j} className={`h-4 flex-1 rounded-sm ${j <= 4 ? "bg-green-400/50" : "bg-white/5"}`} />
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2 rounded-xl bg-white/5 p-4">
                      <div className="mb-4 text-xs text-slate-500">薄弱环节实时监测</div>
                      <div className="space-y-3">
                        {[
                          { label: "圆锥曲线综合应用", val: 65 },
                          { label: "导数与不等式证明", val: 42 },
                          { label: "立体几何辅助线构建", val: 78 },
                        ].map((item) => (
                          <div key={item.label} className="flex items-center gap-4">
                            <div className="w-24 text-[10px] text-slate-400 truncate">{item.label}</div>
                            <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                              <div className="h-full bg-primary/60" style={{ width: `${item.val}%` }} />
                            </div>
                            <div className="text-[10px] text-primary">{item.val}%</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 漂浮的小装饰 */}
                <div className="absolute -right-4 top-1/4 rounded-lg bg-primary p-3 shadow-xl animate-bounce duration-[3000ms]">
                  <BrainCircuitIcon className="size-6 text-primary-foreground" />
                </div>
                <div className="absolute -left-6 bottom-1/4 rounded-lg bg-slate-800 border border-white/10 p-3 shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-[10px] text-slate-300">AI 正在分析中...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
