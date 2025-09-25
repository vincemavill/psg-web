import React, { useState, useEffect } from "react";
import Navigation from "./../components/Navigation";
import Banner from "./../components/Banner";
import Footer from "./../components/Footer";
import image1 from "./../assets/Images/about/About PGS .jpg";
import image2 from "./../assets/Images/about/pgs history.jpg";
import image3 from "./../assets/Images/about/Numbers.jpg";
import image4 from "./../assets/Images/about/proj management.png";
import line from "./../assets/Images/about/linedevider.svg";
export default function App() {
  const [current_tab, setCurrentTab] = useState(0);
  const tabs = [
    {
      name: "QUALITY POLICY",
      p: `We are committed to providing customers with service of thehighest possible level of quality. In order to achieve this, weare continually improving our processes, products and services,
              meeting and exceeding customer satisfaction at all times. The
              implementation of the quality policy is the responsibility of all
              staff members, with overall responsibility residing with the Board
              of Director. It is compulsory that all staff recognize and accept
              our philosophy of quality service delivery, accepting
              accountability for their own output.`,
    },
    {
      name: "QUALITY OBJECTIVE",
      p: `test 2`,
    },
    {
      name: "IMPLEMENTATION",
      p: `test 3`,
    },
  ];
  return (
    <>
      <Navigation />
      <Banner label={"ABOUT US"} quote={'"Any Size, Any Voltage, Any OEM"'} />
      <div className="min-h-[500px]">
        <div className="mx-auto max-w-7xl px-10 lg:px-8">
          <div className="py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto text-center ">
              <p className="text-base sm:text-lg text-gray-800 font-semibold leading-relaxed font-poppins">
                Our Core Business is Generator, Testing, Analysis, Repair &
                Rewind
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold  tracking-tight leading-tight font-poppins">
                “ Turbo, Hydro, Diesel & Wind ”
              </p>
              <p className="text-base sm:text-lg text-gray-800 font-semibold leading-relaxed font-poppins">
                Also Experts in Medium and High Voltage Electric Motors
              </p>
              <p className="text-lg sm:text-xl  font-bold italic leading-relaxed font-poppins">
                “PGS can meet or exceed any OEM Specification”
              </p>
              <p className="text-3xl sm:text-4xl font-extrabold text-color-red tracking-wider leading-snug  font-lemon my-4">
                “ANY SIZE, ANY VOLTAGE, ANY OEM”
              </p>
              <p className="text-sm sm:text-base  font-semibold leading-relaxed  font-poppins">
                Provision for Maintenance and Engineering Services for the
                Testing, Inspection, Evaluation,
                <br className="hidden sm:inline" /> Analysis, Maintenance Repair and
                Rewinding of Generators and Motors including Removal,
                <br /> Installation, Alignment with Project Management and
                Consultation
              </p>
            </div>
          </div>
          {/* ---------------------------------- */}
          <div className="grid grid-cols-2  py-5 w-full content-center ">
            <div className="col-span-2 lg:col-span-1  flex ">
              <div className="space-y-8   py-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-8   font-lemon">
                  ABOUT PGS
                </h2>
                <p className=" font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className=" font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className=" py-10">
                <img
                  alt="Your Company"
                  src={image1}
                  className="w-[350px] lg:w-[400px] h-auto mx-auto"
                />
              </div>
            </div>
          </div>
          {/* ---------------------------------- */}
          <div className="py-5">
            <div className="flex flex-row">
              {tabs.map((item, index) => (
                <div
                  className={`text-lg  tracking-wider  font-lemon  ${
                    index === current_tab
                      ? "bg-color-red text-white"
                      : "bg-gray-100 text-color-red"
                  } p-6 rounded-t-2xl cursor-pointer`}
                  key={index}
                  onClick={() => {
                    setCurrentTab(index);
                  }}
                >
                  {item.name}
                </div>
              ))}
            </div>
            <div className="bg-gray-100  rounded-b-2xl rounded-tr-2xl p-10">
              <p className=" text-sm font-medium leading-relaxed text-center font-poppins">
                {tabs[current_tab].p}
              </p>
            </div>
          </div>
          {/* ---------------------------------- */}
        </div>
        <div className="bg-color-dark">
          <div className="mx-auto max-w-7xl px-10 lg:px-8 ">
            <div className="grid grid-cols-2  py-10 w-full content-center ">
              <div className="col-span-2 lg:col-span-2  flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white   font-poppins">
                  HEALTH, SAFETY AND ENVIRONMENT
                </h2>
              </div>
              <div className="col-span-2 lg:col-span-1  flex items-center justify-center">
                <div className="space-y-4  items-center justify-center py-10">
                  <h2 className="text-xl font-bold text-color-red   font-lemon">
                    OUR COMMITMENT
                  </h2>
                  <p className="text-white font-poppins text-sm font-medium leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1  flex items-center justify-center">
                <div className="space-y-4  items-center justify-center py-10">
                  <h2 className="text-xl font-bold text-color-red   font-lemon">
                    OUR EXPECTATIONS
                  </h2>
                  <p className="text-white font-poppins text-sm font-medium leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className="mx-auto max-w-7xl px-10 lg:px-8">
          <div className="grid grid-cols-3 gap-10 py-5 w-full content-center ">
            <div className="col-span-3 lg:col-span-1 ">
              <div className=" py-10">
                <img
                  alt="Your Company"
                  src={image4}
                  className="w-[350px] lg:w-[400px] h-auto mx-auto"
                />
              </div>
            </div>
            <div className="col-span-3 lg:col-span-2  flex ">
              <div className="space-y-4   py-10">
                <h2 className="text-2xl font-bold text-gray-800   font-lemon">
                  PROJECT MANAGEMENT
                </h2>
                <p className="text-base  leading-relaxed font-poppins">
                  A Project is any job with a defined start and finish date,
                </p>
                <p className="text-xl sm:text-2xl font-semibold text-red-600 italic leading-relaxed font-poppins">
                  “Every Repair, Rehabilitation or Outage is a Project”
                </p>
                <p className="text-base  leading-relaxed font-poppins">
                  Our PM Dept.’s Goal is to assist our Customer’s in managing
                  the Triple Constraint of Project Management. We can perform
                  this by ensuring the project is on time and at a level of
                  expected quality. Notify our client of Risk Levels and
                  immediate notification of slippage.
                </p>
                <p className="text-xl sm:text-2xl font-semibold text-red-600 italic leading-relaxed font-poppins">
                  Your Project may be an Outage, Generator Rehab.or a Critical
                  Motor Repair.
                </p>
              </div>
            </div>
          </div>
          {/* ---------------------------------- */}
          <div className="grid grid-cols-2 gap-10 py-5 w-full content-center border rounded-3xl mb-10">
            <div className="col-span-2 lg:col-span-1  flex items-center justify-center">
              <h2 className="text-4xl font-bold text-color-red   font-lemon">
                PGS IN NUMBERS
              </h2>
            </div>
            <div className="col-span-2 lg:col-span-1 ">
              <img
                alt="Your Company"
                src={image3}
                className="w-[400px] lg:w-[500px] h-auto mx-auto"
              />
            </div>
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className="about-banner">
          <div className="mx-auto max-w-7xl px-10 lg:px-8 ">
            <div className="grid grid-cols-3 gap-5 py-10 w-full content-center ">
              <div className="col-span-3 lg:col-span-3  ">
                <h2 className="text-3xl font-bold text-white mb-5 text-center font-poppins">
                  PGS HISTORY
                </h2>
                <img
                  alt="Your Company"
                  src={line}
                  className="w-[800px] h-auto mx-auto"
                />
              </div>
              <div className="col-span-3 lg:col-span-1  flex items-center justify-center">
                <div className="space-y-4  items-center justify-center py-5">
                  <h2 className="text-xl font-bold text-white text-center  font-lemon">
                    3Q-2010
                  </h2>
                  <p className="text-white font-poppins text-sm text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1  flex items-center justify-center">
                <div className="space-y-4  items-center justify-center py-5">
                  <h2 className="text-xl font-bold text-white text-center  font-lemon">
                    3Q-2010
                  </h2>
                  <p className="text-white font-poppins text-sm text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1  flex items-center justify-center">
                <div className="space-y-4  items-center justify-center py-5">
                  <h2 className="text-xl font-bold text-white text-center  font-lemon">
                    3Q-2010
                  </h2>
                  <p className="text-white font-poppins text-sm text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ---------------------------------- */}
        <div className="mx-auto max-w-7xl px-10 lg:px-8">
          <div className="grid grid-cols-2 gap-5 py-10 w-full content-center ">
            <div className="col-span-2 lg:col-span-2 ">
              <h2 className="text-2xl font-bold text-gray-800  text-center font-lemon">
                PROJECT MANAGEMENT
              </h2>
            </div>
            <div className="col-span-2 lg:col-span-1 ">
              <div className="space-y-4  items-center justify-center ">
                <h2 className="text-xl font-bold text-color-red   font-lemon">
                  1Q-2012
                </h2>
                <p className=" font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
              <div className="col-span-2 lg:col-span-1 ">
              <div className="space-y-4  items-center justify-center ">
                <h2 className="text-xl font-bold text-color-red   font-lemon">
                  1Q-2012
                </h2>
                <p className=" font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
              <div className="col-span-2 lg:col-span-1 ">
              <div className="space-y-4  items-center justify-center ">
                <h2 className="text-xl font-bold text-color-red   font-lemon">
                  1Q-2012
                </h2>
                <p className=" font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
