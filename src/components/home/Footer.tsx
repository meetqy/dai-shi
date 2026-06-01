import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">戴氏教育</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              专注个性化教学与高考备考服务，围绕教学、管理、陪伴与规划，为学生提供更系统的成长支持。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-slate-500">核心项目</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#program" className="hover:text-white transition-colors">高考全日制</Link></li>
              <li><Link href="#teaching" className="hover:text-white transition-colors">教学教研</Link></li>
              <li><Link href="#faculty" className="hover:text-white transition-colors">师资团队</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-slate-500">帮助中心</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/faq" className="hover:text-white transition-colors">常见问题</Link></li>
              <li><Link href="/campuses" className="hover:text-white transition-colors">校区查询</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">考试资讯</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-slate-500">联系我们</h4>
            <ul className="space-y-4 text-slate-400">
              <li>咨询热线：4444-028-222</li>
              <li>联系邮箱：info@daishi.cn</li>
              <li>联系地址：四川省成都市</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© 2026 戴氏教育 版权所有</p>
        </div>
      </div>
    </footer>
  );
}
