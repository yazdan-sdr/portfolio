"use client";
import ModeToggler from "./mode-toggler";
import { Ghost, SquareX } from "lucide-react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { navButtons } from "./navigation";
import Link from "next/link";
import { useEffect, useState, startTransition } from "react";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        startTransition(() => {
            setOpen(false);
        });
    }, [pathname]);

    return (
        <div className="flex lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button className="bg-accent-light font-bold">
                        <Menu />
                    </Button>
                </SheetTrigger>
                <SheetContent
                    side="top"
                    className="bg-background [&>button]:hidden border-card border-b-8 rounded-b-4xl">
                    <div className="flex justify-center items-center">
                        <div className="flex mt-10 justify-between items-center gap-30">
                            <SheetHeader>
                                <SheetTitle className="text-2xl w-30 text-muted-foreground">
                                    LOGHO
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex justify-center items-center gap-5">
                                <ModeToggler />
                                <SheetClose>
                                    <SquareX
                                        className="text-muted-foreground"
                                        size={35}></SquareX>
                                </SheetClose>
                            </div>
                        </div>
                    </div>
                    <div className="flex felx-col justify-center items-center">
                        <div className="flex my-10 flex-col gap-8 w-fit">
                            {navButtons.map((navbutton) => (
                                <Button
                                    asChild
                                    key={navbutton.id}
                                    className="bg-card text-muted-foreground p-5 text-xl">
                                    <Link className="" href={navbutton.address}>
                                        {navbutton.name}
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default MobileMenu;
