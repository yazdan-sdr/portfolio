import header from "@/components/shared/header/header";
import footer from "@/components/shared/footer/footer";

export const metadata = {
    title: "Home",
};

const Homepage = () => {
    return (
        <section className="flex items-center justify-center">
            <div className="">{header()}</div>
        </section>
    );
};

export default Homepage;
