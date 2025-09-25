import psglogowhite from "./../assets/Images/home/logo icon.png";
export default function App() {
  return (
    <>
      <div className="flex items-center justify-center home-banner ">
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="grid grid-cols-2 gap-10 py-10 w-full content-center ">
            <div className="col-span-2 lg:col-span-1  flex items-center">
              <div className="">
                <h1 className="text-color-dark text-[40px] lg:text-[70px] font-bold font-lemon leading-none">
                  ANY SIZE
                  <br />
                  ANY VOLTAGE
                  <br />
                  ANY OEM
                </h1>
                <button
                  className="bg-color-red  text-white font-poppins text-md py-3 mt-5 px-10 rounded-full font-normal"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center justify-center py-10">
                <img
                  alt="Your Company"
                  src={psglogowhite}
                  className="w-[300px] lg:w-[350px] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-color-dark">
        <h1 className="text-center text-white text-3xl font-poppins italic font-normal">
          "Right the First Time - On Time - Every Time"
        </h1>
      </div>
    </>
  );
}
