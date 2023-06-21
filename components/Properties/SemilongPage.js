import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "../misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const features = [
  "A large lounge diner for relaxed socializing",
  "A modern kitchen equipped with a cooker, washing machine, microwave, and a large fridge-freezer",
  "Well-appointed shower rooms for convenience",
  "Good-sized bedrooms with double beds, locks on the doors, and TV points"
];


const ContactUs = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
        <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-1 sm:grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-0 sm:py-0"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                <strong>Semilong Road</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Welcome to our stunning property located on Semilong Road. This impressive six-bedroom terrace spans across four floors, offering ample space for comfortable student living. Semilong Road boasts a rich history, showcasing its distinctive Edwardian and Victorian heritage. Conveniently situated, our house is just a short walk away from the community post office and the Co-op supermarket.<br/><br/>It's approximately a 25-minute walk to Waterside or a quick two-minute stroll to the Uno bus stop on Barrack Road. Semilong is a highly sought-after student area, known for its close proximity to the town center (just a ten-minute walk) and a vibrant atmosphere fueled by a thriving student population. Experience the energetic and youthful ambiance that sets Semilong apart from other areas in Northampton.
              </p>
            </div>
            <div>
              <Carousel className="gap-8 py-0 sm:py-0 mt-20 mx-5">
                  <div>
                      <img src="/assets/PropertyImages/Semilong/1.jpg" alt="image1"/>
                  </div>
                  <div>
                    <img src="/assets/PropertyImages/Semilong/2.jpg" alt="image1"/>
                  </div>
                  <div>
                    <img src="/assets/PropertyImages/Semilong/3.jpg" alt="image1"/>
                  </div>
                  <div>
                    <img src="/assets/PropertyImages/Semilong/4.jpg" alt="image1"/>
                  </div>
                  <div>
                    <img src="/assets/PropertyImages/Semilong/5.jpg" alt="image1"/>
                  </div>
                  <div>
                    <img src="/assets/PropertyImages/Semilong/6.jpg" alt="image1"/>
                  </div>
                  <div>
                    <img src="/assets/PropertyImages/Semilong/7.jpg" alt="image1"/>
                  </div>
              </Carousel>
              </div>
            </div>
      </ScrollAnimationWrapper>
      <hr/>
      <div className="relative w-full flex">
        <div
          className="rounded-lg w-full grid grid-flow-row conent-center sm:grid-flow-row grid-cols-1 sm:grid-cols-2 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-0 divide-gray-100 bg-white-500 z-10 gap-10">
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src="/assets/roomIcon.png"className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    Rooms Available
                  </p>
                  <p className="text-lg text-black-500">1/6</p>
                </div>
              </div>
              <div className="flex mx-auto w-40 sm:w-auto content-center">
                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                  <img src="/assets/bathroomIcon.png"className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    Bathrooms
                  </p>
                  <p className="text-lg text-black-500">2</p>
                </div>
              </div>
       </div>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
      <hr/>
      
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 my-10 mx-10">
        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">House Features</h3>
        <ScrollAnimationWrapper>
        <div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <ul className="text-black-500 self-start list-inside">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
        </div>
        </ScrollAnimationWrapper>
      </div>
      <hr/>
      <div>
        <p>Map</p>
      </div>
     </div>
            
    </>
  );
};

export default ContactUs;
