"use client";
import AnnouncementCard from "@/components/AnnouncementCard";
import BigCalendar from "@/components/BigCalendar";

const TeacherPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row ml-2 mr-2 flex-1 ">
      <div className="w-full xl:w-2/3 ">
        <div className="h-full bg-white rounded-md p-4">
          <h1 className="font-semibold text-xl ">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      <div className="w-full xl:w-1/3 gap-4 flex flex-col">
        <AnnouncementCard />
      </div>
    </div>
  );
};

export default TeacherPage;
