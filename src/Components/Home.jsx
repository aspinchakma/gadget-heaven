import { useEffect } from "react";

const Home = () => {
  // add title
  useEffect(() => {
    document.title = "Home | Gadget Heaven";
  }, []);
  return (
    <div>
      <h2>This is HOme</h2>
    </div>
  );
};

export default Home;
