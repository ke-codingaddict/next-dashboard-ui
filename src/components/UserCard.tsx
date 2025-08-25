import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-techPurple even:bg-techYellow  p-4 flex-1">
      <div className="flex flex-row justify-between items-center">
        <span className="flex flex-row justify-between items-center bg-white px-2 py-1 rounded-full text-[10px] text-green-600">
          2025/25
        </span>
        <Image
          src="/more.png"
          alt=""
          width={20}
          height={20}
          className="flex justify-between"
        />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,235</h1>
      <h2 className="text-gray-500 capitalize font-medium">{type}</h2>
    </div>
  );
};

export default UserCard;
0;
