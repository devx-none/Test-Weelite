import React, { useEffect, useState } from "react";

import { Navbar, Footer, Contact, Layout } from "../components";

//get data from localStorage

const contact = () => {
  const [dataContact, setDataContact] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    const data = localStorage.getItem("contacts");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  };

  useEffect(() => {
    setDataContact(getData());
    setLoading(false);
  }, []);

  return (
    <>
      {" "}
      <header className="h-[100%]">
        <Navbar />
      </header>
      <Contact />
      <section>
        <Layout>
          <div className="flex flex-col m-20">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          First Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Last Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Message
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataContact.map((item, index) => (
                        <tr className="border-b" key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.firstName}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.lastName}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {item.message}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </section>
      <Footer />
    </>
  );
};

export default contact;
