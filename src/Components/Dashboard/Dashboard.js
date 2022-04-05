import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("dataDashboard.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="dashboard">
      <div className="container-1">
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="investment" stroke="#8884d8" />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <XAxis dataKey="investment" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <div>
        <BarChart width={600} height={300} data={data}>
          <XAxis dataKey="month" stroke="#8884d8" />
          <YAxis />
          <Tooltip  />
          <Legend
           
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="investment" fill="#8884d8" barSize={30} />
          <Bar dataKey="revenue" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
