import Image from "next/image";

const careerOverview = () => {
    return (
        <div className="flex flex-col items-center w-full mt-53">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-15">
                Career & Personal Overview
            </h2>
            <div className="px-15 border-4 border-accent-light max-w-7xl mx-auto py-16 mt-12 grid grid-cols-1 lg:grid-cols-2 items-center  rounded-4xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex px-10 flex-col justify-evenly bg-background border-4 border-accent-light p-4 rounded-4xl h-44">
                        <h2 className="font-bold text-2xl md:text-2xl text-accent-light">
                            Experiences
                        </h2>
                        <p className="text-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                        </p>
                    </div>

                    <div className="flex flex-col px-10 justify-evenly bg-accent-light p-4 rounded-4xl h-44">
                        <h2 className="font-bold text-2xl md:text-2xl text-background">
                            Projects
                        </h2>
                        <p className="text-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>

                    <div className="flex flex-col px-10 justify-evenly bg-accent-light p-4 rounded-4xl h-44 w-full sm:col-span-2">
                        <h2 className="font-bold text-2xl md:text-2xl text-background">
                            Education
                        </h2>
                        <p className="text-foreground">
                            Lorem ipsum dolor sit amet consectetur Blanditiis,
                            porro. lorem29 Lorem ipsum dolor sit amet,
                            consectetur adip
                        </p>
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                    <Image
                        src="/images/tony.jpg"
                        width={400}
                        height={400}
                        priority={true}
                        alt="picture"
                        title="picture"
                        className="w-full max-w-sm h-auto object-cover rounded-4xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default careerOverview;
