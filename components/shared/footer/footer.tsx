import social from "./social";
const footer = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-screen h-60"></div>
            <div>{social()}</div>
        </div>
    );
};

export default footer;
