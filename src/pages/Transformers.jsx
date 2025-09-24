import Navigation from "./../components/Navigation";
import Banner from "./../components/Banner";
import Footer from "./../components/Footer";
export default function App() {
  return (
    <>
      <Navigation />
      <Banner label={"TRANSFORMER SERVICES"} />
      <div className="min-h-[500px]"></div>
      <Footer />
    </>
  );
}
