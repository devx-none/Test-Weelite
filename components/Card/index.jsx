import React from "react";
import { Layout } from "../Layout";
import Image from "next/image";

export const Card = ({ imageUrl, title, text }) => {
    return (
      
        
            <div className="" >
                <div className="w-full">
                <Image src={imageUrl} alt="hero" width="60" height="40" layout="responsive" className="object-cover" />
                </div>
                <div className="bg-black rounded-lg w-[45px] h-[3px] my-6">

                </div>
                <h1 className="font-bold"> {title} </h1> 
                <p className="w-full"> {text} </p>

            </div>
     
   
  );
};
