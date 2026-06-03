import type { LucideIcon } from "lucide-react";
import {
	Building2Icon,
	CoinsIcon,
	GraduationCapIcon,
	HomeIcon,
	MapPinIcon,
	ShieldCheckIcon,
	SparklesIcon,
	TargetIcon,
	TrophyIcon,
	UsersIcon,
} from "lucide-react";
import type { Metadata } from "next";
import { PhoneButton } from "~/components/phone-action";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";
import { FAQ_DATA } from "~/lib/constants/faqs";
import { SITE_HOTLINE_TEXT } from "~/lib/constants/site";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
	title: "成都戴氏教育常见问题 FAQ - 高考全日制/中高考补习/艺考文化课",
	description:
		"为您解答成都戴氏教育办学资质、收费标准、全封闭管理、高考全日制复读、艺考文化课冲刺及校区选择等常见疑问。深耕成都33年，助力孩子高效提分。",
};

const FAQ_PAGE_CTAS = {
	"一、品牌资质类": {
		buttonText: "预约实地考察",
		description:
			"33 年办学沉淀，欢迎您预约到访校区，实地查看办学资质与教学环境。",
		icon: Building2Icon,
		title: "想实地考察办学实力？",
	},
	"二、收费课时类": {
		buttonText: "咨询费用详情",
		description:
			"根据孩子的具体情况（年级、科目、基础），我们可以为您提供更精准的费用预算和班型建议。",
		icon: CoinsIcon,
		title: "想快速了解收费和课程怎么选？",
	},
	"三、师资相关类": {
		buttonText: "了解师资安排",
		description:
			"您可以电话说明孩子目前的薄弱点，我们为您匹配最擅长该领域的资深老师。",
		icon: UsersIcon,
		title: "想了解具体的授课老师？",
	},
	"四、班型课程体系类": {
		buttonText: "预约入学测评",
		description:
			"我们将通过专业的入学测评，为孩子量身定制最合适的学习方案和班型配置。",
		icon: GraduationCapIcon,
		title: "不确定孩子适合哪种班型？",
	},
	"五、教学提分效果类": {
		buttonText: "获取案例分享",
		description:
			"我们可以根据孩子目前的成绩情况，为您分享类似的成功提分案例和学习路径。",
		icon: TrophyIcon,
		title: "想看更多真实的提分案例？",
	},
	"六、管理食宿家校服务类": {
		buttonText: "咨询生活管理",
		description: "全封闭式管理、食宿标准、作息安排等，直接沟通能了解得更细致。",
		icon: HomeIcon,
		title: "关心孩子的在校生活细节？",
	},
	"七、校区环境选择类": {
		buttonText: "获取校区指引",
		description:
			"成都四大直营旗舰校区，地理位置与硬件设施各有特色，帮您选择最方便的一个。",
		icon: MapPinIcon,
		title: "正在比较校区和学习环境？",
	},
	"八、不同人群适配问题": {
		buttonText: "咨询适配方案",
		description:
			"无论是艺考生、偏科生还是高分冲刺生，我们都有成熟的教学案例可供参考。",
		icon: TargetIcon,
		title: "想确认孩子是否适合这里的教学？",
	},
	"九、顾虑负面问题": {
		buttonText: "电话确认细节",
		description:
			"对于退费、管理、教学效果这类顾虑，建议结合孩子当前阶段直接沟通，信息会更完整也更准确。",
		icon: ShieldCheckIcon,
		title: "有些问题更适合结合具体情况来判断",
	},
	"十、升学增值服务类": {
		buttonText: "预约规划咨询",
		description:
			"除了课外辅导，我们还提供志愿填报指导、考前押题等全方位升学支持。",
		icon: SparklesIcon,
		title: "需要专业的升学规划建议？",
	},
} as const;

function InlineFaqCta({
	buttonText,
	description,
	title,
	icon: Icon,
}: {
	buttonText: string;
	description: string;
	title: string;
	icon: LucideIcon;
}) {
	return (
		<div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-1 shadow-sm transition-all hover:shadow-md">
			<div className="flex flex-col gap-6 rounded-[calc(1.5rem-1px)] bg-slate-50/50 p-6 md:flex-row md:items-center md:justify-between md:p-8">
				<div className="flex items-start gap-5">
					<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
						<Icon className="size-6" />
					</div>
					<div className="max-w-xl">
						<h3 className="font-bold text-slate-900 text-xl leading-tight">
							{title}
						</h3>
						<p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
					</div>
				</div>
				<div className="flex shrink-0 items-center">
					<PhoneButton className="h-12 w-full rounded-xl px-8 font-semibold md:w-auto">
						{buttonText}
					</PhoneButton>
				</div>
			</div>
		</div>
	);
}

export default function FaqPage() {
	const visibleSections = FAQ_DATA.map((category) => ({
		items: category.items.filter((item) => !item.answer.includes("（待补充）")),
		title: category.title,
	})).filter((category) => category.items.length > 0);

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: visibleSections.flatMap((category) =>
			category.items.map((item) => ({
				"@type": "Question",
				name: item.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: item.answer,
				},
			})),
		),
	};

	return (
		<div className="min-h-screen bg-slate-50 py-12">
			<script
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				type="application/ld+json"
			/>
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h1 className="mb-4 font-bold text-4xl text-slate-900 md:text-5xl">
						常见问题 FAQ
					</h1>
					<p className="mx-auto max-w-2xl text-lg text-slate-600">
						关于成都戴氏教育的各类疑问解答，涵盖收费标准、全封闭管理、校区地址及提分效果。如有其他问题欢迎随时咨询我们。
					</p>
				</div>

				<div className="space-y-12">
					{visibleSections.map((category) => {
						const cta =
							FAQ_PAGE_CTAS[category.title as keyof typeof FAQ_PAGE_CTAS];
						return (
							<div className="space-y-6" key={category.title}>
								<section className="space-y-4">
									<h2 className="border-red-500 border-l-4 pl-4 font-semibold text-slate-800 text-xl">
										{category.title}
									</h2>
									<Accordion collapsible type="single">
										{category.items.map((item) => (
											<AccordionItem
												className={cn(item.isNegative && "bg-red-50/40")}
												key={`${category.title}-${item.question}`}
												value={`${category.title}-${item.question}`}
											>
												<AccordionTrigger className="py-4 text-base text-slate-900 hover:no-underline">
													<span className="pr-4 font-medium text-slate-900">
														{item.question}
													</span>
												</AccordionTrigger>
												<AccordionContent>
													<div className="max-w-none text-slate-600 leading-7">
														{item.answer}
													</div>
												</AccordionContent>
											</AccordionItem>
										))}
									</Accordion>
								</section>
								{cta ? <InlineFaqCta {...cta} /> : null}
							</div>
						);
					})}
				</div>

				<div className="mt-20">
					<div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-6 py-12 text-center text-white md:px-12 md:py-16">
						<div className="relative z-10 mx-auto max-w-3xl">
							<div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-medium text-sm text-white/90 backdrop-blur-sm">
								没找到想要的答案？
							</div>
							<h2 className="font-bold text-3xl leading-tight md:text-5xl">
								让专业的老师为您解答
							</h2>
							<p className="mx-auto mt-6 text-lg text-slate-300 md:text-xl">
								每个孩子的情况都是唯一的。无论是课程安排、收费细节还是升学规划，我们都建议您直接电话咨询，获取最准确的建议。
							</p>
							<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
								<PhoneButton
									className="h-14 rounded-2xl px-10 text-lg"
									size="lg"
								>
									立即电话咨询：{SITE_HOTLINE_TEXT}
								</PhoneButton>
							</div>
							<p className="mt-6 text-slate-400 text-sm">
								服务时间：周一至周日 09:00 - 21:00
							</p>
						</div>

						{/* Background decorative elements */}
						<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
						<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
					</div>
				</div>
			</div>
		</div>
	);
}
