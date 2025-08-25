import AttendanceChart from "@/components/AttendanceChart";
import CalendarComp from "@/components/EventCalendar";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";
import Calendar from "react-calendar";
import AnnouncementCard from "@/components/AnnouncementCard";
import EventCalendar from "@/components/EventCalendar";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/*RIGHT*/}
      <div className="w-full lg:w-2/3 bg-gray-50">
        {/*USERCARD*/}
        <div className="flex gap-4 justify-between flex-wrap bg-gray-50">
          <UserCard type="Student" />
          <UserCard type="Teacher" />
          <UserCard type="Parents" />
          <UserCard type="Staff" />
        </div>

        <div className="flex gap-4 flex-col lg:flex-row mt-5">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        <div className="w-full h-[500px] bg-gray-50">
          <FinanceChart />
        </div>
      </div>
      {/*LEFT*/}
      <div className="w-full lg:w-1/3 bg-gray-50 h-full flex flex-col gap-4 ">
        <EventCalendar />
        <AnnouncementCard/>
      </div>
    </div>
  );
};

export default AdminPage;
