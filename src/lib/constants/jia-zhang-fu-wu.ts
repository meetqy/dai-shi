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

// =========================== FAQ 类型 ===========================

export type FaqItem = {
	id?: string;
	question: string;
	answer: string;
	isNegative?: boolean; // 是否负面/顾虑问题，加红色背景
	quickLink?: {
		label: string;
		href: string;
	};
};

export type FaqSectionCta = {
	title: string;
	description: string;
	buttonText: string;
	icon: LucideIcon;
};

export type FaqSection = {
	title: string;
	items: FaqItem[];
	cta?: FaqSectionCta;
};

export type BottomCta = {
	badge: string;
	title: string;
	description: string;
	buttonText: string;
};

export type GuideSection = {
	id: string;
	title: string;
	description: string;
	items: string[];
};

// =========================== 文章内容块 ===========================

export type ArticleBlock =
	| { kind: "faq"; sections: FaqSection[]; bottomCta?: BottomCta }
	| {
			kind: "guide";
			intro: string[];
			sections: GuideSection[];
			relatedQuestions?: { question: string; answer?: string; href: string }[];
			bottomCta?: BottomCta;
	  };

// =========================== 文章 ===========================

export type JiaZhangArticle = {
	slug: string;
	title: string;
	summary: string;
	publishedAt: string; // ISO 日期
	highlighted?: boolean;
	content: ArticleBlock;
};

// =========================== 家长问答 - FAQ 章节数据 ===========================

const FAQ_PAGE_CTAS: Record<string, FaqSectionCta> = {
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
};

const XUE_GUAN_FLOW_PAGE_HREF = "/jia-zhang-fu-wu/xue-guan-fu-wu-liu-cheng";

const FAQ_SECTIONS: FaqSection[] = [
	{
		title: "一、品牌资质类",
		items: [
			{
				question: "成都戴氏教育办学多少年了？",
				answer:
					"戴氏教育1993年成立，至今已办学33年，是成都本地深耕教育行业的老牌机构。",
			},
			{
				question: "成都戴氏教育有正规办学资质吗？",
				answer: "是的，戴氏教育具备正规办学资质，家长们可以放心选择。",
			},
			{
				question: "戴氏教育会出现经营倒闭、学费无法退还的情况吗？",
				answer: "不会的，戴氏教育作为老牌机构，办学稳定，家长不用担心。",
			},
			{
				question: "成都戴氏教育主要做哪些年级的辅导？",
				answer:
					"戴氏教育常规校区部分有幼小衔接，小学到高中都可以就近分配；高考中心（4个校区）主要是全日制课程，包含高三、复读、艺体生、单招、初三，还有单科/一对一/寒暑假班课程，覆盖初一到高三。",
			},
		],
		cta: FAQ_PAGE_CTAS["一、品牌资质类"],
	},
	{
		title: "二、收费课时类",
		items: [
			{
				question: "戴氏教育的学费里包含教材费吗？",
				answer: "不包含，教材费需要单独缴纳。",
			},
		],
		cta: FAQ_PAGE_CTAS["二、收费课时类"],
	},
	{
		title: "三、师资相关类",
		items: [
			{
				question: "成都戴氏教育的老师都有教师资格证吗？",
				answer: "有的，戴氏所有授课老师都持有教师资格证，教学资质有保障。",
			},
		],
		cta: FAQ_PAGE_CTAS["三、师资相关类"],
	},
	{
		title: "四、班型课程体系类",
		items: [
			{
				question: "孩子基础不同，戴氏教育一般有哪些班型可选？",
				answer:
					"戴氏教育开设了小班、中班、大班、一对一等多种授课班型，家长可以根据孩子情况选择。",
			},
			{
				question: "戴氏是否开设寒暑假学科衔接课程？",
				answer: "是的，戴氏教育开设有寒暑假学科衔接课程。",
			},
			{
				question: "艺考文化课拥有专属定制课程吗？",
				answer: "有的，戴氏教育为艺考生准备了专属定制课程。",
			},
			{
				question: "高三高考复读有独立集训课程吗？",
				answer: "有的，戴氏教育为高三复读生设有独立集训课程。",
			},
			{
				question: "戴氏开设高中强基计划培优课程吗？",
				answer: "有的。",
			},
			{
				question: "戴氏开设学科竞赛辅导课程吗？",
				answer: "有的。",
			},
			{
				question: "戴氏教育上课用的教材和讲义是统一教研的吗？",
				answer: "是的，戴氏教育课堂使用的教材是机构自主研发的。",
			},
		],
		cta: FAQ_PAGE_CTAS["四、班型课程体系类"],
	},
	{
		title: "五、教学提分效果类",
		items: [
			{
				question: "成都戴氏教育有真实提分案例吗？",
				answer: "能的，戴氏教育有很多往届学生的提分案例，家长可以了解。",
			},
			{
				question: "文化课总分三四百分的学生，补习后能否考上本科院校？",
				answer:
					"能的！戴氏针对基础薄弱学生开设专属提分课程，聚焦基础考点高效提分，历年大量300–400分学员经3–6个月集训稳过四川本科线。",
			},
			{
				question: "文化课总分三四百分的学生，补习后能否考上重点高中？",
				answer:
					"能的！如果距离中考还有6个月以上，通过系统集训补齐短板，多数学员可达重点高中录取线；如果备考周期过短，则优先冲刺普高。",
			},
			{
				question: "单科成绩极差、严重偏科的学生，补习补弱效果怎么样？",
				answer: "效果很显著的，一对一精准查漏补缺，薄弱科目普遍提分40–80分。",
			},
			{
				question:
					"孩子自律性差、在家不愿写作业，戴氏全日制能管得住吗？",
				answer:
					"可以的！全封闭作息加班主任全程督学，当日任务当日清，从习惯根源改善拖延厌学问题。",
				quickLink: {
					label: "查看日常管理流程",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#ri-chang-guan-li`,
				},
			},
			{
				question: "孩子总想玩手机、自控力弱，戴氏全日制怎么管？",
				answer:
					"入校统一寄存电子产品、校区全域禁手机、宿舍无外网，辅以心理引导，帮助学生养成自主学习习惯。",
				id: "shou-ji-guan-kong",
				quickLink: {
					label: "查看手机与纪律管理",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#ri-chang-guan-li`,
				},
			},
			{
				question: "文化课550分以上高分学生，补习后冲刺985院校提升空间大吗？",
				answer:
					"空间很大的！培优专攻压轴、应试细节、失分盲区，搭配强基规划，多数学员可稳步冲到600+，冲刺985院校。",
			},
			{
				question: "文化课高分段学生补习后冲刺清北院校效果如何？",
				answer:
					"效果很优异！清北定向培优+强基+竞赛三维规划，配备名校教研师资，历年多名学员通过裸分/强基圆梦清北。",
			},
			{
				question: "学生补习多久能够看到明显的成绩提升？",
				answer:
					"基础薄弱1–2个月见效；中等生2–3个月稳步提分；全日制集训1个月即可显现分数变化。",
			},
			{
				question: "仅报名一两个月短期课程，能实现成绩提升吗？",
				answer:
					"能的！聚焦高频考点专项突破，考前短期冲刺普遍实现单科20+提分，适配突击备考学员。",
			},
			{
				question: "戴氏教育会和家长签订保分学习协议吗？",
				answer: "有入学协议，中高考全日制、一对一、复读班均有试学检验保障。",
			},
			{
				question: "双方签订的保分协议具备法律效用吗？",
				answer: "入学协议保障双方权益。",
			},
			{
				question: "补习结束没有达到协议约定分数，机构如何处理？",
				answer:
					"学员按约完成课业未达标，对教学不满意，可按比例退费，售后无忧。",
			},
		],
		cta: FAQ_PAGE_CTAS["五、教学提分效果类"],
	},
	{
		title: "六、管理食宿家校服务类",
		items: [
			{
				question: "成都戴氏教育高三全日制是封闭式管理吗？",
				answer:
					"采用的！高三复读、艺考文化课统一全寄宿封闭式管理，吃住学在校一体化，隔绝外界干扰，让家长更放心。",
				id: "feng-bi-guan-li",
				quickLink: {
					label: "查看全流程管理说明",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#ri-chang-guan-li`,
				},
			},
			{
				question: "孩子在全日制校区上课时，手机会怎么管理？",
				answer:
					"入学统一收纳保管，周末统一领取，校区不定时巡检，全方位杜绝电子产品干扰学习。",
				quickLink: {
					label: "查看手机管理细则",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#ri-chang-guan-li`,
				},
			},
			{
				question: "孩子读高三全日制时，每天的作息安排是什么样的？",
				answer:
					"标准化作息：6:30起床早读→8:00–12:00正课→14:00–18:00正课刷题→19:00–22:30晚辅答疑→22:30熄灯。",
				id: "mei-ri-zuo-xi",
				quickLink: {
					label: "查看作息与日常管理",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#ri-chang-guan-li`,
				},
			},
			{
				question: "孩子读全日制时，校区配套宿舍吗？",
				answer: "配套的！全封闭校区标配独立宿舍楼，寄宿制学员统一入住。",
			},
			{
				question: "孩子在校吃饭方便吗，校区有自己的食堂吗？",
				answer: "设有！自有合规食堂，营养配餐，安全卫生，食宿一体化配套。",
			},
			{
				question: "孩子住校的话，宿舍一般是几人间？",
				answer: "多规格1-2-4-6人间为主，环境整洁，配套生活设施齐全。",
			},
			{
				question: "孩子住校的食宿费用是单独算，还是包含在学费里？",
				answer:
					"是的，食宿费用不含在学费里，根据学生要求选择宿舍和餐饮搭配，实惠营养。",
			},
			{
				question: "孩子入读后，除了任课老师，还会有哪些老师一起跟进？",
				answer:
					"各授课学科老师+专职班主任+学管师，部分封闭班增设心理辅导老师+体能老师。",
			},
			{
				question: "任课老师除了上课，还会怎么帮孩子补薄弱点？",
				answer: "课堂授课、学情诊断、作业讲评、薄弱专项辅导、阶段试卷分析。",
			},
			{
				question: "孩子在校期间，班主任主要会管哪些事情？",
				answer:
					"日常纪律管理、作息管控、手机管理、家校沟通、学员日常状态跟踪。",
			},
			{
				question: "学管老师会怎么跟进孩子的学习进度和课程安排？",
				answer: "课时统筹、学情档案更新、阶段性测评规划、课程调整协调。",
				id: "xue-guan-zhi-ze",
				quickLink: {
					label: "查看学管服务流程",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#ru-xue-jian-dang`,
				},
			},
			{
				question: "孩子课后遇到不会的题，还能得到老师答疑吗？",
				answer: "提供的！晚自习专职老师在岗坐班，全时段一对一免费学科答疑。",
			},
			{
				question: "孩子晚自习时，现场会有老师一直跟着吗？",
				answer: "会的！全日制晚自习固定任课教师值守，随时答疑解惑。",
			},
			{
				question: "家长多久能收到一次孩子在校学习情况反馈？",
				answer:
					"常规周反馈+月考专项汇报，重要节点第一时间同步在校状态到群，让家长及时了解孩子情况。",
				id: "jia-zhang-fan-kui-pin-ci",
				quickLink: {
					label: "查看家校沟通机制",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#jia-xiao-gou-tong`,
				},
			},
			{
				question: "家长能定期看到孩子的课堂表现和作业完成情况吗？",
				answer:
					"会的！常态化同步课堂表现、出勤、作业完成情况，透明化教学管理。",
				quickLink: {
					label: "查看课堂反馈方式",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#jia-xiao-gou-tong`,
				},
			},
			{
				question: "家长每月能看到孩子的阶段成绩变化吗？",
				answer: "会的！每月正规模拟考试，成绩单同步家长，直观查看分数涨跌。",
				id: "cheng-ji-tong-bu",
				quickLink: {
					label: "查看成绩反馈机制",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#jia-xiao-gou-tong`,
				},
			},
			{
				question: "孩子压力大或情绪波动时，校区有老师能及时疏导吗？",
				answer:
					"配备的！全封闭校区配置专职心理疏导老师，疏导厌学、备考焦虑等心理问题。",
			},
			{
				question: "孩子出现厌学情绪时，校区会怎么介入和帮助？",
				answer: "有的！心理疏导+学习方案微调+家校联动，分层引导纠正厌学心态。",
				id: "yan-xue-gan-yu",
				quickLink: {
					label: "查看预警干预流程",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#yu-jing-gan-yu`,
				},
			},
			{
				question: "学生学习压力过大，机构会提供疏导帮助吗？",
				answer: "会的！常态化心理班会+一对一心理辅导，缓释学生备考压力。",
				quickLink: {
					label: "查看心理支持机制",
					href: `${XUE_GUAN_FLOW_PAGE_HREF}#yu-jing-gan-yu`,
				},
			},
			{
				question: "孩子在校期间，校园安全和消防管理做得怎么样？",
				answer: "完善的！全校区消防验收合规，定期安全巡检，保障在校师生安全。",
			},
			{
				question: "家长担心孩子出入校安全，校区平时怎么管理？",
				answer:
					"封闭式校区门禁24h安保值守，学生外出须报备审批登记，严控私自离校。",
			},
			{
				question: "走读学生来上周末集训，校区提供接送吗？",
				answer: "暂无接送服务。",
			},
			{
				question: "寒暑假短期集训期间，校区提供接送吗？",
				answer: "暂无接送服务。",
			},
		],
		cta: FAQ_PAGE_CTAS["六、管理食宿家校服务类"],
	},
	{
		title: "七、校区环境选择类",
		items: [
			{
				question: "成都戴氏教育的校区主要分布在哪些区域？",
				answer:
					"戴氏教育在成都设有多个校区，核心直营校区主要分布在青羊区（顺吉）、锦江区（世贸）、金牛区（金牛）、成华区（顺风）等核心地段，周边交通便利，方便全城家长和学生选择。",
			},
			{
				question: "成都戴氏教育主要针对哪些中学的学生提供辅导？",
				answer:
					"我们针对成都各大重点中学（如成都四七九中、成外、实外等）及普通中学的教材和考试命题有深入研究，提供同步辅导和考前专项突破，助力学员在本地考试中脱颖而出。",
			},
			{
				question: "成都哪家戴氏直营校区教学质量整体最优？",
				answer:
					"顺吉、世贸、金牛、顺风，四大旗舰直营校区，师资与教研资源顶配，主攻高三全日制与中高考集训。",
			},
			{
				question: "顺吉校区的教学优势体现在哪里？",
				answer:
					"老牌旗舰校区，资深骨干教师富集，小初高全科均衡，中高考培优见长。",
			},
			{
				question: "世贸校区的教学优势体现在哪里？",
				answer: "主打文化课+高三复读全日制，封闭校区配套完善，提升效果突出。",
			},
			{
				question: "金牛直营校区的教学优势体现在哪里？",
				answer: "成都标杆复读集训基地，全封闭寄宿环境，深耕高三复读应试提分。",
			},
			{
				question: "住所周边的戴氏加盟校区教学靠谱吗？",
				answer: "不同校区教学师资课程配置不同，家长可优先与总部了解参考。",
			},
			{
				question: "高三全日制集训，选择直营校区还是加盟校区更好？",
				answer:
					"优先直营校区：师资统一管控、收费退费标准化、全日制管理体系成熟，保障性更强。",
			},
			{
				question: "戴氏各校区整体学习环境怎么样？",
				answer: "标准化装修，教室、自习室分区，学习氛围浓厚，硬件配套齐全。",
			},
			{
				question: "校区教室内部上课环境安静吗？",
				answer: "分区隔音设计，上课区域与休闲区隔离，保障课堂专注度。",
			},
			{
				question: "校区内设置独立的学生自习室吗？",
				answer: "所有直营校区标配免费公共自习室，课余可留校自主学习。",
			},
			{
				question: "校区周边停车是否方便？",
				answer:
					"方便的！主城直营校区紧邻地铁/公交站点，多数校区有校外停车区域。",
			},
			{
				question: "校区公共交通、地铁出行便利吗？",
				answer: "便利的！核心校区均临近地铁、公交枢纽，通勤便捷。",
			},
		],
		cta: FAQ_PAGE_CTAS["七、校区环境选择类"],
	},
	{
		title: "八、不同人群适配问题",
		items: [
			{
				question: "小学低年级学生适合报名戴氏辅导课程吗？",
				answer:
					"适合的！适配校内同步巩固、小升初衔接，小班/一对一灵活选课，夯实小学学习习惯。",
			},
			{
				question: "戴氏小学阶段辅导存在哪些短板？",
				answer: "品牌重心聚焦中高考，低龄素质类课程偏少，优先文化课刚需补习。",
			},
			{
				question: "文化课基础薄弱的艺考生，3个月集训可以通过文化课分数线吗？",
				answer:
					"可以的！大量真实案例佐证，3个月封闭式集训主攻基础分，多数考生稳妥过艺术本科文化线。",
			},
			{
				question: "文化课基础薄弱的艺考生，6个月集训可以通过文化课分数线吗？",
				answer:
					"可以的！半年系统全阶复习，夯实全部核心考点，本科上线率稳居行业前列。",
			},
			{
				question: "戴氏艺考文化课整体上线率是多少？",
				answer:
					"历年艺考文化课本科上线率95%以上，西南区域头部艺考文化课办学实力。",
			},
			{
				question: "选择戴氏全日制复读，对比公办复读学校有哪些优势？",
				answer:
					"小班精细化管控、全时段答疑、个性化补弱、封闭式管理灵活，保分与配套服务更完善。",
			},
			{
				question: "选择戴氏全日制复读，对比公办复读学校有哪些劣势？",
				answer: "定制班型费用更灵活，但无公办院校学籍属性。",
			},
			{
				question: "学习自律性强、成绩中等偏上的学生，报小班课性价比更高吗？",
				answer:
					"更高的！自律性良好优选精品小班，氛围带动学习，课时单价远低于一对一，性价比突出。",
			},
			{
				question:
					"学习自律性强、成绩中等偏上的学生，报一对一课程性价比更高吗？",
				answer:
					"不高！仅用于单科薄弱点专项拔高，全科提升优先选择精品小班更划算。",
			},
			{
				question:
					"极度抵触课外补习、厌学的学生，戴氏教学模式可以改善学习态度吗？",
				answer:
					"可以的！通过心理疏导+分层教学+正向激励，逐步纠正厌学心态，重建学习信心。",
			},
		],
		cta: FAQ_PAGE_CTAS["八、不同人群适配问题"],
	},
	{
		title: "九、顾虑负面问题",
		items: [
			{
				question: "网络上评价戴氏收费价格虚高，这个说法属实吗？",
				answer:
					"不属实！校区收费透明，食宿、教材、模考全包无隐形消费；价格略高源于优质师资与精细化服务，性价比匹配价值。",
				isNegative: true,
			},
			{
				question: "戴氏课程整体性价比偏低是普遍情况吗？",
				answer: "不是！中高考全日制、艺考文化课，提分效果显著。",
				isNegative: true,
			},
			{
				question: "戴氏加盟校区普遍存在退费办理困难的问题吗？",
				answer: "总部退费流程公开透明，按合同执行。",
				isNegative: true,
			},
			{
				question: "戴氏加盟校区班级日常管理普遍松散吗？",
				answer: "加盟校区管理标准不一。",
				isNegative: true,
			},
			{
				question: "有什么办法避开不靠谱的戴氏加盟校区？",
				answer:
					"家长可优先选顺吉、世贸、金牛、顺风，四大直营旗舰；报名前核验办学许可证、试听课程、查看师资资质。",
				isNegative: true,
			},
			{
				question: "大班课学生人数过多，老师无法兼顾普通学生吗？",
				answer:
					"不会的！大班课配备助教辅助管理，课堂互动+课后答疑全覆盖，基础薄弱学生可同步小班/一对一补弱。",
				isNegative: true,
			},
			{
				question: "部分学生补习之后成绩不升反降，是什么原因？",
				answer:
					"多为学生配合度不足、缺课漏学、未完成作业或学习态度消极；机构教学与管理为核心保障，学生主动性同样关键。",
				isNegative: true,
			},
			{
				question: "全日制课程每日学习时长很长，学生身体能否承受？",
				answer:
					"可以的！作息科学劳逸结合，每日预留休息与运动时间，配备生活老师与心理老师，保障身心状态。",
				isNegative: true,
			},
			{
				question: "机构老师会在上课期间推销续报课时包吗？",
				answer:
					"不会的！回访以学情反馈为主，续费建议客观透明，尊重家长自主选择。",
				isNegative: true,
			},
			{
				question: "学管师电话回访时会强制劝说家长续费吗？",
				answer:
					"不会的！回访以学情反馈为主，续费建议客观透明，尊重家长自主选择。",
				isNegative: true,
			},
		],
		cta: FAQ_PAGE_CTAS["九、顾虑负面问题"],
	},
	{
		title: "十、升学增值服务类",
		items: [
			{
				question: "戴氏教育提供中考志愿填报指导服务吗？",
				answer:
					"选择性提供！专业规划师团队提供中考志愿填报指导，助力合理填报、规避滑档风险。",
			},
			{
				question: "中考志愿填报指导服务需要单独收费吗？",
				answer: "基础志愿指导免费；一对一深度定制方案按服务标准收费。",
			},
			{
				question: "戴氏教育提供高考志愿填报指导服务吗？",
				answer:
					"提供的！深耕四川本地33年，提供全流程高考志愿填报服务，含冲稳保梯度定制。",
			},
			{
				question: "高考志愿填报指导服务需要单独收费吗？",
				answer: "基础讲座与咨询免费；一对一专属规划服务按档位收费。",
			},
			{
				question: "戴氏校区会定期组织全真模拟考试吗？",
				answer:
					"会的！每周周测、每月月考、考前全真模考，完全对标四川中高考真题标准。",
			},
			{
				question: "校区模考使用的试卷贴合四川本地中高考真题吗？",
				answer:
					"贴合的！试卷由四川教研总院研发，深度适配本地考纲、命题规律与阅卷标准。",
			},
			{
				question: "考前阶段机构开设考点冲刺专项课程吗？",
				answer:
					"开设的！考前专项冲刺聚焦高频考点、重难点、压轴题，助力短期高效提分。",
			},
			{
				question: "考前冲刺课程包含中高考考点押题内容吗？",
				answer:
					"包含的！由资深教研专家、特级教师结合历年考情趋势，提供精准押题与应试技巧指导。",
			},
		],
		cta: FAQ_PAGE_CTAS["十、升学增值服务类"],
	},
];

// =========================== 文章列表 ===========================

export const JIA_ZHANG_ARTICLES: JiaZhangArticle[] = [
	{
		slug: "xue-guan-fu-wu-liu-cheng",
		title: "成都高考全日制学管服务流程",
		summary:
			"围绕成都戴氏教育高考中心学员入学后的建档、排课、首课回访、日常管理、家校沟通与预警干预，系统说明高考全日制与复读学员的学管服务流程，让家长清楚知道孩子入学后如何被跟进、反馈与支持。",
		publishedAt: "2026-06-05",
		highlighted: true,
		content: {
			kind: "guide",
			intro: [
				"这是一份面向家长的对外版说明，用更清楚的方式介绍成都戴氏教育高考中心学员入学后的学管服务流程。",
				"重点帮助家长看懂孩子从入学建档、排课开班到首课回访、日常管理、家校沟通、预警干预的完整跟进机制。",
			],
			sections: [
				{
					id: "ru-xue-jian-dang",
					title: "入学建档与信息交接",
					description:
						"孩子正式入学后，学管老师会先完成基础建档和学情确认，确保后续教学安排建立在完整、真实、可追踪的信息基础上。",
					items: [
						"核对学生年级、学校、成绩基础、科目薄弱点、班型与开课安排，形成学员基础档案。",
						"同步孩子的学习目标、阶段预期、家庭关注点和需要特别留意的个性情况。",
						"把首阶段需要重点关注的问题提前标记，方便后续排课、带班和家校沟通持续跟进。",
					],
				},
				{
					id: "pai-ke-kai-ban",
					title: "排课开班与老师协同",
					description:
						"排课不是简单安排时间，而是结合班型、基础、科目需求和老师匹配度，尽量让孩子一开始就进入更合适的学习节奏。",
					items: [
						"根据班型和学情完成课表确认，明确首课时间、授课科目和老师安排。",
						"在开课前把孩子的学习基础、性格特点和注意事项同步给相关老师，提高首课匹配度。",
						"针对需要重点关注的学员，提前召开沟通或研讨，减少开课初期的不适应和信息断层。",
					],
				},
				{
					id: "shou-ke-hui-fang",
					title: "首课准备与适应期回访",
					description:
						"孩子刚入学的前几天，是观察适应状态、课堂反馈和沟通感受的关键阶段，学管会重点跟进。",
					items: [
						"首课前再次确认到校时间、上课科目、校区位置和基础注意事项，帮助家长与学生顺利衔接。",
						"开班初期重点关注课堂表现、课后状态、老师反馈和学生适应度，及时识别潜在风险。",
						"围绕首课体验、学习节奏、作业落实和情绪状态做阶段回访，必要时及时协调优化。",
					],
				},
				{
					id: "ri-chang-guan-li",
					title: "日常学习管理与作息执行",
					description:
						"对高三全日制和复读阶段来说，稳定作息、课堂纪律、作业闭环和执行力管理，是提分的基础保障。",
					items: [
						"围绕到校、早读、正课、晚自习、作业和阶段测试建立日常管理节奏。",
						"对迟到、请假、课堂纪律、电子产品使用、作业落实和错题整理进行持续跟进。",
						"通过巡课、课后检查、周复盘和阶段总结，帮助学生逐步建立更稳定的学习习惯。",
					],
				},
				{
					id: "jia-xiao-gou-tong",
					title: "家校沟通与学习反馈",
					description:
						"家长最关心的往往不是一句“孩子在上课”，而是孩子是否适应、是否在进步、出现问题后有没有人持续跟进。",
					items: [
						"围绕出勤、课堂状态、作业完成、阶段成绩和学习变化，建立常规反馈机制。",
						"重要节点及时和家长沟通，包括首课适应、阶段考试、情绪波动和策略调整。",
						"在沟通中既反馈问题，也同步解决方向，帮助家长更稳地参与孩子高三阶段的陪伴。",
					],
				},
				{
					id: "yu-jing-gan-yu",
					title: "预警干预与习惯养成支持",
					description:
						"对于高三常见的拖延、厌学、焦虑、亲子冲突、自控力弱等问题，学管工作的重点不只是发现，更是尽快干预。",
					items: [
						"从学习状态、情绪波动、手机依赖、作息混乱和家庭沟通压力等方面做持续观察。",
						"对出现风险信号的学员，联合老师、班主任和家长及时沟通，尽早介入处理。",
						"围绕习惯重建、情绪疏导、亲子沟通和阶段目标拆解，帮助孩子逐步回到稳定备考轨道。",
					],
				},
			],
			relatedQuestions: [
				{
					question: "成都戴氏教育高三全日制是封闭式管理吗？",
					answer:
						"是的，采用全封闭管理。高三复读、艺考文化课统一全寄宿封闭式管理，吃住学在校一体化，隔绝外界干扰。",
					href: "/jia-zhang-fu-wu/jia-zhang-wen-ti#feng-bi-guan-li",
				},
				{
					question: "孩子读高三全日制时，每天的作息安排是什么样的？",
					answer:
						"从早上 6:30 到晚上 22:30。包含早读、正课、正课刷题、晚辅答疑，作息高度标准化。",
					href: "/jia-zhang-fu-wu/jia-zhang-wen-ti#mei-ri-zuo-xi",
				},
				{
					question: "学管老师会怎么跟进孩子的学习进度和课程安排？",
					answer:
						"核心是统筹与协调。包括课时统筹、学情档案更新、阶段性测评规划以及课程调整协调。",
					href: "/jia-zhang-fu-wu/jia-zhang-wen-ti#xue-guan-zhi-ze",
				},
				{
					question: "家长多久能收到一次孩子在校学习情况反馈？",
					answer:
						"常规反馈每周一次。包含周反馈和月考专项汇报，重要节点会第一时间在群内同步孩子状态。",
					href: "/jia-zhang-fu-wu/jia-zhang-wen-ti#jia-zhang-fan-kui-pin-ci",
				},
				{
					question: "家长每月能看到孩子的阶段成绩变化吗？",
					answer:
						"是的，每月同步。每月举行正规模拟考试，成绩单会直观同步给家长查看分数涨跌。",
					href: "/jia-zhang-fu-wu/jia-zhang-wen-ti#cheng-ji-tong-bu",
				},
				{
					question: "孩子出现厌学情绪时，校区会怎么介入和帮助？",
					answer:
						"有成熟的处理方案。通过心理疏导、学习方案微调以及家校联动，分层引导纠正厌学心态。",
					href: "/jia-zhang-fu-wu/jia-zhang-wen-ti#yan-xue-gan-yu",
				},
			],
			bottomCta: {
				badge: "想进一步了解孩子入学后的具体安排？",
				title: "直接沟通，比看流程更高效",
				description:
					"每个孩子的基础、目标和家庭关注点都不同。欢迎直接电话咨询，我们会结合孩子当前情况，说明更适合的班型、管理方式与跟进节奏。",
				buttonText: "立即电话咨询",
			},
		},
	},
	{
		slug: "jia-zhang-wen-ti",
		title: "家长问答",
		summary:
			"关于戴氏教育的品牌资质、收费课时、师资、班型、提分效果、管理食宿、校区环境、人群适配、负面顾虑、升学增值等 10 大类 100+ 个家长最关心的问题集中解答。",
		publishedAt: "2026-05-20",
		highlighted: true,
		content: {
			kind: "faq",
			sections: FAQ_SECTIONS,
			bottomCta: {
				badge: "没找到想要的答案？",
				title: "让专业的老师为您解答",
				description:
					"每个孩子的情况都是唯一的。无论是课程安排、收费细节还是升学规划，我们都建议您直接电话咨询，获取最准确的建议。",
				buttonText: "立即电话咨询",
			},
		},
	},
];

// =========================== 兼容旧接口：所有 FAQ 项扁平化 ===========================

/**
 * 把所有家长问答详情里的 FAQ 项扁平化为一个数组，
 * 供首页"家长最常问的几个问题"组件复用。
 */
export function getAllJiaZhangFaqItems(): FaqItem[] {
	return JIA_ZHANG_ARTICLES.flatMap((article) => {
		if (article.content.kind !== "faq") return [];
		return article.content.sections.flatMap((section) => section.items);
	});
}
