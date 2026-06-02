import Link from "next/link";

export function TopUtilityBar() {
	return (
		<div className="border-slate-200 border-b bg-slate-50 py-2">
			<div className="container mx-auto flex items-center justify-between px-4 text-slate-600 text-sm">
				<div className="flex gap-4">
					<Link className="transition-colors hover:text-blue-600" href="/news">
						考试资讯
					</Link>
					<Link
						className="transition-colors hover:text-blue-600"
						href="/campuses"
					>
						校区查询
					</Link>
					<Link className="transition-colors hover:text-blue-600" href="/faq">
						常见问题
					</Link>
				</div>
				<div>
					<span>24 小时热线：4444-028-222</span>
				</div>
			</div>
		</div>
	);
}
