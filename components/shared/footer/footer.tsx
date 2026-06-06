import Social from "./social";
import clsx from "clsx";
const thisYear = new Date().getFullYear();

const footer = () => {
    return (
        <footer
            className={clsx([
                "from-background",
                "to-accent",
                "bg-accent",
                "mt-50",
                "flex",
                "w-screen",
                "flex-col",
                "items-center",
                "justify-center",
                "bg-linear-to-b",
            ])}>
            <div className="mt-20 mb-10 flex w-full items-center justify-center">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                    GET IN TOUCH
                </h2>
            </div>
            <div>
                <Social />
            </div>
            <div className="my-10">
                <p>
                    {"\u00a9"}
                    {thisYear}.{"\u00a0"}
                    Developed by{" "}
                    <span className="text-primary font-bold">YAZDAN SADRI</span>
                </p>
            </div>
        </footer>
    );
};

export default footer;
