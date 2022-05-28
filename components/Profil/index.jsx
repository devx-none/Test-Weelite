import React from "react";
import { Layout } from "../Layout";
import Image from "next/image";

export const Profile = ({ title, text }) => {
  return (
    <div className="flex flex-col items-center text-center border border-2 border-solid border-black rounded-md p-20">
      <div className="w-40">
        <Image
          src="/assets/images/profil.png"
          alt="hero"
          width="50"
          height="50"
          layout="responsive"
          className="object-cover"
        />
      </div>
      <div>
        <h1 className="font-bold">{title} </h1>
        <p className="w-full">{text} </p>
      </div>
    </div>
  );
};
