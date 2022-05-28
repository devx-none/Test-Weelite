import React from "react";
import { Layout } from "../Layout";
import Image from "next/image";

export const Footer = () => {
  return (
   
      <div class="bg-zinc-300 text-center lg:text-left  text-gray-900">
        {/* <div class="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        <div class="mr-12 hidden lg:block">
          <span>My Log Travels</span>
        </div>
      </div> */}
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid grid-1 md:justify-items-center md:grid-cols-3   md:justify-center lg:grid-cols-5 gap-8 md:gap-6">
            <div class="flex space-x-8">
              <h6
                class="
            uppercase
            font-bold
            ml-5
            items-center
            justify-center
            md:justify-start
            text-5xl
          "
              >
                My Log Travels
              </h6>
            </div>
            <div class="">
              <h6 class=" font-semibold mb-4 flex justify-center md:justify-start">
                Quik Links
              </h6>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Home
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  About Us
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  My Travel Logs
                </a>
              </p>
            </div>
            <div class="py-8">
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Travels
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Promo Flights
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Recommendations{" "}
                </a>
              </p>
            </div>
            <div class="py-8">
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Travels
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Guides
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Blogs
                </a>
              </p>
            </div>
            <div class="py-8">
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Travels
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Guides
                </a>
              </p>
              <p class="mb-4">
                <a href="#!" class="text-gray-600">
                  Blogs
                </a>
              </p>
            </div>
          </div>
          <div class="text-center p-6 ">
            <span>2021-2022 My Log Travels. All rights reserved.</span>
          </div>
        </div>
      </div>
  
  );
};
