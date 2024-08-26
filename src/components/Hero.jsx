import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#000235] to-[#8d8ddf] flex items-center justify-center h-[calc(100vh-120px)] overflow-hidden">
      <div className="flex flex-col md:flex-row items-center max-w-full mx-auto w-full relative z-10">
        <div className="flex-1 flex flex-col items-center text-center md:text-left mb-20">
          <h1 className="text-6xl font-bold p-2 mb-6 text-white text-center">PlanItNow</h1>
          <p className="text-lg mb-10 text-white max-w-md text-center">
            Planning a night out has never been easier. Whether you're looking
            to discover the best local spots, organize an event, or simply list
            and RSVP to plans, Nightout Planner is your go-to app. Connect with
            friends, explore new places, and make every night out an adventure.
          </p>
          <a
          href="#"
          className="bg-gradient-to-t from-[#8d8ddf] to-white text-black inline-flex h-10 items-center justify-center rounded-full border border-input px-6 py-3 text-base font-medium shadow-lg transition-transform transform hover:from-[#8080d7] hover:to-white hover:scale-105 hover:bg-accent hover:text-accent-foreground"
        >
          START A PLAN
        </a>
        </div>
        <div className="flex-1 flex bottom-0 right-0 mr-[-10px] mb-20">
          <img
            src="/src/assets/heroicon.png"
            alt="Icon"
            className="object-contain w-full max-w-1200px] md:max-w-[1400px] lg:max-w-[1200px] xl:max-w-[1200px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
