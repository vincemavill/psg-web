import Navigation from "./../components/Navigation";
import Banner from "./../components/Banner";
import Footer from "./../components/Footer";
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
      <Banner label={"GENERATOR SERVICES"} />
      <div className="min-h-[500px]"></div>
      <Footer />
    </>
  );
}
