import clsx from "clsx";
import { skills } from "../skills-section/data";
import Image from "next/image";

const techStack = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-20 max-w-7xl mx-auto">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-15">
                Tech Stack
            </h2>
            <div
                className={clsx(
                    "grid",
                    "grid-cols-2",
                    "sm:grid-cols-3",
                    "md:grid-cols-4",
                    "lg:grid-cols-5",
                    "xl:grid-cols-10",
                    "xl:gap-15",
                    "gap-26",
                )}>
                {skills.map((skill) => (
                    <span
                        className="{skill.name} flex flex-col items-center w-16"
                        key={skill.id}>
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={200}
                            height={200}
                            className=""
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default techStack;
