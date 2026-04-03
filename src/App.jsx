import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import ProgressBar from "./components/ProgressBar";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import RecentActivity from "./components/RecentActivity";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  const summaryData = [
    { title: "Internships Completed", value: 5, color: "bg-blue-500" },
    { title: "Courses Completed", value: 12, color: "bg-green-500" },
    { title: "Marks Obtained", value: "850/1000", color: "bg-indigo-500" },
    { title: "Student Ranking", value: "#23", color: "bg-purple-500" },
    { title: "College Ranking", value: "#5", color: "bg-pink-500" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar isOpen={isOpen} />

      <div className="flex-1 p-6 space-y-6">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {summaryData.map((item, index) => (
            <SummaryCard key={index} {...item} />
          ))}
        </div>

        <ProgressBar progress={70} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LineChart />
          <BarChart />
        </div>

        <RecentActivity />
      </div>
    </div>
  );
};

export default App;