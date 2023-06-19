import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "../misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

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
      className="max-w-screen-xl mt-24 px-0 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <div
            className="sm:grid-flow-col content-center md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16 px-8 xl:px-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                <strong>Semilong Road</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              We value your inquiries and feedback at Northampton Student House. Our dedicated team is here to assist you with any questions, concerns, or booking inquiries you may have. Whether you need more information about our student accommodation options, want to schedule a viewing, or require assistance during your stay, we are just a phone call or email away. Don't hesitate to reach out to us. We look forward to hearing from you and providing you with the exceptional service you deserve.
              </p>
            </div>
          </div>
      </ScrollAnimationWrapper>
  </div>
            
    </>
  );
};

export default ContactUs;
