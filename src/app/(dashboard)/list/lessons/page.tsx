import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { lessonsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Lessons = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  name: string;
};
const columns = [
  {
    header: "Subject Name",
    accessor: "name",
    classNameL: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },

  {
    header: "Teacher",
    accessor: "teacher",
  },

  {
    header: "Actions",
    accessor: "action",
  },
];

const LessonPage = () => {
  const renderRow = (item: Lessons) => (
    <tr
      key={item.id}
      className="border-b border-gray-300 evenL bg-slate-50 text-sm hover:bg-techPurple"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
        </div>
      </td>

      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>

      <td className="">
        <div className="flex items-center gap-2">
          <Link href={"/list/teachers/${item.id}"}>
            <button className="w-7 h-7 flex items-center rounded-full justify-center bg-techSky">
              <Image src={"/edit.png"} alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center rounded-full justify-center bg-techPurple">
              <Image src={"/delete.png"} alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/*TOP*/}{" "}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Lessons</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-techYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-techYellow ">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === "admin" && (
              <button
                className="w-8 h-8 flex items-center justify-center rounded-full bg-techYellow
            "
              >
                <Image src="/plus.png" alt="" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/*PAGINATION*/}{" "}
      <Table columns={columns} renderRow={renderRow} data={lessonsData} />
      <Pagination />
    </div>
  );
};

export default LessonPage;
