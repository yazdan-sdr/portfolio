import Description from "@/components/aboutme/descriptopn";
import TechStack from "@/components/aboutme/tech-stack";
const aboutMe = () => {
    return (
        <section className="flex flex-col min-h-screen w-full">
            <Description />
            <TechStack />
        </section>
    );
};

export default aboutMe;
