"use client";
import { time } from "console";
import Image from "next/image";
import { title } from "process";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
  {
    id: 1,
    title: "Event 1",
    time: "10:00 AM",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Event 2",
    time: "11:00 AM",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Event 3",
    time: "12:00 PM",
    decription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="w-full h-full bg-white rounded-md mr-10">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center pt-2 ">
        {/*TITLE*/}
        <h1 className="text-lg font-semibold">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>

      <div className="flex flex-col gap-4 pt-4">
        {events.map((event) => (
          <div
            className="border-t-4 odd:border-techSky hover:border-techPurple even:border-techYellow bg-white  p-2 rounded-md shadow-sm"
            key={event.id}
          >
            <div className=" flex font-bold items-center justify-between">
              <h1 className="text-sm text-gray-400">{event.title}</h1>
              <span className="text-xs text-gray-400 font-medium">
                {event.time}
              </span>
            </div>

            <p>{event.decription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
