import header from "@/components/shared/header/header";

export const metadata = {
    title: "Home",
};

const Homepage = () => {
    return <div className="flex items-center justify-center">{header()}</div>;
};

export default Homepage;
