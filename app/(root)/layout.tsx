import NavBar from "@/components/shared/header/navbar";
import Footer from "@/components/shared/footer/footer";
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex h-screen flex-col ">
            <NavBar />
            <main className="flex-1 wrapper">{children}</main>
            <Footer />
        </div>
    );
}
