import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/*SearchBar*/}
      <div className="hidden md:flex">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="flex horizontal gap-4">
        <div className="bg-white rouded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className="bg-white rouded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="" width={20} height={20} />
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Dennis</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <div className="">
          <Image
            src={"/avatar.png"}
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
