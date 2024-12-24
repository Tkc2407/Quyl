import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import "./output.css";

const App = () => {
  return (
    <div className="flex h-auto bg-gray-100">
      {/* Sidebar Section */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="flex-1 bg-white m-4 rounded-lg shadow p-4 overflow-y-auto">
          <StudentTable />
        </div>
      </div>
    </div>
  );
};

export default App;
