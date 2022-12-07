import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <header>Header Dashboard</header>
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <footer>Footer Dashboard</footer>
    </>
  );
};

export default Dashboard;
