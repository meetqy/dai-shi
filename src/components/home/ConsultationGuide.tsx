import { Button } from "~/components/ui/button";

export function ConsultationGuide() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">现在就开启升学规划</h2>
            <p className="text-slate-600">预约专业老师一对一咨询，获取更适合孩子当前阶段的备考建议。</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="text-center md:text-right">
              <div className="text-sm text-slate-500 mb-1">电话咨询</div>
              <div className="text-2xl font-bold text-blue-700">4444-028-222</div>
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg rounded-full">
              预约到访
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
