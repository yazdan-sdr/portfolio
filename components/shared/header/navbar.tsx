import Navigation from "./navigation";
import Logo from "./logo";
import ModeToggler from "./mode-toggler";
import MobileMenu from "./mobile-menu";
import clsx from "clsx";
import { LogoName } from "./logo";

const navBar = () => {
    return (
        <header
            className={clsx(
                "top-0",
                "z-50",
                "sticky",
                "bg-linear-to-b",
                "from-chart-1",
                "to-background",
                "flex",
                "lg:px-30",
                "px-20",
                "py-7.5",
                "flex-row",
                "relative",
                "items-center",
            )}>
            <div className="flex flex-1 justify-start items-center gap-4">
                <Logo />
                <LogoName />
            </div>
            <div className="flex flex-1 justify-center">
                <Navigation />
            </div>
            <div className="flex flex-1 gap-6 justify-end items-center">
                <MobileMenu />
                <div className="lg:flex hidden mb-3.5">
                    <ModeToggler />
                </div>
            </div>
        </header>
    );
};

export default navBar;
