import header from "@/components/shared/header/header";
import footer from "@/components/shared/footer/footer";
import skillsSection from "@/components/skills-section/page";
import careerOverview from "@/components/career-overview/page";
export const metadata = {
    title: "Home",
};

const Homepage = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full">
            <div>{header()}</div>
            <div>{skillsSection()}</div>
            <div>{careerOverview()}</div>
            <div>{footer()}</div>
        </section>
    );
};

export default Homepage;
