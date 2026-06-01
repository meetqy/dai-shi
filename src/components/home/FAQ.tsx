export function FAQ() {
  const faqs = [
    { q: "招生时间是怎么安排的？", a: "学校全年接受咨询，主要开班节点集中在暑期和寒假，具体以当期招生安排为准。" },
    { q: "是否提供住宿？", a: "提供学生宿舍与生活管理服务，宿舍配套完善，并有老师进行日常管理。" },
    { q: "班级人数大概多少？", a: "采用相对精细化的小班教学模式，便于老师及时关注每位学生的学习进度。" },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">常见问题</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="p-6 border border-slate-200 rounded-xl">
              <h3 className="font-bold text-lg text-slate-900 mb-3">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
