import Link from "next/link";
import type { ReactNode } from "react";

export interface SimpleCardProps {
	href: string;
	title: string;
	description?: ReactNode;
	meta?: ReactNode;
}

export function SimpleCard({
	href,
	title,
	description,
	meta,
}: SimpleCardProps) {
	return (
		<Link
			className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-primary/40 hover:shadow-sm"
			href={href}
		>
			<div>
				<h3 className="wrap-break-word mb-2 font-bold text-lg text-slate-900 transition-colors group-hover:text-primary">
					{title}
				</h3>
				{description && (
					<div className="wrap-break-word mb-4 line-clamp-2 text-slate-600 text-sm leading-relaxed">
						{description}
					</div>
				)}
			</div>
			{meta && <div className="text-slate-400 text-xs">{meta}</div>}
		</Link>
	);
}
