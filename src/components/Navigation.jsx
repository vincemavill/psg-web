import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import psglogo from "./../assets/Images/home/PGS logo.jpg";
import { useLocation } from "react-router";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about-us", current: false },
  { name: "Generators", href: "/generators", current: false },
  { name: "Motors", href: "/motors", current: false },
  { name: "Transformers", href: "/transformers", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function App() {
   const location = useLocation();
  return (
    <Disclosure
      as="nav"
      className="relative after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px "
    >
      <div className="mx-auto max-w-7xl px-2 py-2  lg:px-8">
        <h2 className="text-right font-poppins font-semibold text-color-red text-sm">
          Emergency Hotline:{" "}
          <span className="text-color-dark">0000-0000-000</span>
        </h2>
      </div>
      <div className="bg-color-light h-[2px]"></div>
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="relative flex min-h-[50px] lg:min-h-[100px] items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-color-dark">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <div aria-hidden="true" className="block  group-data-open:hidden">
                <FiMenu className="text-xl" />
              </div>
              <h2 aria-hidden="true" className="hidden group-data-open:block">
                <FiMenu className="text-xl" />
              </h2>
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start ">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src={psglogo}
                className="h-10 lg:h-20 w-auto"
              />
            </div>
          </div>
          <div className=" flex-1 items-center justify-center lg:items-stretch lg:justify-end hidden lg:ml-6 lg:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <NavLink
                  to={item.href}
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.href === location.pathname ? "text-color-red" : "text-gray-700",
                    "rounded-md px-3 py-2 text-sm font-semibold font-poppins"
                  )}
                  end
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="lg:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              as="a"
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.href === location.pathname ? "text-color-red" : "text-gray-700",
                "block px-3 py-2 text-base font-semibold font-poppins"
              )}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </DisclosurePanel>
      <div className="bg-color-red h-5"></div>
    </Disclosure>
  );
}
