import { env } from "~/env";
import { getAllBrochures } from "~/lib/brochures";
import { TEACHERS } from "~/lib/constants/teachers";
import { getAllJiaZhangArticles } from "~/lib/jia-zhang-fu-wu";

export type SiteRoute = {
	changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
	description: string;
	path: string;
	priority: number;
	title: string;
};

const SITE_ORIGIN = `https://${env.NEXT_PUBLIC_SITE_DOMAIN}`;

const STATIC_SITE_ROUTES: SiteRoute[] = [
	{
		changeFrequency: "daily",
		description: "戴氏教育高考全日制与升学服务官网首页。",
		path: "/",
		priority: 1,
		title: "首页",
	},
	{
		changeFrequency: "weekly",
		description: "查看戴氏教育高考总部荣誉证书、资质认证与品牌背书内容。",
		path: "/rong-yu-zi-zhi",
		priority: 0.8,
		title: "荣誉资质",
	},
	{
		changeFrequency: "weekly",
		description: "查看戴氏教育历年高考全日制招生简章列表。",
		path: "/zhao-sheng-jian-zhang",
		priority: 0.9,
		title: "招生简章",
	},
	{
		changeFrequency: "weekly",
		description:
			"戴氏教育家长服务中心：学管服务流程、教学管理规范、家长指南、备考攻略与高考资讯集中呈现。",
		path: "/jia-zhang-fu-wu",
		priority: 0.8,
		title: "家长服务",
	},
	{
		changeFrequency: "weekly",
		description: "查看戴氏教育核心老师介绍、教学履历与教学成果。",
		path: "/lao-shi",
		priority: 0.8,
		title: "老师团队",
	},
];

export function getSiteOrigin() {
	return SITE_ORIGIN;
}

export function getSiteRoutes(): SiteRoute[] {
	const brochureRoutes: SiteRoute[] = getAllBrochures().map(
		(brochure, index) => ({
			changeFrequency: "monthly",
			description: `查看${brochure.year}届戴氏教育高考中心招生简章与备考安排。`,
			path: `/zhao-sheng-jian-zhang/${brochure.year}`,
			priority: index === 0 ? 0.9 : 0.7,
			title: brochure.title,
		}),
	);

	const teacherRoutes: SiteRoute[] = TEACHERS.map((teacher) => ({
		changeFrequency: "monthly",
		description: `查看${teacher.name}老师的教学履历、荣誉任职与教学成果。`,
		path: `/lao-shi/${teacher.slug}`,
		priority: 0.7,
		title: `${teacher.name}老师介绍`,
	}));

	const jiaZhangRoutes: SiteRoute[] = getAllJiaZhangArticles().map(
		(article) => ({
			changeFrequency: "monthly",
			description: article.summary,
			path: `/jia-zhang-fu-wu/${article.slug}`,
			priority: 0.7,
			title: article.title,
		}),
	);

	return [
		...STATIC_SITE_ROUTES,
		...brochureRoutes,
		...teacherRoutes,
		...jiaZhangRoutes,
	];
}
