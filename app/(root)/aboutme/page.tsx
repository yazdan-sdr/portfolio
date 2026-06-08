import Description from "@/components/aboutme/descriptopn";
import TechStack from "@/components/aboutme/tech-stack";
import clsx from "clsx";

const aboutMe = () => {
    return (
        <section
            className={clsx(
                "mt-10",
                "flex",
                "flex-col",
                "min-h-screen",
                "w-full",
            )}>
            <Description />
            <TechStack />
        </section>
    );
};

export default aboutMe;
