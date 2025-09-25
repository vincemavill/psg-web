import Navigation from "./../components/Navigation";
import Banner from "./../components/Banner";
import Footer from "./../components/Footer";
import image1 from "./../assets/Images/generator/image 1.jpg";
import image2 from "./../assets/Images/generator/image 2.jpg";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// Function to combine classes easily
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function App() {
  const services = [
    { name: "Transformer Assemblies LV-EHV", href: "#", accent: true },
    { name: "Transformer Troubleshooting & LV-EHV", href: "#" },
    { name: "Acceptance Testing / Commissioning LV-EHV", href: "#" },
    { name: "Relocation Services", href: "#" },
    { name: "Oil Processing, Degassing, Retrofills, Reclamation", href: "#" },
    { name: "LTC Maintenance & Retrofits", href: "#" },
    { name: "Transformer Electrical Testing LV-EHV", href: "#" },
    { name: "Bushing Testing, Repairs, and Replacements", href: "#" },
    { name: "Leak Repairs, Regaskets", href: "#" },
    { name: "Dissolved Gas Analysis, and Oil Quality Testing", href: "#" },
    { name: "New Transformer Sales", href: "#" },
  ];
  return (
    <>
      <Navigation />
      <Banner
        label={"GENERATORS SERVICES"}
        quote={'"Any Size, Any Voltage, Any OEM"'}
      />
      <div className="min-h-[500px]">
        <div className="mx-auto max-w-7xl px-10 lg:px-8">
          <div className="grid grid-cols-2  py-10 w-full content-center ">
            <div className="col-span-2 lg:col-span-1  flex ">
              <div className="space-y-8   py-10">
                <h2 className="text-2xl font-bold text-gray-800 font-lemon">
                  T.E.A.M INSPECTION
                </h2>
                <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
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
          <hr className="border-t border-gray-300" />
          <div className=" my-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-xl sm:text-2xl  text-color-red mb-4 tracking-tight font-poppins italic">
                  PGS has a program to identify these weaknesses in your
                  Generator, we call it
                </h1>
                <h2 className="text-3xl  text-color-red mb-1 tracking-tight font-poppins italic">
                  T.E.A.M.{" "}
                  <span className=" font-normal text-2xl">
                    – Generator Analysis Program
                  </span>
                </h2>
                <p className="text-lg  italic font-poppins">
                  Testing, Evaluation, Analysis & Maintain
                </p>
              </div>
              <div className="mb-12">
                <p className="text-sm  italic leading-relaxed font-poppins text-center">
                  We call it TEAM , also because it is a joint collaboration
                  between the Customer and PGS. This analysis provides a process
                  for the customer to arrive at the Generator Condition which
                  may be used to develop a business plan addressing risk of
                  failure, economic consequences, and other factors. This is
                  referred to as TEAM 1, 2 & 3 for all Generators inspections to
                  suit your needs, around the driver
                </p>
              </div>
              <div >
                <div className="p-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-center"><span className="font-bold text-red-600">TEAM-1 </span>
                    An analysis designed to fit a 24 hour outage inspection.
                    Such as your bore scope inspection outages. This inspection
                    will provide valuable baseline data
                  </p>
                </div>
                <div className="p-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-center"><span className="font-bold text-red-600">TEAM-1 </span>
                    An analysis designed to fit a 24 hour outage inspection.
                    Such as your bore scope inspection outages. This inspection
                    will provide valuable baseline data
                  </p>
                </div>
                 <div className="p-5 border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-center"><span className="font-bold text-red-600">TEAM-1 </span>
                    An analysis designed to fit a 24 hour outage inspection.
                    Such as your bore scope inspection outages. This inspection
                    will provide valuable baseline data
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 py-10 w-full content-center ">
            <div className="col-span-3 lg:col-span-1  flex flex-col border-r pr-5 border-gray-300">
              <Disclosure defaultOpen>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full py-2 border-b border-red-300 text-left focus:outline-none">
                      <h2
                        className="text-xl font-medium text-color-red font-poppins"
                        style={{ letterSpacing: "-0.5px" }}
                      >
                        Services
                      </h2>
                      <div className="text-xl font-medium text-color-red font-poppins">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="pt-4 pb-2 space-y-3">
                      {services.map((service, index) => (
                        <div
                          key={index}
                          className={classNames(
                            "block text-sm leading-snug font-poppins",
                            service.accent
                              ? "text-gray-900 font-semibold"
                              : "text-gray-700"
                          )}
                        >
                          {service.name}
                          {service.accent && (
                            <span className=" font-bold ml-1 text-base">
                              &raquo;
                            </span>
                          )}
                        </div>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full py-2 border-b border-red-300 text-left focus:outline-none">
                      <h2
                        className="text-xl font-medium text-color-red font-poppins"
                        style={{ letterSpacing: "-0.5px" }}
                      >
                        Testing
                      </h2>
                      <div className="text-xl font-medium text-color-red font-poppins">
                        {open ? <FiChevronUp /> : <FiChevronDown />}
                      </div>
                    </DisclosureButton>
                    <DisclosurePanel className="pt-4 pb-2 space-y-3">
                      {services.map((service, index) => (
                        <div
                          key={index}
                          className={classNames(
                            "block text-sm leading-snug font-poppins",
                            service.accent
                              ? "text-gray-900 font-semibold"
                              : "text-gray-700"
                          )}
                        >
                          {service.name}
                          {service.accent && (
                            <span className=" font-bold ml-1 text-base">
                              &raquo;
                            </span>
                          )}
                        </div>
                      ))}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="col-span-3 lg:col-span-2">
              <div className=" py-10 space-y-5">
                <h2 className="text-2xl  text-gray-800   font-poppins">
                  Insulation Resistance
                </h2>
                <img
                  alt="Your Company"
                  src={image2}
                  className="w-[600px] lg:w-[750px] h-auto "
                />
                <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </p>
                <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
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
