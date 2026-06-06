import SkillsSection from "@/components/skills-section/page";
import CareerOverview from "@/components/career-overview/page";
import Hero from "@/components/shared/header/hero";
export const metadata = {
    title: "Home",
};

const Homepage = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full">
            <Hero />
            <SkillsSection />
            <CareerOverview />
        </section>
    );
};

export default Homepage;
