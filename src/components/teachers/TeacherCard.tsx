import Image from "next/image";
import Link from "next/link";
import type { TeacherProfile } from "~/lib/constants/teachers";

type TeacherCardProps = {
  teacher: TeacherProfile;
};

export function TeacherCard({ teacher }: TeacherCardProps) {
  return (
    <Link className="group block overflow-hidden rounded-xl border border-slate-200 bg-white" href={`/lao-shi/${teacher.slug}`}>
      <div className="relative aspect-4/4.5 bg-slate-100">
        <Image
          alt={`${teacher.name}老师`}
          className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          src={teacher.image}
        />
      </div>

      <div className="border-slate-100 border-t px-5 py-5">
        <h3 className="font-bold text-lg text-slate-950">{teacher.name}</h3>
        <p className="mt-1 font-medium text-primary text-sm">{teacher.title}</p>
        <p className="mt-3 line-clamp-2 text-slate-600 text-sm leading-7">{teacher.summary}</p>

        <p className="mt-4 font-semibold text-primary text-sm">查看老师详情</p>
      </div>
    </Link>
  );
}
