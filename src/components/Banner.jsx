import psglogowhite from "./../assets/Images/home/PGS logo white - footer.png";
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About Us", href: "#", current: false },
  { name: "Generators", href: "#", current: false },
  { name: "Motors", href: "#", current: false },
  { name: "Transformers", href: "#", current: false },
];
export default function App({ label, quote }) {
  return (
    <>
      <div className="flex items-center justify-center page-banner h-[400px]">
        <h1 className="block text-color-dark text-[40px] lg:text-[70px] font-bold font-lemon text-center">
          {label}
        </h1>
      </div>
      <div className="py-5 bg-color-dark">
        <h1 className="text-center text-white text-xl font-poppins italic font-bold">
          {quote}
        </h1>
      </div>
    </>
  );
}
