import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/AboutUs";
import GeneratorsPage from "./pages/Generators";
import MotorsPage from "./pages/Motors";
import TransformersPage from "./pages/Transformers";;
function App() {
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/generators" element={<GeneratorsPage />} />
      <Route path="/motors" element={<MotorsPage />} />
      <Route path="/transformers" element={<TransformersPage />} />
    </Routes>
  );
}
export default App;
