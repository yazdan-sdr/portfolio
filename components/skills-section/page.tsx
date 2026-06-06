import Image from "next/image";

const skills = [
    {
        id: "1",
        name: "html",
        icon: "/images/skills-svg/html.svg",
    },
    {
        id: "2",
        name: "css",
        icon: "/images/skills-svg/css.svg",
    },
    {
        id: "3",
        name: "javascript",
        icon: "/images/skills-svg/javascript.svg",
    },
    {
        id: "4",
        name: "typescript",
        icon: "/images/skills-svg/typescript.svg",
    },
    {
        id: "5",
        name: "reactjs",
        icon: "/images/skills-svg/reactjs.svg",
    },
    {
        id: "6",
        name: "nextjs",
        icon: "/images/skills-svg/nextjs.svg",
    },
    {
        id: "7",
        name: "tailwindcss",
        icon: "/images/skills-svg/tailwindcss.svg",
    },
    {
        id: "8",
        name: "bootstrap",
        icon: "/images/skills-svg/bootstrap.svg",
    },
    {
        id: "9",
        name: "git",
        icon: "/images/skills-svg/git.svg",
    },
    {
        id: "10",
        name: "vscode",
        icon: "/images/skills-svg/vscode.svg",
    },
];

const skillsSection = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-20 max-w-7xl mx-auto">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-15">
                Skills & Technologies
            </h2>
            <div className="flex flex-col lg:flex-row justify-evenly">
                {skills.map((skill) => (
                    <span className="{skill.name} m-7" key={skill.id}>
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={48}
                            height={48}
                        />
                    </span>
                ))}
            </div>
        </div>
    );
};

export default skillsSection;
