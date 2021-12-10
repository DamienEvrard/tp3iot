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
  return (
    <LineChart
      width={1000}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis dataKey="valeur" />      
      <Line type="monotone" dataKey="valeur" stroke="#82ca9d" />
    </LineChart>
  );
}

export default Graph