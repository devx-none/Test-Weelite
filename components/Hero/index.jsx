import React from "react";
import { Layout } from "../Layout";

export const Hero = () => {
  return (
    <Layout>
      <div className="flex justify-between w-full">
        <div className="text">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center">
              Welcome to Next.js!
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center">
              Welcome to Next.js!
            </h1>
          </div>
        </div>
        <div className="p-60 bg-red-800"></div>
      </div>
    </Layout>
  );
};
