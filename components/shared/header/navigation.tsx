"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const navButtons = [
    {
        id: "1",
        name: "HOME",
        address: "/",
        onLarge: "lg:hidden",
    },
    {
        id: "2",
        name: "Projects",
        address: "/projects",
        onLarge: "",
    },
    {
        id: "3",
        name: "About me",
        address: "/aboutme",
        onLarge: "",
    },
    {
        id: "4",
        name: "Contact",
        address: "/contact",
        onLarge: "",
    },
];

const navigation = () => {
    return (
        <div className="lg:flex gap-6 hidden">
            {navButtons.map((navbutton) => (
                <Button
                    asChild
                    variant="ghost"
                    key={navbutton.id}
                    className={`${navbutton.onLarge}  p-5 text-lg`}>
                    <Link href={navbutton.address}>{navbutton.name}</Link>
                </Button>
            ))}

            {/*<Button asChild variant="ghost" className="">
                <Link href="">Projects</Link>
            </Button>
            <Button asChild variant="ghost" className="mx-7">
                <Link href="">About me</Link>
            </Button>
            <Button asChild variant="ghost" className="">
                <Link href="">Contact</Link>
            </Button>*/}
        </div>
    );
};

export default navigation;
