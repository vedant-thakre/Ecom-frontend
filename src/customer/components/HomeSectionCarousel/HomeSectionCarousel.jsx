import React from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { mens_kurta } from "../../../Data/Mens_kurta";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4.5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomeSectionCarousel = ({data, sectionName}) => {

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5" >{sectionName}</h2>
      <div className="relative p-2">
        <Carousel responsive={responsive}>{items}</Carousel>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
