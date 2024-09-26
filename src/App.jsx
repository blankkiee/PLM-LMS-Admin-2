import "./App.css";
import Dashboard from "./components/Dashboard";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import Search from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>

    // {/* <div> This is content</div> */}
  );
}

export default App;
