"use client";
import Image from "next/image";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Rectangle,
} from "recharts";

const data = [
  {
    name: "Mon",
    Present: 60,
    Absent: 20,
  },
  {
    name: "Tue",
    Present: 75,
    Absent: 25,
  },
  {
    name: "Wed",
    Present: 80,
    Absent: 15,
  },
  {
    name: "Thu",
    Present: 100,
    Absent: 30,
  },
  {
    name: "Fri",
    Present: 92,
    Absent: 20,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white m-2 rounded-xl p-4 mt-5 h-full">
      <div className="flex justify-between items-center ">
        {/*TITLE*/}
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="w-[100%] h-[90%]">
        {/*BARCHART*/}
        <ResponsiveContainer>
          <BarChart
            width={500}
            barSize={30}
            height={300}
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              color="#d1d5db"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tick={{ fill: "#d1d5db" }}
              tickLine={false}
            />
            <YAxis axisLine={false} />
            <Tooltip
              contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
            />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
              dataKey="Present"
              radius={[10, 10, 0, 0]}
              legendType="circle"
              fill="#FAE27C"
              activeBar={<Rectangle fill="#cfa700" stroke="techSky" />}
            />
            <Bar
              dataKey="Absent"
              radius={[10, 10, 0, 0]}
              legendType="circle"
              fill="#C3EBFA"
              activeBar={<Rectangle fill="#4fcfff" stroke="white" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AttendanceChart;
