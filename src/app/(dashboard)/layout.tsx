import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/*LEFT SIDEBAR*/}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link href="/" className="flex items-center lg:justify-start gap-2 p-4">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <span className="'hidden lg:block md:hidden text-black text font-bold">TECHSCHOOL</span>
        </Link>
        <Menu />
      </div>

      {/*RIGHT*/}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-bl-[#.F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
