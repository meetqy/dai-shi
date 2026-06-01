export type NavLink = {
	href: string;
	label: string;
};

export type DropdownNavLink = {
	items: NavLink[];
	label: string;
};

export type HeaderNavItem = NavLink | DropdownNavLink;

export const SITE_BRAND_NAME = "戴氏教育";
export const SITE_HOTLINE_TEXT = "4444-028-222";
export const SITE_HOTLINE_TEL = "tel:4444028222";

export const UTILITY_LINKS: NavLink[] = [
	{ href: "/#news", label: "考试资讯" },
	{ href: "/#campuses", label: "校区查询" },
	{ href: "/#faq", label: "家长问答" },
];

export const PRIMARY_LINKS: HeaderNavItem[] = [
	{ href: "/", label: "首页" },
	{ href: "/#program", label: "高考全日制" },
	{
		items: [
			{ href: "/#teaching", label: "教学教研" },
			{ href: "/#faculty", label: "师资团队" },
			{ href: "/#management", label: "教学管理" },
		],
		label: "教学体系",
	},
	{
		items: [
			{ href: "/#campus-life", label: "校区环境" },
			{ href: "/#brochure", label: "招生简章" },
			{ href: "/#campuses", label: "校区查询" },
			{ href: "/#faq", label: "家长问答" },
		],
		label: "校园招生",
	},
	{ href: "/#news", label: "考试资讯" },
	{ href: SITE_HOTLINE_TEL, label: "联系我们" },
];

export const MOBILE_PRIMARY_LINKS: NavLink[] = [
	{ href: "/", label: "首页" },
	{ href: "/#program", label: "高考全日制" },
	{ href: "/#teaching", label: "教学教研" },
	{ href: "/#faculty", label: "师资团队" },
	{ href: "/#management", label: "教学管理" },
	{ href: "/#campus-life", label: "校区环境" },
	{ href: "/#brochure", label: "招生简章" },
	{ href: "/#news", label: "考试资讯" },
	{ href: SITE_HOTLINE_TEL, label: "联系我们" },
];
