"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
            We care about your luggage
        </h1>

        <p className="hero__subtitle">
            We design the bag perfectly and have an element of beauty,
            and have durable materials with neat stitches
        </p>

        <CustomButton
            title="Explore Now"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
        />
      </div>
    </div>
  );
};

export default Hero;
