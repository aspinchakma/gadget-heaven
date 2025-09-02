import { useEffect } from "react";

const Statistics = () => {
  useEffect(() => {
    document.title = "Statistics | Gadget Heaven";
  }, []);
  return (
    <div>
      <h3>This is statistics</h3>
    </div>
  );
};

export default Statistics;
