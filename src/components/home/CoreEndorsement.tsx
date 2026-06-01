export function CoreEndorsement() {
  const stats = [
    { label: "办学经验", value: "30+" },
    { label: "全国校区", value: "200+" },
    { label: "专职教师", value: "1000+" },
    { label: "服务学生", value: "10万+" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
