import React from "react";
import Foundation from "../../layout/Foundation";
import "./stats.css"
import { BarChart, Bar } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function YearSummary() {
  return (
    <Foundation>
      <div style={{height: "100vh"}} className="row d-flex justify-content-center align-items-center">
      <div className="col-12 h-100 grid-layout">
    <div style={{backgroundColor: "#101116"}}><h2 className="text-light">Total Points</h2></div>
    <div style={{backgroundColor: "#101116"}}><h2 className="text-light">Highest Score</h2></div>
    <div style={{backgroundColor: "#101116"}}><h2 className="text-light">Lowest Scorre</h2></div>
    <div style={{backgroundColor: "#101116"}}><h2 className="text-light">Win Streak</h2></div>
    <div style={{backgroundColor: "#101116"}}><h2 className="text-light">Lose Streak</h2></div>
    <div style={{backgroundColor: "#101116"}}><h2 className="text-light">Trades</h2></div>
    <div style={{backgroundColor: "#101116"}}><h2 className="text-light">SEASONS</h2></div>
      </div>
    </div>
    </Foundation>
  );
}
