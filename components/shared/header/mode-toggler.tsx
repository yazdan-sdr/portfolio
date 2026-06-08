"Use client";
import { Sun } from "lucide-react";
import Link from "next/link";

//import Image from "next/image";

const ModeToggler = () => {
    return (
        <div>
            <Link href="">
                <Sun className="text-muted-foreground" size={35}></Sun>
            </Link>
        </div>
    );
};

export default ModeToggler;
