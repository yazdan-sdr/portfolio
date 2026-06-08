import clsx from "clsx";

const hero = () => {
    return (
        <div className="flex flex-col justify-center w-full">
            <div
                className={clsx(
                    "relative",
                    "w-full",
                    "min-h-screen",
                    "flex",
                    "flex-col",
                    "items-center",
                    "justify-center",
                )}>
                <h1
                    className={clsx(
                        "my-10",
                        "font-bold",
                        "text-3xl",
                        "md:text-4xl",
                        "lg:text-5xl",
                        "flex",
                        "flex-row",
                        "items-center",
                        "justify-center",
                    )}>
                    <span
                        className={clsx(
                            "bg-linear-to-r",
                            "from-primary",
                            "to-accent",
                            "bg-clip-text",
                            "text-transparent",
                        )}>
                        Front-End
                    </span>
                    <span className="text-primary">{"\u00a0"}Developer</span>
                </h1>
                <p
                    className={clsx(
                        "flex",
                        "text-center",
                        "justify-center",
                        "mx-10",
                        "text-foreground",
                    )}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque ipsa pariatur, cum velit eligendi, veritatis assumenda
                    consequatur at vel fugit impedit laboriosam dolores
                    voluptate a itaque repudiandae maxime voluptatum optio
                    sapiente quo rerum! Pariatur recusandae accusamus possimus
                    culpa dolorem accusantium
                </p>
            </div>
        </div>
    );
};

export default hero;
