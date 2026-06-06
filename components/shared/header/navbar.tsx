import Navigation from "./navigation";
import Logo from "./logo";
import ModeToggler from "./mode-toggler";

const navBar = () => {
    return (
        <header className="flex px-50 mt-5 flex-row relative justify-evenly items-center">
            <Logo />
            <Navigation />
            <ModeToggler />
        </header>
    );
};

export default navBar;
