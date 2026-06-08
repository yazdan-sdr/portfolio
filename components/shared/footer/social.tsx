import { Github } from "@/components/icons";
import { Telegram } from "@/components/icons";
import { Gmail } from "@/components/icons";
import { Linkedin } from "@/components/icons";

const socials = [
    {
        id: "1",
        name: "Github",
        icon: Github,
        address: "https://github.com/",
    },
    {
        id: "2",
        name: "Linkedin",
        icon: Linkedin,
        address: "https://youtube.com/",
    },
    {
        id: "3",
        name: "Telegram",
        icon: Telegram,
        address: "https://google.com/",
    },
    {
        id: "4",
        name: "Gmail",
        icon: Gmail,
        address: "https://youtube.com/",
    },
];

const social = () => {
    return (
        <div className="flex flex-row">
            {socials.map((social) => {
                const Icon = social.icon;
                return (
                    <span
                        className="social mx-2.5 text-muted-foreground hover:text-accent-light"
                        key={social.id}>
                        <a rel="noopener noreferrer" href={social.address}>
                            <Icon size="50"></Icon>
                        </a>
                    </span>
                );
            })}
        </div>
    );
};

export default social;
