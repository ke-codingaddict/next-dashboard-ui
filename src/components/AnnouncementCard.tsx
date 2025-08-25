import Image from "next/image";
import { title } from "process";

const announcements = [
  {
    id: 1,
    title: "Announcement 1",
    date: "2025-08-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Announcement 2",
    date: "2025-08-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Announcement 3",
    date: "2025-08-20",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const AnnouncementCard = () => {
  return (
    <div className="bg-white  rounded-md">
      <div className="flex justify-between items-center ">
        {/*TITLE*/}
        <h1 className="text-lg font-semibold p-2">Announcements</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4 pt-4">
        {announcements.map((announcement) => (
          <div
            className="odd:bg-techSkyLight even:bg-techPurpleLight p-2 rounded-md shadow-sm"
            key={announcement.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="flex font-bold items-center justify-between text-sm text-gray-400 mb-3">
                {announcement.title}
              </h1>
              <span className="text-gray-400 text-xs font-medium bg-white px-2 py-1 rounded-md">
                {announcement.date}
              </span>
            </div>
            <p className="mb-3">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementCard;
