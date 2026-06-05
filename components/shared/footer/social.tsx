import Image from "next/image";

const socials = [
    {
        id: "1",
        name: "Github",
        icon: "/images/social-svg/github-light.svg",
        address: "https://github.com/",
    },
    {
        id: "2",
        name: "Linkedin",
        icon: "/images/social-svg/linkedin-light.svg",
        address: "https://youtube.com/",
    },
    {
        id: "3",
        name: "Telegram",
        icon: "/images/social-svg/telegram-light.svg",
        address: "https://google.com/",
    },
];

const social = () => {
    return (
        <div className="flex flex-row">
            {socials.map((social) => (
                <span className="social mx-2.5" key={social.id}>
                    <a href={social.address}>
                        <Image
                            src={social.icon}
                            alt={social.name}
                            height={48}
                            width={48}
                        />
                    </a>
                </span>
            ))}

            {/* 
            //HardCode way:
            <span
                className="
                github
                mx-5">
                <a href="">
                    <Image
                        src="/images/social-svg/github-light.svg"
                        alt="github logo"
                        width={48}
                        height={48}
                    />
                </a>
            </span>
            <span
                className="
                linkedin
                mx-5
                relative">
                <a href="">
                    <Image
                        src="/images/social-svg/linkedin-light.svg"
                        alt="github logo"
                        width={48}
                        height={48}
                    />
                </a>
            </span>
            <span
                className="
                telegram
                mx-5
                relative">
                <a href="">
                    <Image
                        src="/images/social-svg/telegram-light.svg"
                        alt="github logo"
                        width={48}
                        height={48}
                    />
                </a>
            </span>
            */}
        </div>
    );
};

export default social;
