import { notFound } from "next/navigation";
import { BrochureTemplate2026 } from "~/components/brochures/BrochureTemplate2026";
import { BrochureTemplate2027 } from "~/components/brochures/BrochureTemplate2027";
import { BrochureTemplateGeneric } from "~/components/brochures/BrochureTemplateGeneric";
import { PageTopNav } from "~/components/PageTopNav";
import { getBrochureByYear } from "~/lib/brochures";

interface PageProps {
	params: Promise<{ year: string }>;
}

export async function generateMetadata({ params }: PageProps) {
	const { year } = await params;
	const brochure = getBrochureByYear(year);
	if (!brochure) return { title: "未找到页面" };
	return {
		title: `${brochure.title} - 戴氏教育`,
		description: brochure.content.slice(0, 150),
	};
}

export default async function BrochureDetailPage({ params }: PageProps) {
	const { year } = await params;
	const brochure = getBrochureByYear(year);

	if (!brochure) {
		notFound();
	}

	// 根据年份选择模版
	const renderTemplate = () => {
		switch (year) {
			case "2027":
				return <BrochureTemplate2027 brochure={brochure} />;
			case "2026":
				return <BrochureTemplate2026 brochure={brochure} />;
			default:
				return <BrochureTemplateGeneric brochure={brochure} />;
		}
	};

	return (
		<div className="min-h-screen">
			<PageTopNav
				backHref="/zhao-sheng-jian-zhang"
				backLabel="返回招生简章列表"
				title={brochure.title}
			/>
			{renderTemplate()}
		</div>
	);
}
