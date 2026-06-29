import type { Metadata } from "next";
import { SITE_FULL_NAME } from "~/lib/constants/site";
import { KnowledgeBaseContent } from "./KnowledgeBaseContent";

export const metadata: Metadata = {
	title: "资料库",
	description: `${SITE_FULL_NAME}资料库，集中展示课程、校区、收费、考试时间与升学服务相关信息，方便家长按主题查询参考。`,
};

export default function KnowledgeBasePage() {
	return <KnowledgeBaseContent />;
}
