import Navbar from "@/extra/dashboard/Navbar";
import NoticeCard from "./notice/NoticeCard";

const DashboardHome = () => {
  return (
    <div>
      <Navbar />
      <NoticeCard notice="hello" />
      DashboardHome
    </div>
  );
};

export default DashboardHome;
