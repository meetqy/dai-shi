import Link from "next/link";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";
import { FAQ_DATA } from "~/lib/constants/faqs";

const HOME_FAQ_QUESTIONS = [
	"戴氏教育办学多少年了？",
	"戴氏教育主要覆盖哪些学龄段辅导？",
	"戴氏所有授课老师都持有教师资格证吗？",
	"高三全日制班级采用全封闭式管理模式吗？",
	"戴氏能够提供真实的往届学生提分案例吗？",
];

const HOME_FAQS = FAQ_DATA.flatMap((category) => category.items).filter(
	(item) => HOME_FAQ_QUESTIONS.includes(item.question),
);

export function FAQ() {
	return (
		<section className="bg-white py-20" id="jia-chang-wen-da">
			<div className="container mx-auto max-w-4xl px-4">
				<h2 className="mb-16 text-center font-bold text-3xl md:text-4xl">
					家长问答
				</h2>
				<Accordion collapsible type="single">
					{HOME_FAQS.map((faq) => (
						<AccordionItem key={faq.question} value={faq.question}>
							<AccordionTrigger className="py-5 text-base text-slate-900 hover:no-underline">
								<span className="pr-4 font-medium text-slate-900">
									{faq.question}
								</span>
							</AccordionTrigger>
							<AccordionContent>
								<p className="max-w-none pb-2 text-slate-600 leading-7">
									{faq.answer}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				<div className="mt-10 text-center">
					<Button asChild size="lg">
						<Link href="/chang-jian-wen-ti">查看全部家长问答</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
