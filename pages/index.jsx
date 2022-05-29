import React, { useEffect, useState } from "react";
import axios from "axios";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  Navbar,
  Hero,
  Footer,
  Contact,
  Card,
  Layout,
  Profile,
} from "../components";
import Image from "next/image";

const index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //map data  profils
  const profils = data.map((profil) => {
    return (
      <SwiperSlide>
        <Profile title={profil.name} text={profil.email} />{" "}
      </SwiperSlide>
    );
  });

  return (
    <>
      {" "}
      <header className="h-[100%]">
        <Navbar />
        <Hero />
      </header>
      <section className="text-center  bg-black text-white p-9 -4 w-full">
        <h2 className="font-bold text-5xl w-[450px] mx-auto p-4">
          {" "}
          Create a memory to remember
        </h2>
        <p className="w-[400px] mx-auto p-4">
          Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei
          usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          sus pendisse ultrices gravida.
        </p>
        <button className="button-primary border-white ">My Travel Logs</button>
      </section>
      <Layout>
        <section className=" grid grid-cols-3 gap-4 py-20 m-4">
          <Card
            imageUrl="/assets/images/Image1.png"
            title="Lorem ipsum
          dolor sit amet"
            text="Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. "
          />
          <Card
            imageUrl="/assets/images/Image2.png"
            title="Lorem ipsum
          dolor sit amet"
            text="Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. "
          />
          <Card
            imageUrl="/assets/images/Image3.png"
            title="Lorem ipsum
          dolor sit amet"
            text="Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. "
          />
        </section>
      </Layout>
      <section className="text-center  p-9 m-4 bg-[url('/assets/images/Objects2.png')] bg-no-repeat bg-right-bottom ">
        <div className="w-[30px] h-[30px] mx-auto">
          <Image
            src="/assets/images/airplane.png"
            alt="hero"
            width="5px"
            height="5px"
            layout="responsive"
          />
        </div>
        <h2 className="font-bold text-5xl w-[450px] mx-auto p-4">
          {" "}
          See places you’ve <span className="underline">never</span> been before
        </h2>
        <p className="w-[400px] mx-auto p-4">
          Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor
        </p>
      </section>
      <section className="">
        <Layout>
          <div className="flex  justify-between w-full mt-20 ">
            <div className="object-cover object-fit   w-1/2 w-full ">
              <Image
                src="/assets/images/Image5.png"
                alt="hero"
                width="564"
                height="776"
                layout="responsive"
              />
            </div>
            <div className="flex flex-col  w-1/2">
              <div className="pl-6">
                <div className="object-cover object-fit w-80 ">
                  <Image
                    src="/assets/images/Image6.png"
                    alt="hero"
                    width="418"
                    height="322"
                    layout="responsive"
                  />
                </div>

                <div className="flex py-20 space-x-5 m-5">
                  <div>
                    <h3 className="font-semibold text-2xl underline">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                      do ei
                    </h3>
                  </div>
                  <div className="">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip isicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </section>
      <section className="mt-20  w-full bg-[url('/assets/images/Objects3.png')] bg-no-repeat bg-left-bottom ">
        <div className=" flex justify-center items-center bg-black text-white ">
          <div className="  flex flex-col items-center w-1/2  py-[100px]">
            <div className="flex flex-col">
              <h6 className="text-5xl font-bold  ">
                Choose anywhere <br />
                you'd like to be
              </h6>
            </div>
            <div className="flex flex-col py-10">
              <h1 className="font-bold py-4">Lorem Ipsum dolor</h1>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in repre henderit in voluptate velit esse.
              </p>
            </div>
            <div className="flex flex-col ">
              <h1 className="font-bold py-4">Lorem Ipsum dolor</h1>
              <p className="w-[400px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                ei usmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in repre henderit in voluptate velit esse.
              </p>
            </div>
          </div>

          <div className="object-cover object-fit w-1/2 ">
            <Image
              src="/assets/images/Image1.png"
              alt="hero"
              width="660"
              height="419"
              layout="responsive"
            />
          </div>
        </div>
      </section>
      <section className="mt-20  w-full">
        <Layout>
          <div className="flex my-20  justify-between space-x-6 w-fulll ">
            <div className="flex flex-col justify-between w-full  ">
              <div className="flex flex-col ">
                <h6 className="text-7xl font-bold  ">
                  Lorem ipsum dolor sit amet consectetur
                </h6>
              </div>
              <div className="bg-black rounded-lg w-full h-[3px] "></div>
              <div className="flex justify-between px-10">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed
                  do ei usmod
                </p>

                <Image
                  src="/assets/images/plus.png"
                  alt="hero"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="bg-black rounded-lg w-full h-[3px] "></div>
              <div className="flex  justify-between px-10">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed
                  do ei usmod
                </p>
                <Image
                  src="/assets/images/plus.png"
                  alt="hero"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="bg-black rounded-lg w-full h-[3px] "></div>
              <div className="flex  justify-between px-10">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed
                  do ei usmod
                </p>
                <Image
                  src="/assets/images/plus.png"
                  alt="hero"
                  width="40px"
                  height="40px"
                />
              </div>
              <div className="bg-black rounded-lg w-full h-[3px] "></div>
            </div>
            <div className="object-cover object-fit w-full  w-1/3">
              <Image
                src="/assets/images/Image4.png"
                alt="hero"
                width="390"
                height="516"
                layout="responsive"
              />
            </div>
          </div>
        </Layout>
      </section>
      <section className="flex justify-center gap-4 py-20 m-4 bg-[url('/assets/images/Objects4.png')] bg-no-repeat			">
        <Layout>
          <div className="flex flex-col justify-center item-center  text-center  ">
            <h6 className="text-5xl font-bold  my-10 ">
              Here's what they have to say...
            </h6>
          </div>
          <div className="">
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              {profils}
            </Swiper>
          </div>
        </Layout>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default index;
