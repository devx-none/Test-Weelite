import React from "react";
import { Layout } from "../Layout";
import Image from "next/image";

export const Hero = () => {
  return (
    <Layout>
      <div className="flex mt-20 justify-between w-full bg-[url('../../public/assets/images/bg-hero.png')">
        <div className="flex flex-col justify-between w-1/3">
          <div className="flex flex-col  justify-center items-center ">
            <h6 className="text-7xl font-bold  ">
              Travel to <br />
              your dream destination
            </h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum sus pendisse ultrices gravida.
            </p>
          </div>
          <div className="flex flex-col  ">
            <button className="button-secondary">Reserve Ticket</button>
          </div>
        </div>
        <div className="object-cover object-fit h-full bg-green-600 w-1/2">
          <Image
            src="/assets/images/Image-hero.png"
            alt="hero"
            width="660"
            height="419"
            layout="responsive"
          />
        </div>
      </div>
    </Layout>
  );
};
