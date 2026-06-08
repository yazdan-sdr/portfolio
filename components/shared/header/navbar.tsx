import Navigation from "./navigation";
import Logo from "./logo";
import ModeToggler from "./mode-toggler";
import MobileMenu from "./mobile-menu";
import clsx from "clsx";

const navBar = () => {
    return (
        <header
            className={clsx(
                "bg-linear-to-t",
                "from-background",
                "to-card",
                "flex",
                "lg:px-50",
                "px-20",
                "py-7.5",
                "flex-row",
                "relative",
                "justify-evenly",
                "items-center",
                "bg-card",
            )}>
            <Logo />
            <Navigation />
            <div className="flex gap-6 text-muted-foreground flex-1 justify-end">
                <MobileMenu />
                <div className="lg:flex hidden">
                    <ModeToggler />
                </div>
            </div>
        </header>
    );
};

export default navBar;
