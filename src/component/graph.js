import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



function Graph(props) {
    const data = props.data
    const tenData= data.slice(Math.max(data.length - 10, 0))
  return (
    <LineChart
      width={1000}
      height={300}
      data={tenData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="time" />
      <YAxis dataKey="valeur" />      
      <Line type="monotone" dataKey="valeur" stroke="#82ca9d" />
    </LineChart>
  );
}

export default Graph