import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import "./Image.css";

const Slider = () => {
  const ImageData = [
    {
      link: "https://www.shutterstock.com/image-photo/light-beacon-calling-batman-600nw-2448836315.jpg",
    },
    {
      link: "https://t4.ftcdn.net/jpg/03/89/39/09/360_F_389390965_lwqVX10TBdFH2WMBH6GGF8pcNiOhzfnb.jpg",
    },
    {
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaCS69TX3psqxQNrCKHSQC-TVsQKVf8sG5jA&s",
    },
    {
      link: "https://i.guim.co.uk/img/media/c8c00617b792d1d53f2d2b318820d5758dc61551/231_0_2968_1782/master/2968.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b8c80905bc7264df9060efdc6f6a4aa1",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % ImageData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + ImageData.length) % ImageData.length
    );
  };

  return (
    <div className="container">
      <div className="image-container">
        {ImageData.map((item, index) => (
          <div
            key={index}
            className={`imagemap ${index === activeIndex ? "active" : ""}`}
          >
            <img src={item.link} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="left-right">
        <FaArrowCircleLeft onClick={handlePrev} className="left" />
        <FaArrowAltCircleRight onClick={handleNext} className="right" />
      </div>
    </div>
  );
};

export default Slider;
