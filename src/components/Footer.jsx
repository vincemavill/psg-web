import psglogowhite from "./../assets/Images/home/PGS logo white - footer.png";
import icon1 from "./../assets/Images/home/footer icon 1.png";
import icon2 from "./../assets/Images/home/footer icon 2.png";
import icon3 from "./../assets/Images/home/footer icon 3.png";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About Us", href: "#", current: false },
  { name: "Generators", href: "#", current: false },
  { name: "Motors", href: "#", current: false },
  { name: "Transformers", href: "#", current: false },
];
export default function App() {
  return (
    <>
      {/* -------------CONTACT------------- */}
      <div className="mx-auto   bg-slate-100">
        <div className="py-10 mx-auto max-w-[1500px] px-2 lg:px-8  ">
          <div class="grid grid-cols-3 gap-10  w-full">
            <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0  rounded-full p-3 text-white mr-2">
                  <img
                    src={icon1}
                    alt="Top"
                    className="w-full h-[50px] object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-700 font-poppins text-sm font-medium">
                    yahoo@yahoo.com
                  </p>
                  <p className="text-gray-700 font-poppins text-sm font-medium">
                    yahoo@yahoo.com
                  </p>
                  <p className="text-gray-700 font-poppins text-sm font-medium">
                    yahoo@yahoo.com
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0  rounded-full p-3 text-white mr-2">
                  <img
                    src={icon2}
                    alt="Top"
                    className="w-full h-[50px] object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-700 font-poppins text-sm font-medium">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
              <div className="flex items-center">
                <div className="flex-shrink-0  rounded-full p-3 text-white mr-2">
                  <img
                    src={icon3}
                    alt="Top"
                    className="w-full h-[50px] object-cover"
                  />
                </div>
                <div>
                  <p className="text-gray-700 font-poppins text-sm font-medium">
                    8:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-400 font-poppins text-sm ">
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-color-dark">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="relative flex min-h-[50px] lg:min-h-[100px] items-center justify-between">
            <div class="grid grid-cols-3 gap-10  w-full py-4">
              <div className="col-span-3 lg:col-span-1 flex items-center justify-center">
                <img
                  alt="Your Company"
                  src={psglogowhite}
                  className="h-[80px] lg:h-[130px] w-auto"
                />
              </div>
              <div className="col-span-3 lg:col-span-1">
                <div class="grid grid-cols-2 gap-4  w-full">
                  <div className="col-span-1">
                    <div className="border-r-[1px] border-gray-500">
                      <ul class="list-none">
                        <li className="font-semibold text-white font-poppins">
                          PAGES
                        </li>
                        {navigation.map((item) => (
                          <li className="rounded-md text-sm pt-1 text-white font-poppins">
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <div className="border-r-[1px] border-gray-500">
                      <ul class="list-none">
                        <li className="font-semibold text-white font-poppins">
                          COLLABORATIONS
                        </li>
                        {navigation.map((item) => (
                          <li className="rounded-md text-sm pt-1 text-white font-poppins">
                            {item.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1">
                <form class="grid grid-cols-4 gap-4">
                  <div className="col-span-4">
                    <label
                      class="block text-white text-sm font-semibold font-poppins"
                      for="username"
                    >
                      GET A QUOTE
                    </label>
                  </div>
                  <div className="col-span-2">
                    <input
                      class="shadow appearance-none bg-slate-700 w-full py-1 px-3 text-white border-0"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      class="shadow appearance-none bg-slate-700 w-full py-1 px-3 text-white border-0"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      class="shadow appearance-none bg-slate-700 w-full py-1 px-3 text-white border-0"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      class="shadow appearance-none bg-slate-700 w-full py-1 px-3 text-white border-0"
                      id="username"
                      type="text"
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-span-4">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full bg-slate-700 px-3 text-base text-white "
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-span-4 text-right">
                    <button
                      class="bg-color-red  text-white font-poppins text-sm py-1  px-5 rounded font-normal"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 bg-color-red">
        <h1 className="text-center text-white text-xs font-poppins">
          © Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h1>
      </div>
    </>
  );
}
