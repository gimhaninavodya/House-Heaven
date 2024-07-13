import React from "react";
import "./Home-page.css";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <section className="hp-wrapper">
      <div className="innerWidth hp-container flexCenter">
        {/* left side */}
        <div className="flexColStart hp-left">
          <div div className="hp-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Explore <br />
              Your Future
              <br /> Residence
            </motion.h1>
          </div>

          <div className="flexColStart secondaryText flexhero-des">
            <span style={{fontSize:"17px"}}>Discover a wide range of properties effortlessly</span>
            <span style={{fontSize:"17px"}}>Simplify your search for the perfect place to live</span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={3700} end={4200} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText ">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={750} end={1250} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText ">Happy Customer</span>
            </div>
            <br />
            <br />
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hp-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./hmain1.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
