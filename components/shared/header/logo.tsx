import Image from "next/image";
import Link from "next/link";

const logo = () => {
    return (
        <div className="flex-start">
            <Link className="flex items-center" href="/">
                <Image
                    src="/images/mainLogo(temp).svg"
                    alt="main logo"
                    width={48}
                    height={48}
                />
            </Link>
        </div>
    );
};

export default logo;
