import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PhoneButton, PhoneLink } from "~/components/phone-action";
import { Button } from "~/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import {
	MOBILE_PRIMARY_LINKS,
	PRIMARY_LINKS,
	SITE_BRAND_NAME,
	SITE_HOTLINE_TEXT,
	UTILITY_LINKS,
} from "~/lib/constants/site";

export function GlobalHeader() {
	return (
		<header className="sticky top-0 z-80 border-slate-200/80 border-b bg-white/90 backdrop-blur">
			<div className="border-slate-200/80 border-b bg-slate-50/95">
				<div className="mx-auto flex min-h-10 w-full max-w-7xl flex-col justify-center gap-2 px-4 py-2 text-slate-600 text-sm sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
					<nav
						aria-label="辅助导航"
						className="flex flex-wrap items-center gap-x-3 gap-y-1"
					>
						<Link
							className="font-medium text-slate-800 transition-colors hover:text-slate-950"
							href="/"
						>
							{SITE_BRAND_NAME}
						</Link>
						{UTILITY_LINKS.map((link) => (
							<Link
								className="transition-colors hover:text-slate-950"
								href={link.href}
								key={link.label}
							>
								{link.label}
							</Link>
						))}
					</nav>
					<PhoneLink className="text-left text-slate-500 text-xs transition-colors hover:text-slate-950 sm:text-sm lg:text-right">
						24 小时免费热线：{SITE_HOTLINE_TEXT}
					</PhoneLink>
				</div>
			</div>
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex min-h-20 items-center justify-between gap-4 py-3">
					<Link
						className="flex items-center gap-3 text-slate-950 transition-opacity hover:opacity-80"
						href="/"
					>
						<Image
							alt="戴氏教育标志"
							className="h-20 w-auto object-contain"
							height={80}
							priority
							src="/logo.png"
							width={190}
						/>
					</Link>

					<nav
						aria-label="主导航"
						className="hidden items-center gap-1 lg:flex"
					>
						{PRIMARY_LINKS.map((link) =>
							"items" in link ? (
								<DropdownMenu key={link.label}>
									<DropdownMenuTrigger asChild>
										<Button
											className="rounded-full px-4 py-2 font-medium text-slate-700 text-sm hover:bg-slate-100 hover:text-slate-950"
											variant="ghost"
										>
											{link.label}
											<ChevronDownIcon className="size-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="center" className="w-56">
										{link.items.map((item) => (
											<DropdownMenuItem asChild key={item.label}>
												<Link href={item.href}>{item.label}</Link>
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							) : (
								<Link
									className="rounded-full px-4 py-2 font-medium text-slate-700 text-sm transition-colors hover:bg-slate-100 hover:text-slate-950"
									href={link.href}
									key={link.label}
								>
									{link.label}
								</Link>
							),
						)}
					</nav>

					<div className="hidden items-center sm:flex">
						<PhoneButton className="bg-primary hover:bg-primary/90" size="lg">
							立即咨询
						</PhoneButton>
					</div>
				</div>

				<nav
					aria-label="移动端主导航"
					className="flex gap-2 overflow-x-auto pb-3 lg:hidden"
				>
					{MOBILE_PRIMARY_LINKS.map((link) => (
						<Link
							className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 font-medium text-slate-700 text-sm transition-colors hover:border-slate-300 hover:text-slate-950"
							href={link.href}
							key={link.label}
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
}
