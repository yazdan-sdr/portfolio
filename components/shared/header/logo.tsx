import Link from "next/link";
import Image from "next/image";

export const LogoName = () => (
    <p className="font-bold pb-1 text-xl text-primary">YAZDAN</p>
);

const Logo = () => {
    return (
        <div className="flex justify-center items-center w-15">
            <Link className="flex items-center" href="/">
                <Image
                    src="/images/logopng2.png"
                    alt="main logo"
                    width={60}
                    height={60}
                />
            </Link>
        </div>
    );
};

export default Logo;
