"use client";
import Image from "next/image";
import { skills } from "./data";
import clsx from "clsx";
import Marquee from "react-fast-marquee";
const skillsSection = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-20 max-w-7xl mx-auto">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-25">
                Skills & Technologies
            </h2>

            <div className="overflow-hidden w-full px-10">
                <Marquee speed={60} gradient={false} pauseOnHover>
                    {skills.map((skill) => (
                        <span
                            className={clsx(
                                skill.name,
                                "flex",
                                "flex-col",
                                "items-center",
                                "justify-center",
                                "mx-8",
                            )}
                            key={skill.id}>
                            <Image
                                src={skill.icon}
                                alt={skill.name}
                                width={64}
                                height={64}
                            />
                        </span>
                    ))}
                </Marquee>
            </div>

            {/*<div
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
            </div>*/}
        </div>
    );
};

export default skillsSection;
