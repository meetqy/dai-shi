import { ChevronLeftIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { SITE_HOTLINE_TEL, SITE_HOTLINE_TEXT } from "~/lib/constants/site";

type BrochureTopNavProps = {
	backHref: string;
	backLabel: string;
	title: string;
};

export function BrochureTopNav({
	backHref,
	backLabel,
	title,
}: BrochureTopNavProps) {
	return (
		<div className="sticky top-0 z-70 border-slate-200/80 border-b bg-white/95 backdrop-blur">
			<div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
				<Link
					className="flex shrink-0 items-center font-medium text-slate-600 text-sm transition-colors hover:text-primary"
					href={backHref}
				>
					<ChevronLeftIcon className="mr-1 size-4" />
					{backLabel}
				</Link>
				<div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
					<div className="truncate font-medium text-slate-900 text-sm">
						{title}
					</div>
				</div>
				<Link
					className="flex shrink-0 items-center gap-2 font-semibold text-primary text-sm transition-opacity hover:opacity-80"
					href={SITE_HOTLINE_TEL}
				>
					<PhoneIcon className="size-4" />
					<span className="hidden sm:inline">{SITE_HOTLINE_TEXT}</span>
					<span className="sm:hidden">拨打电话</span>
				</Link>
			</div>
		</div>
	);
}
