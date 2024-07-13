import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/commen";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const Residencies = () => {
  const { data, isError, isLoading } = useProperties();
  const navigate = useNavigate();

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <div
                className="flexColStart r-card"
                onClick={() => navigate(`../properties/${card.id}`)}
              >
                <Heart id={card?.id} />
                <div className="slideImg">
                <img  src={card.image} alt="home" /></div>

                <span className="secondaryText r-price">
                  <span style={{ color: "#625547" }}>$</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">
                  {truncate(card.title, { length: 15 })}
                </span>
                <span className="secondaryText">
                  {truncate(card.description, { length: 80 })}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <br/><br/>
      </div>
    </section>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
