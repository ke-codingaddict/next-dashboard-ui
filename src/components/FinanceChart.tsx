"use client";
import Image from "next/image";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

const data = [
  {
    name: "Jan",
    Income: 4000,
    Expense: 2400,
  },
  {
    name: "Feb",
    Income: 3000,
    Expense: 1398,
  },
  {
    name: "Mar",
    Income: 2000,
    Expense: 9800,
  },
  {
    name: "Apr",
    Income: 2780,
    Expense: 3908,
  },
  {
    name: "May",
    Income: 1890,
    Expense: 4800,
  },
  {
    name: "Jun",
    Income: 2390,
    Expense: 3800,
  },
  {
    name: "Jul",
    Income: 3490,
    Expense: 4300,
  },
  {
    name: "Aug",
    Income: 2000,
    Expense: 2400,
  },
  {
    name: "Sep",
    Income: 2780,
    Expense: 3908,
  },
  {
    name: "Oct",
    Income: 1890,
    Expense: 4800,
  },
  {
    name: "Nov",
    Income: 2390,
    Expense: 3800,
  },
  {
    name: "Dec",
    Income: 3490,
    Expense: 4300,
  },
];

const FinanceChart = () => {
  return (
    <div className="bg-white m-2 rounded-xl p-4 mt-10 h-full">
      <div className="flex justify-between items-center ">
        <h1 className="text-lg font-semibold">Finance Chart</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      {/*FINANCE CHART*/}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tickLine={false} tickMargin={10} tick={{fill:"#d1d5db"}} />
          <YAxis tickLine={false} tickMargin={30} tick={{fill:"#d1d5db"}}/>
          <Tooltip />
          <Legend
            verticalAlign="top"
            align="center"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Line
            type="monotone"
            dataKey="Expense"
            stroke="#fae27c"
            strokeWidth={7}
          />
          <Line
            type="monotone"
            dataKey="Income"
            stroke="#C3EBFA"
            strokeWidth={7}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
