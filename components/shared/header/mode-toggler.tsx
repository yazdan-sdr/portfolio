"use client";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { useEffect } from "react";

//import Image from "next/image";

const ModeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <div className="size-10 rounded-xl">
            <Button
                className="size-full text-xl relative p-7 hover:cursor-pointer"
                variant="ghost"
                size="lg"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "dark" ? (
                    <Sun className="text-primary text-4xl font-bold size-7" />
                ) : (
                    <Moon className="text-primary text-4xl font-bold size-7" />
                )}
            </Button>
        </div>
    );
};

export default ModeToggler;
