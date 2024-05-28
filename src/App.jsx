import { useRef, useState } from "react";
import Carousel from "./Carousel";

const App = () => {
  const carouselData = useRef([
    {
      title: "item 1",
      color: "rgb(241, 181, 76)",
    },
    {
      title: "item 2",
      color: "rgb(226, 110, 184)",
    },
    {
      title: "item 3",
      color: "rgb(121, 181, 240)",
    },
  ]);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <div className="h-screen bg-indigo-500 grid place-items-center">
      <Carousel
        activeItemIndex={activeItemIndex}
        setActiveItemIndex={setActiveItemIndex}
        carouselData={carouselData.current}
      />
    </div>
  );
};
export default App;
