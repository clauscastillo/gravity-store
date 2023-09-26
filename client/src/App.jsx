import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import Clothes from "./pages/Clothes";
import Aboutus from "./pages/Aboutus";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/987456321" element={<Admin />} />
        <Route path="/clothes" element={<Clothes />}></Route>
        <Route path="/nosotros" element={<Aboutus />}></Route>
        <Route path="/terminos-y-condiciones" element={<Terms />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
