"use client";
import ModeToggler from "./mode-toggler";
import { Ghost, SquareX } from "lucide-react";
import Logo, { LogoName } from "./logo";
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
                    <div className="size-11 p-1 hover:cursor-pointer">
                        <Menu className="text-4xl font-bold size-8 text-primary" />
                    </div>
                </SheetTrigger>
                <SheetContent
                    side="top"
                    className="bg-background [&>button]:hidden border-card border-b-8 rounded-b-4xl">
                    <div className="flex justify-center items-center">
                        <div className="flex mt-10 justify-between items-center gap-30">
                            <SheetHeader>
                                <SheetTitle className="text-2xl w-30 flex justify-center items-center">
                                    <Logo />
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex justify-center items-center gap-5">
                                <div className="mb-3.5 rounded-xl flex justify-center items-center size-12">
                                    <ModeToggler />
                                </div>
                                <SheetClose>
                                    <div className="rounded-xl flex justify-center items-center size-12">
                                        <SquareX
                                            className="text-primary"
                                            size={35}></SquareX>
                                    </div>
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
                                    className="p-5 text-xl">
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
