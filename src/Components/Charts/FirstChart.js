// import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { FaCaretDown } from "react-icons/fa";
import "./FirstChart.css";

// const data = [
//   { name: 1, amt: 2400 },
//   { name: 2, amt: 2210 },
//   { name: 3, amt: 2290 },
//   { name: 4, amt: 2000 },
//   { name: 5, amt: 2181 },
//   { name: 6, amt: 2500 },
//   { name: 7, amt: 2100 },
// ];

// class Example extends PureComponent {
//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
//         >
//           <CartesianGrid
//             stroke="#8884d8"
//             vertical={false} // Remove vertical lines
//           />
//           <XAxis dataKey="name" tick={{ fill: "#fff" }} />
//           <YAxis
//             tickFormatter={(tick) => `${tick / 1000}k`} // Format the Y-axis ticks
//             ticks={[0, 5000, 10000, 15000]} // Custom Y-axis ticks
//             domain={[0, "dataMax"]} // Set domain to fit the data
//             stroke="#fff" // Color for Y-axis line
//             tickLine={{ stroke: "#fff" }} // Color for Y-axis ticks
//           />
//           <Tooltip />
//           <Bar dataKey="amt" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }

// function FirstChart() {
//   return (
//     <div className="firstchart-container">
//       <div className="firstchart-header">
//         <div>Activity</div>
//         <div>
//           <input type="text" value="Weekly" readOnly />
//           <FaCaretDown />
//         </div>
//       </div>
//       <div className="chart-container">
//         <Example />
//       </div>
//     </div>
//   );
// }

// export default FirstChart;
// import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     date: "2000-01",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     date: "2000-02",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     date: "2000-03",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     date: "2000-04",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     date: "2000-05",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     date: "2000-06",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     date: "2000-07",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
//   {
//     date: "2000-08",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     date: "2000-09",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     date: "2000-10",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     date: "2000-11",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     date: "2000-12",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
// ];

// const monthTickFormatter = (tick) => {
//   const date = new Date(tick);

//   return date.getMonth() + 1;
// };

// const renderQuarterTick = (tickProps) => {
//   const { x, y, payload } = tickProps;
//   const { value, offset } = payload;
//   const date = new Date(value);
//   const month = date.getMonth();
//   const quarterNo = Math.floor(month / 3) + 1;
//   const isMidMonth = month % 3 === 1;

//   if (month % 3 === 1) {
//     return <text x={x} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
//   }

//   const isLast = month === 11;

//   if (month % 3 === 0 || isLast) {
//     const pathX = Math.floor(isLast ? x + offset : x - offset) + 0.5;

//     return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
//   }
//   return null;
// };
// class Example extends PureComponent {
//   static demoUrl =
//     "https://codesandbox.io/p/sandbox/bar-chart-with-double-xaxis-zly7wl";

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
//           <XAxis
//             dataKey="date"
//             axisLine={false}
//             tickLine={false}
//             interval={0}
//             tick={renderQuarterTick}
//             height={1}
//             scale="band"
//             xAxisId="quarter"
//           />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="pv" fill="#8884d8" />
//           <Bar dataKey="uv" fill="#8884d8" />
//         </BarChart>
//       </ResponsiveContainer>
//     );
//   }
// }

// function FirstChart() {
//   return (
//     <div className="firstchart-container">
//       <div className="firstchart-header">
//         <div>Activity</div>
//         <div>
//           <input type="text" value="Weekly" readOnly />
//           <FaCaretDown />
//         </div>
//       </div>
//       <div className="chart-container">
//         <Example />
//       </div>
//     </div>
//   );
// }

// export default FirstChart;

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FaCaretDown } from "react-icons/fa";

// Updated data with specified values and peaks
const data = [
  { date: "5", uv: 4000, pv: 2400, amt: 2400 },
  { date: "7", uv: 3000, pv: 1398, amt: 2210 },
  { date: "9", uv: 2000, pv: 9800, amt: 2290 },
  { date: "11", uv: 2780, pv: 3908, amt: 2000 },
  { date: "13", uv: 1890, pv: 4800, amt: 2181 },
  { date: "15", uv: 2390, pv: 3800, amt: 2500 },
  { date: "17", uv: 3490, pv: 4300, amt: 2100 },
  { date: "19", uv: 4000, pv: 2400, amt: 2400 }, // Peak level
  { date: "21", uv: 3000, pv: 1398, amt: 2210 }, // Peak level
  { date: "23", uv: 2000, pv: 9800, amt: 2290 }, // Peak level
  { date: "25", uv: 2780, pv: 3908, amt: 2000 },
];

// Custom tick formatter for X axis
const monthTickFormatter = (tick) => tick;

// Y-axis tick formatting
const formatYAxisTick = (value) => {
  if (value === 0) return "0";
  if (value === 5000) return "5k";
  if (value === 10000) return "10k";
  if (value === 15000) return "15k";
  return value;
};

class Example extends PureComponent {
  static demoUrl =
    "https://codesandbox.io/p/sandbox/bar-chart-with-double-xaxis-zly7wl";

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
          <YAxis
            ticks={[0, 5000, 10000, 15000]}
            domain={[0, 15000]}
            tickFormatter={formatYAxisTick}
          />
          <Tooltip />
          <Bar dataKey="pv" fill="#8884d8" radius={[10, 10, 0, 0]} />
          <Bar dataKey="uv" fill="#8884d8" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

function FirstChart() {
  return (
    <div className="firstchart-container">
      <div className="firstchart-header">
        <div>Activity</div>
        <div>
          <input type="text" value="Weekly" readOnly />
          <FaCaretDown />
        </div>
      </div>
      <div className="chart-container">
        <Example />
      </div>
    </div>
  );
}

export default FirstChart;
