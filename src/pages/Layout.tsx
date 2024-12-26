import { Outlet } from "react-router-dom";
import DashboardNav from "../components/dashboardNav/DashboardNav";
import DashboardSidebar from "../components/dashboardSidebar/DashboardSidebar";
import { Toaster } from "react-hot-toast";

const DashBoardLayout = () => {
  return (
    <>
      <DashboardNav />
      <Toaster/>
      <div className="overflow-height flex items-start justify-between overflow-hidden">
        <div className="overflow-height w-15 lg:w-1/5 bg-primary text-white p-1 lg:p-5">
          <DashboardSidebar />
        </div>
        <div className="overflow-height w-full lg:w-4/5 overflow-y-scroll bg-white    ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashBoardLayout;
