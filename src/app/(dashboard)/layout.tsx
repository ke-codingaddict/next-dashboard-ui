import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import { Urbanist } from "next/font/google";
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
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="'hidden lg:block">TechSchool</span>
        </Link>
        <Menu />
      </div>

      {/*RIGHT*/}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-bl-[#.F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
