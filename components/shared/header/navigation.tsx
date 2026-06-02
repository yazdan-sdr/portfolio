import { Button } from "@/components/ui/button";
import Link from "next/link";
const navigation = () => {
    return (
        <div className=" justify-between flex flex-row">
            <Button asChild variant="ghost">
                <Link href="">Projects</Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href="">About me</Link>
            </Button>
            <Button asChild variant="ghost">
                <Link href="">Contact</Link>
            </Button>
        </div>
    );
};

export default navigation;
