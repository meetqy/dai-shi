import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
	getKnowledgeArticleFilterById,
	getKnowledgeArticleFilters,
} from "~/lib/knowledge-base";
import { KnowledgeBaseContent } from "../../KnowledgeBaseContent";

type PageProps = {
	params: Promise<{ filter: string }>;
};

export function generateStaticParams() {
	return getKnowledgeArticleFilters().map((filter) => ({
		filter: filter.id,
	}));
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { filter } = await params;
	const activeFilter = getKnowledgeArticleFilterById(filter);

	if (!activeFilter) {
		return {
			title: "资料库",
		};
	}

	return {
		description: activeFilter.description,
		title: `${activeFilter.title} - 资料库`,
	};
}

export default async function KnowledgeFilterPage({ params }: PageProps) {
	const { filter } = await params;

	if (!getKnowledgeArticleFilterById(filter)) {
		notFound();
	}

	return <KnowledgeBaseContent activeFilterId={filter} />;
}
