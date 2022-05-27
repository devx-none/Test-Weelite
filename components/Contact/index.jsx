import React from "react";
import { Layout } from "../Layout";
import Image from "next/image";

export const Contact = () => {
  return (
    <Layout>
      <div className="flex mt-20 mb-20 justify-between w-full bg-[url('../../public/assets/images/bg-hero.png')">
        <div className="flex flex-col justify-between w-1/3">
          <div className="flex flex-col  justify-center items-center ">
            <h3 className="text-7xl font-bold  ">Be updated</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="border border-2 border-solid border-black p-2 m-5  w-full"
              placeholder="First Name*"
            />
            <input
              type="text"
              className="border border-2 border-solid border-black p-2 m-5  w-full "
              placeholder="Last Name*"
            />
            <input
              type="text"
              className="border border-2 border-solid border-black p-2 m-5  w-full  "
              placeholder="Email Subject*"
            />
            <textarea
              type="text"
              className="border border-2 border-solid border-black p-2 m-5  w-full "
              placeholder="Write something here..."
            />
            <div className="flex flex-col  w-full m-5 ">
              <button className="button-secondary  w-full ">
                Submit Email
              </button>
            </div>
          </div>
        </div>
        <div className="object-cover object-fit h-full bg-green-600 w-1/2">
          <Image
            src="/assets/images/Image-hero.png"
            alt="hero"
            width="360"
            height="419"
            layout="responsive"
          />
        </div>
      </div>
    </Layout>
  );
};
