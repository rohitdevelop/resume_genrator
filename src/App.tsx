import { Routes, Route } from "react-router-dom";
import Home from "./Componenets/Home";
import Review from "./Componenets/Review";
import Navbar from "./Componenets/Navbar";
import Generetor from "./Componenets/Generetor";
const App: React.FC = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Generetor" element={<Generetor />} />
      <Route path="/review" element={<Review />} />
    </Routes>
    </>
  );
};

export default App;
