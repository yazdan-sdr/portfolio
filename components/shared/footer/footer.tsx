import social from "./social";

const thisYear = new Date().getFullYear();

const footer = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-50">
            <div className="flex justify-center items-center w-full h-60">
                <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
                    GET IN TOUCH
                </h2>
            </div>
            <div>{social()}</div>
            <div className="mt-10">
                <p>
                    Created by{" "}
                    <span className="font-bold text-primary">YAZDAN SADRI</span>
                    .{"\u00a0"}
                    {thisYear}
                </p>
            </div>
        </div>
    );
};

export default footer;
