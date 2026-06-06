import { Button } from "@/components/ui/button";
import Link from "next/link";

const navButtons = [
    {
        id: "1",
        name: "Projects",
        address: "",
    },
    {
        id: "2",
        name: "About me",
        address: "",
    },
    {
        id: "3",
        name: "Contact",
        address: "",
    },
];

const navigation = () => {
    return (
        <div className=" justify-between flex flex-row">
            {navButtons.map((navbutton) => (
                <Button
                    asChild
                    variant="ghost"
                    key={navbutton.id}
                    className="mx-3.5 text-muted-foreground">
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
