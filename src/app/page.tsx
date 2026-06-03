import { AdmissionsEntry } from "~/components/home/AdmissionsEntry";
import { AIDiagnosis } from "~/components/home/AIDiagnosis";
import { CampusEnvironment } from "~/components/home/CampusEnvironment";
import { ConsultationGuide } from "~/components/home/ConsultationGuide";
import { CoreEndorsement } from "~/components/home/CoreEndorsement";
import { Honors } from "~/components/home/Honors";
import { ExamNews } from "~/components/home/ExamNews";
import { FAQ } from "~/components/home/FAQ";
import { FacultyTeam } from "~/components/home/FacultyTeam";
import { Footer } from "~/components/home/Footer";
import { FullTimeProgram } from "~/components/home/FullTimeProgram";
import { HeroBanner } from "~/components/home/HeroBanner";
import { HomeSchoolService } from "~/components/home/HomeSchoolService";
import { ManagementSystem } from "~/components/home/ManagementSystem";
import { StudentParentFeedback } from "~/components/home/StudentParentFeedback";
import { TeachingSystem } from "~/components/home/TeachingSystem";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <HeroBanner />
        <CoreEndorsement />
        <Honors />
        <FullTimeProgram />
        <TeachingSystem />
        <FacultyTeam />
        <ManagementSystem />
        <HomeSchoolService />
        <AIDiagnosis />
        <CampusEnvironment />
        <StudentParentFeedback />
        <AdmissionsEntry />
        <FAQ />
        <ConsultationGuide />
        <ExamNews />
      </main>
      <Footer />
    </div>
  );
}
