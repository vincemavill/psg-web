import Navigation from "./../components/Navigation";
import HomeBanner from "./../components/HomeBanner";
import Footer from "./../components/Footer";
import image1 from "./../assets/Images/home/home _0000_Transformers 1.jpg";
import image2 from "./../assets/Images/home/home _0001_Motors 1.jpg";
import image3 from "./../assets/Images/home/home _0002_Generators 1.jpg";
import image4 from "./../assets/Images/home/home _0003_Generators.jpg";
import image5 from "./../assets/Images/home/home _0004_Motors.jpg";
import image6 from "./../assets/Images/home/home _0005_Transformers.jpg";
import image7 from "./../assets/Images/home/24-7 Service.png";
import image8 from "./../assets/Images/home/Safety Protects People.png";
import image9 from "./../assets/Images/about/Numbers.jpg";
import image10 from "./../assets/Images/home/banner 22.png";
import image11 from "./../assets/Images/home/banner 33.png";
// -------------
import icon1 from "./../assets/Images/home/why us icon 1.png";
import icon2 from "./../assets/Images/home/why us icon 2.png";
import icon3 from "./../assets/Images/home/why us icon 3.png";
import icon4 from "./../assets/Images/home/why us icon 4.png";
import icon5 from "./../assets/Images/home/pearl energy.jpg";
import icon6 from "./../assets/Images/home/aboitizpower.jpg";
import quote from "./../assets/Images/home/quote.svg";
// -------------
import { FiChevronRight } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";
// -------------
import partnerlogo1 from "./../assets/Images/home/partner-icon-1.png";
import partnerlogo2 from "./../assets/Images/home/partner-icon-2.png";
import partnerlogo3 from "./../assets/Images/home/partner-icon-3.png";
import partnerlogo4 from "./../assets/Images/home/partner-icon-4.png";
export default function App() {
  const navigation = [
    { name: "Home", href: "#", current: true },
    { name: "About Us", href: "#", current: false },
    { name: "Generators", href: "#", current: false },
    { name: "Motors", href: "#", current: false },
    { name: "Transformers", href: "#", current: false },
  ];
  return (
    <>
      <Navigation />
      <HomeBanner />
      <div className="min-h-[500px]">
        {/* -------------OUR SERVICES------------- */}
        <div className="py-10 mx-auto max-w-7xl px-2 lg:px-8 text-center">
          <h1 className="text-center  text-3xl font-lemon font-normal text-color-dark">
            OUR SERVICES
          </h1>
          <p className="text-center mx-auto font-poppins text-xs font-medium text-color-dark max-w-[600px] my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </p>
          <div className="relative flex min-h-[50px] lg:min-h-[100px] items-center justify-between">
            <div className="grid grid-cols-3 gap-20  w-full py-4">
              <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
                <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
                  {/* Top Image */}
                  <img
                    src={image1}
                    alt="Top"
                    className="w-full h-48 object-cover"
                  />
                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold uppercase mb-2 font-lemon">
                      Generators
                    </h3>
                    <p className="text-gray-600 mb-4 font-poppins">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <button className="px-5 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition font-poppins">
                      Learn More
                    </button>
                  </div>
                  {/* Bottom Image */}
                  <img
                    src={image2}
                    alt="Top"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              {/* -------------------------- */}
              <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
                <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
                  {/* Top Image */}
                  <img
                    src={image3}
                    alt="Top"
                    className="w-full h-48 object-cover"
                  />
                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold uppercase mb-2 font-lemon">
                      Generators
                    </h3>
                    <p className="text-gray-600 mb-4 font-poppins">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <button className="px-5 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition font-poppins">
                      Learn More
                    </button>
                  </div>
                  {/* Bottom Image */}
                  <img
                    src={image4}
                    alt="Top"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              {/* -------------------------- */}
              <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
                <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">
                  {/* Top Image */}
                  <img
                    src={image6}
                    alt="Top"
                    className="w-full h-48 object-cover"
                  />
                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-bold uppercase mb-2 font-lemon">
                      Generators
                    </h3>
                    <p className="text-gray-600 mb-4 font-poppins">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                    </p>
                    <button className="px-5 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition font-poppins">
                      Learn More
                    </button>
                  </div>
                  {/* Bottom Image */}
                  <img
                    src={image5}
                    alt="Top"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="px-10 py-2 bg-color-red mx-auto  text-white rounded-full mt-5 font-poppins">
            View All
          </button>
        </div>
        {/* -------------WHY US------------- */}
        <div className="bg-slate-100">
          <div className="py-10 mx-auto max-w-7xl px-2 lg:px-8  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center  font-lemon">
                    WHY US?
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center bg-white rounded-3xl shadow p-2">
                      <div className="flex-shrink-0  rounded-full p-3 text-white mr-2">
                        <img
                          src={icon1}
                          alt="Top"
                          className="w-full h-[50px] object-cover"
                        />
                      </div>
                      <p className="text-gray-700 font-poppins text-sm font-medium">
                        Our teams have the requisite skill sets, knowledge,
                        engineering expertise to handle the most difficult
                        problems.
                      </p>
                    </div>
                    <div className="flex items-center bg-white rounded-3xl shadow p-2">
                      <div className="flex-shrink-0  rounded-full p-3 text-white mr-2">
                        <img
                          src={icon2}
                          alt="Top"
                          className="w-full h-[50px] object-cover"
                        />
                      </div>
                      <p className="text-gray-700 font-poppins text-sm font-medium">
                        Our teams have the requisite skill sets, knowledge,
                        engineering expertise to handle the most difficult
                        problems.
                      </p>
                    </div>
                    <div className="flex items-center bg-white rounded-3xl shadow p-2">
                      <div className="flex-shrink-0  rounded-full p-3 text-white mr-2">
                        <img
                          src={icon4}
                          alt="Top"
                          className="w-full h-[50px] object-cover"
                        />
                      </div>
                      <p className="text-gray-700 font-poppins text-sm font-medium">
                        Our teams have the requisite skill sets, knowledge,
                        engineering expertise to handle the most difficult
                        problems.
                      </p>
                    </div>
                    <div className="flex items-center bg-white rounded-3xl shadow p-2">
                      <div className="flex-shrink-0  rounded-full p-3 text-white mr-2">
                        <img
                          src={icon3}
                          alt="Top"
                          className="w-full h-[50px] object-cover"
                        />
                      </div>
                      <p className="text-gray-700 font-poppins text-sm font-medium">
                        Our teams have the requisite skill sets, knowledge,
                        engineering expertise to handle the most difficult
                        problems.
                      </p>
                    </div>
                  </div>
                </div>
                {/* RIGHT COLUMN */}
                <div className="flex flex-col items-center space-y-12">
                  {/* 24/7 Emergency Service */}
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <img
                      src={image7}
                      alt="24/7 Service"
                      className="h-40 w-auto mb-2"
                    />
                    <h3 className="text-2xl font-normal text-gray-800 font-lemon text-center">
                      EMERGENCY SERVICE
                    </h3>
                  </div>
                  {/* Nationwide Coverage */}
                  <div className="flex flex-col md:flex-row items-center gap-5">
                    <h3 className="text-2xl font-normal text-gray-800 font-lemon text-center">
                      NATIONWIDE COVERAGE
                    </h3>
                    <img
                      src={image8}
                      alt="Coverage"
                      className="h-40 w-auto mb-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------WHO ARE WE------------- */}
        <div className="mx-auto max-w-7xl px-10 lg:px-8">
          <div className="grid grid-cols-2  py-10 w-full content-center ">
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center py-10">
                <div className="border rounded-3xl">
                  <img
                    alt="Your Company"
                    src={image9}
                    className="w-[300px] lg:w-[350px] h-auto rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1  flex items-center justify-center">
              <div className="space-y-8  items-center justify-center py-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-8   font-lemon">
                  WHO ARE WE
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
                <button className="px-5 py-2 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition font-poppins">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* -------------ONE OF THE LARGEST------------- */}
        <div className="mx-auto   bg-color-dark">
          <div className="grid grid-cols-2   w-full content-center ">
            <div className="col-span-2 lg:col-span-1  flex items-center ">
              <div className="space-y-4 px-10 lg:px-20  items-center justify-center py-10">
                <h2 className="text-lg lg:text-3xl font-bold text-white   font-lemon">
                  ONE OF THE LARGEST REPAIR <br /> FACILITIES IN THE PHILLIPINES
                </h2>
                <p className="text-white font-poppins text-sm font-medium leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 text-right">
              <img
                alt="Your Company"
                src={image10}
                className="h-[350px] lg:h-[400px] w-auto ml-auto "
              />
            </div>
          </div>
        </div>
        {/* -------------WHAT PEOPLE SAY------------- */}
        <div className="mx-auto   bg-slate-100">
          <div className="py-10 mx-auto max-w-[1500px] px-2 lg:px-8  ">
            <div className="grid grid-cols-3 gap-10 px-4 sm:px-6 lg:px-8 w-full content-center ">
              <div className="col-span-3 lg:col-span-1   items-center justify-center">
                <div className="">
                  <h2 className="text-3xl lg:text-[50px]  font-bold text-color-dark   font-lemon leading-none">
                    WAHT <br /> PEOPLE SAY <br /> ABOUT US
                  </h2>
                  <div className="flex-row flex gap-2">
                    <button className="p-2 bg-color-light  bg-slate-400 rounded-lg mt-5 font-poppins">
                      <FiChevronLeft className="text-[35px]  text-white" />
                    </button>
                    <button className="p-2 bg-color-red  bg-slate-400 rounded-lg mt-5 font-poppins">
                      <FiChevronRight className="text-[35px]  text-white" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1   flex items-center ">
                <img
                  src={icon5}
                  alt="Top"
                  className="h-[100px] w-[100px] object-cover  mr-[-50px] border rounded-2xl z-10"
                />
                <div className="border rounded-3xl bg-white py-10 pl-20 pr-5 relative">
                  <img
                    src={quote}
                    alt="Top"
                    className="h-[50px] w-[50px] object-contain absolute top-[-30px]"
                  />
                  <h2 className="text-md font-medium text-gray-800 mb-2   font-poppins">
                    Pearl Energy
                  </h2>
                  <p className="text-gray-400 font-poppins text-xs font-medium leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1   flex items-center">
                <img
                  src={icon6}
                  alt="Top"
                  className="h-[100px] w-[100px] object-cover  mr-[-50px] border rounded-2xl z-10"
                />
                <div className="border rounded-3xl bg-white py-10 pl-20 pr-5 relative">
                  <img
                    src={quote}
                    alt="Top"
                    className="h-[50px] w-[50px] object-contain absolute top-[-30px]"
                  />
                  <h2 className="text-md font-medium text-gray-800 mb-2   font-poppins">
                    Pearl Energy
                  </h2>
                  <p className="text-gray-400 font-poppins text-xs font-medium leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* -------------PROVISION------------- */}
        <div className="mx-auto   bg-color-red">
          <div className="grid grid-cols-2   w-full content-center ">
            <div className="col-span-2 lg:col-span-1  flex items-center ">
              <div className="space-y-4 px-10 lg:px-20  items-center justify-center py-10">
                <h2 className="text-2xl lg:text-[50px]  font-bold text-white   font-lemon leading-none">
                  PROVISION OF <br /> ENGINEERING <br /> SERVICES
                </h2>
                <p className="text-white font-poppins text-md  leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1 text-right">
              <img
                alt="Your Company"
                src={image11}
                className="h-[350px] lg:h-[400px] w-auto ml-auto "
              />
            </div>
          </div>
        </div>
        {/* -------------OUR SERVICES------------- */}
        <div className="py-10 mx-auto max-w-7xl px-2 lg:px-8 text-center">
          <h1 className="text-center  text-3xl font-lemon font-normal text-color-dark mb-10">
            OUR PARTNERS
          </h1>
          <div className="relative flex min-h-[50px] lg:min-h-[100px] items-center justify-between">
            <div className="grid grid-cols-4 gap-10  w-full py-4">
              <div className="col-span-4 lg:col-span-1 flex items-center justify-center">
                <img
                  alt="Your Company"
                  src={partnerlogo1}
                  className="w-[300px] h-auto  "
                />
              </div>
              <div className="col-span-4 lg:col-span-1 flex items-center justify-center">
                <img
                  alt="Your Company"
                  src={partnerlogo2}
                  className="w-[150px] h-auto  "
                />
              </div>
              <div className="col-span-4 lg:col-span-1 flex items-center justify-center">
                <img
                  alt="Your Company"
                  src={partnerlogo3}
                  className="w-[300px] h-auto  "
                />
              </div>
              <div className="col-span-4 lg:col-span-1 flex items-center justify-center">
                <img
                  alt="Your Company"
                  src={partnerlogo4}
                  className="w-[300px] h-auto  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
