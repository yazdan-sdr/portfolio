"Use client";

import { Sun } from "lucide-react";
import Link from "next/link";
//import Image from "next/image";

const modeToggler = () => {
    return (
        <div className="flex text-muted-foreground flex-1 justify-end">
            <Link href="">
                <Sun></Sun>
            </Link>
        </div>
    );
};

export default modeToggler;
