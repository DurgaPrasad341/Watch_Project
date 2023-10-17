
import React, { useState, useEffect } from 'react'; 
import bannerImage1 from "../Asserts/Images/images/banner-1.jpg";
import bannerImage2 from "../Asserts/Images/images/banner-2.jpg";
import bannerImage3 from "../Asserts/Images/images/banner-3.jpg";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <ol className="carousel-indicators" style={{listStyle:"none"}}>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={activeIndex === 0 ? 'active' : ''}></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className={activeIndex === 1 ? 'active' : ''}></li>
        <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className={activeIndex === 2 ? 'active' : ''}></li>
      </ol>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
          <img src={bannerImage1} className="d-block w-100" alt="Slide 1"/>
        </div>
        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
          <img src={bannerImage2} className="d-block w-100" alt="Slide 2"/>
        </div>
        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
          <img src={bannerImage3} className="d-block w-100" alt="Slide 3"/>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev" onClick={() => setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1))}>
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next" onClick={nextSlide}>
  <span className="carousel-control-next-icon" aria-hidden="true"></span>
  <span className="visually-hidden">Next</span>
      </a>

    </div>
  );
}

export default Carousel;



