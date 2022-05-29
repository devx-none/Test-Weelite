import React, { useState, useEffect } from "react";
import { Layout } from "../Layout";
import Image from "next/image";

export const Contact = () => {

  const[firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      firstName,
      lastName,
      email,
      message,
    };
    //storage array data in local storage
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push(data);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
    setLoading(false);
  
  }

  return (
    <Layout>
      <div className="flex mt-20 mb-20 justify-between w-full ')">
        <div className="flex flex-col justify-between w-1/3">
          <div className="flex flex-col  justify-center items-center ">
            <h3 className="text-7xl font-bold  ">Be updated</h3>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              className="border border-2 border-solid border-black p-2 m-5  w-full"
              placeholder="First Name*"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              type="text"
              className="border border-2 border-solid border-black p-2 m-5  w-full "
              placeholder="Last Name*"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              type="text"
              className="border border-2 border-solid border-black p-2 m-5  w-full  "
              placeholder="Email Subject*"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              type="text"
              className="border border-2 border-solid border-black p-2 m-5  w-full  "
              placeholder="Write something here..."
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
            <div className="flex flex-col  w-full m-5 ">
              <button
                className="button-secondary  w-full "
                onClick={handleSubmit}
              >
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
