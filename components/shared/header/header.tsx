import { Button } from "@/components/ui/button";
//import Link from "next/link";
import navigation from "./navigation";
import logo from "./logo";
import modeToggler from "./mode-toggler";
import hero from "./hero";

const header = () => {
    return (
        <section className="w-full flex flex-col items-center">
            <div className="w-screen flex flex-row flex-start justify-evenly mb-6">
                <div>{logo()}</div>
                <div className="">{navigation()}</div>
                <div>{modeToggler()}</div>
            </div>
            <div className="flex flex-col justify-center">{hero()}</div>
        </section>
    );
};

export default header;
