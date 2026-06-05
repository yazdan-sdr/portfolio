const hero = () => {
    return (
        <div>
            <div
                className="
        bg-[url('/images/hero-dots.svg')]
        relative        
        w-full
        mx-auto
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        content-center ">
                <h1 className="my-10 font-bold text-2xl md:text-4xl lg:text-5xl">
                    <span
                        className="
                bg-linear-to-r
                from-muted-foreground
                to-primary
                bg-clip-text
                text-transparent">
                        Front-End
                    </span>{" "}
                    <span className="text-muted-foreground">Developer</span>
                </h1>
                <p className="flex text-center justify-center mx-40">
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
