import Image from "next/image";
import Link from "next/link";

const logo = () => {
    return (
        <div className="flex-1">
            <Link className="flex items-center" href="/">
                <Image
                    src="/images/mainLogo(temp).svg"
                    alt="main logo"
                    width={48}
                    height={48}
                />
                <p className="font-bold text-muted-foreground"> YAZDAN</p>
            </Link>
        </div>
    );
};

export default logo;
