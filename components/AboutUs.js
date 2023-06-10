import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const AboutUs = ({
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
          <motion.div
            className="sm:grid-flow-col content-center md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                <strong>About Us</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Our mission is to offer comfortable and practical accommodation of the highest standard, ensuring that students feel at home while pursuing their academic goals. We believe in delivering exceptional value for money, ensuring that students receive excellent amenities and services without breaking the bank.
              </p>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
    </div>
    <div
    className="max-w-screen-xl mt-8 mb-0 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
    id="feature"
  >
    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
      <ScrollAnimationWrapper className="flex w-full justify-end">
        <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
          <Image
            src="/assets/Illustration3.png"
            alt="VPN Illustrasi"
            layout="responsive"
            quality={100}
            height={414}
            width={508}
          />
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
      <motion.div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1" variants={scrollAnimation}>
        <p className="my-2 text-black-500">
        <strong>Our Commitment to Comfort and Practicality</strong><br/><br/>We are committed to providing comfortable and practical accommodation of the highest standard while ensuring exceptional value for money. Each house is equipped with broadband facilities and a wireless connection, allowing seamless internet access for all residents. The bedrooms are thoughtfully decorated and furnished with essential amenities such as a desk, wardrobe, chest of drawers, and bed.<br/><br/><strong>Maintenance and Support at Your Fingertips</strong><br/><br/>Before you move in, we take care of any necessary repairs to ensure the contents and building are in optimal condition. Throughout your stay, our team is just a phone call away and readily available to address any maintenance concerns promptly and efficiently.</p>
      </motion.div>
      </ScrollAnimationWrapper>
    </div>
    <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
      <ScrollAnimationWrapper>
      <motion.div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1" variants={scrollAnimation}>
        <p className="my-2 text-black-500">
        <strong>Modern Amenities for a Convenient Living Experience</strong><br/><br/>All our houses feature central heating with modern high-efficiency gas boilers, providing comfortable warmth during colder months. Our properties are well-insulated, including fully insulated lofts and thermostatically controlled radiators throughout, ensuring energy efficiency and a cozy environment.<br/><br/><strong>Safety and Compliance as Top Priorities</strong><br/><br/>Rest assured that all our properties are registered with Northampton Council as Houses in Multiple Occupation (HMO) and equipped with the necessary safety equipment. Our gas and electrical systems adhere to the latest standards and have been certified by qualified technicians, guaranteeing compliance and peace of mind.<br/><br/><strong>University-Approved Properties</strong><br/><br/>We are proud to announce that all our properties have been approved by Northampton University, assuring students that they meet the university's high standards for student accommodation. Choose Afforable Space for an exceptional living experience that combines comfort, practicality, and university-endorsed quality.</p>
      </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper className="flex w-full justify-end">
        <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
          <Image
            src="/assets/Illustration4.png"
            alt="VPN Illustrasi"
            layout="responsive"
            quality={100}
            height={414}
            width={508}
          />
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  </div>
    </>
  );
};

export default AboutUs;
