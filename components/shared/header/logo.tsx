import Link from "next/link";

const logo = () => {
    return (
        <div className="flex md:flex-1 justify-start">
            <Link className="flex items-center" href="/">
                {/*<Image
                    src="/images/mainLogo(temp).svg"
                    alt="main logo"
                    width={48}
                    height={48}
                />*/}
                <p className="font-bold px-2.5 rounded-full text-5xl text-[#2E5F8A] bg-[#2E5F8A]">
                    Y
                </p>
            </Link>
        </div>
    );
};

export default logo;
