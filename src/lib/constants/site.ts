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
export const SITE_HOTLINE_TEXT = "400-9875-211";
export const SITE_HOTLINE_TEL = "tel:4009875211";

export const UTILITY_LINKS: NavLink[] = [
	{ href: "/rong-yu-zi-zhi", label: "荣誉资质" },
	{ href: "/#xin-wen", label: "考试资讯" },
	{ href: "/#xiao-qu", label: "校区查询" },
	{ href: "/#jia-chang-wen-da", label: "家长问答" },
];

export const PRIMARY_LINKS: HeaderNavItem[] = [
	{ href: "/", label: "首页" },
	{ href: "/#gao-kao-quan-ri-zhi", label: "高考全日制" },
	{
		items: [
			{ href: "/#jiao-xue-jiao-yan", label: "教学教研" },
			{ href: "/lao-shi", label: "老师团队" },
			{ href: "/#jiao-xue-guan-li", label: "教学管理" },
		],
		label: "教学体系",
	},
	{
		items: [
			{ href: "/#xiao-qu", label: "校区环境" },
			{ href: "/zhao-sheng-jian-zhang", label: "招生简章" },
			{ href: "/#xiao-qu", label: "校区查询" },
			{ href: "/#jia-chang-wen-da", label: "家长问答" },
		],
		label: "校园招生",
	},
	{ href: "/rong-yu-zi-zhi", label: "荣誉资质" },
	{ href: "/#xin-wen", label: "考试资讯" },
	{ href: SITE_HOTLINE_TEL, label: "联系我们" },
];

export const MOBILE_PRIMARY_LINKS: NavLink[] = [
	{ href: "/", label: "首页" },
	{ href: "/#gao-kao-quan-ri-zhi", label: "高考全日制" },
	{ href: "/#jiao-xue-jiao-yan", label: "教学教研" },
	{ href: "/lao-shi", label: "老师团队" },
	{ href: "/#jiao-xue-guan-li", label: "教学管理" },
	{ href: "/#xiao-qu", label: "校区环境" },
	{ href: "/zhao-sheng-jian-zhang", label: "招生简章" },
	{ href: "/rong-yu-zi-zhi", label: "荣誉资质" },
	{ href: "/#xin-wen", label: "考试资讯" },
	{ href: SITE_HOTLINE_TEL, label: "联系我们" },
];
