import { useEffect } from "react";

const DashBoard = () => {
  useEffect(() => {
    document.title = "Dashboard | Gadget Heaven";
  }, []);
  return (
    <div>
      <h3>Dashboard section</h3>
    </div>
  );
};

export default DashBoard;
