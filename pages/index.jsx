import React from "react";
import { Navbar, Hero, Footer, Contact, Card } from "../components";
import Image from "next/image";

const index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="text-center bg-black text-white p-9 m-4">
        <h2 className="font-bold text-xl w-27 mx-auto p-4">
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
      <section className=" grid grid-cols-3 gap-4 p-9 m-4">
        <Card
          imageUrl="/assets/images/Image-hero.png"
          title="Lorem ipsum
          dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. "
        />
        <Card
          imageUrl="/assets/images/Image-hero.png"
          title="Lorem ipsum
          dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. "
        />
        <Card
          imageUrl="/assets/images/Image-hero.png"
          title="Lorem ipsum
          dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do ei usmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus pendisse ultrices gravida. "
        />
      </section>
      <section className="text-center  p-9 m-4">
      <div className="w-[60px] h-[60px] mx-auto">
          <Image
            src="/assets/images/airplane.png"
            alt="hero"
            width="10px"
            height="10px"
            layout="responsive"
          />
        </div>
        <h2 className="font-bold text-xl w-27 mx-auto p-4">
          {" "}
          See places you’ve never been before
        </h2>
        <p className="w-[400px] mx-auto p-4">
          Lorem Ipsum Dolor | Lorem Ipsum Dolor | Lorem Ipsum Dolor
        </p>
      </section>
      <Contact />
      <Footer />
    </>
  );
};

export default index;
