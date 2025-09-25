import Navigation from "./../components/Navigation";
import Banner from "./../components/Banner";
import Footer from "./../components/Footer";
import image1 from "./../assets/Images/Transformer/image 1.jpg";
import image2 from "./../assets/Images/Transformer/image 2.jpg";
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
        label={"TERMS AND CONDITION"}
        quote={'"Any Size, Any Voltage, Any OEM"'}
      />
      <div className="min-h-[500px]">
        <div className="mx-auto max-w-7xl px-10 lg:px-8">
          <div className="space-y-3   py-10">
            <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <h2 className="text-lg font-medium text-gray-800    font-poppins">
              Personal Information
            </h2>
            <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
            </p>
            <h2 className="text-lg font-medium text-gray-800    font-poppins">
              Personal Information
            </h2>
            <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
             <h2 className="text-lg font-medium text-gray-800    font-poppins">
              Personal Information
            </h2>
            <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <p className="text-gray-700 font-poppins text-sm font-medium leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
