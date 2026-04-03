import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InstrumentsList from "./pages/InstrumentsList_temp.jsx";
import InstrumentDetail from "./pages/InstrumentDetail_temp.jsx";
import Home from "./pages/Home.jsx";
import Counter from "./pages/Counter.jsx";

import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";

import Purchase from "./pages/Purchase.jsx";


function App() {
  return (
    <BrowserRouter>
  <Header />
  
  <Routes>
    <Route path="/" element={<InstrumentsList />} />
    <Route path="/instruments/:id" element={<InstrumentDetail />} />
    <Route path="/counter" element={<Counter />}  />
    <Route path="/register" element={<Register />}  />
    <Route path="/login" element={<Login />}  />
    <Route path="/purchase" element={<Purchase />}  />
  </Routes>
  
  <Footer />
</BrowserRouter>

  );
}

export default App;
