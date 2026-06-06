import clsx from "clsx";
import Image from "next/image";
const description = () => {
    return (
        <div
            className={clsx([
                "flex",
                "flex-col",
                "lg:gap-x-20",
                "justify-center",
                "items-center",
                "gap-y-20",
            ])}>
            <div className="w-full">
                <Image
                    src="/images/tony.jpg"
                    width={300}
                    height={400}
                    priority={true}
                    alt="picture"
                    title="picture"
                    className="w-full max-w-sm h-auto object-cover rounded-4xl"
                />
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                    accusamus laborum dolores culpa aspernatur omnis voluptatem
                    esse facere. Nobis, magnam aut possimus provident cumque quo
                    inventore, veniam consequuntur aliquid temporibus officiis
                    est, tenetur cupiditate in omnis iste porro voluptate ab.
                    Corrupti ex minima velit consequuntur ducimus maiores animi
                    quasi, doloremque laboriosam optio, incidunt molestiae
                    beatae? Quo doloribus, rem officia magni amet tempora
                    exercitationem modi, laborum adipisci aspernatur suscipit,
                    dolores mollitia. Vitae eveniet pariatur, qui voluptas
                    deleniti libero natus nemo accusamus veritatis accusantium
                </p>
            </div>
        </div>
    );
};

export default description;
