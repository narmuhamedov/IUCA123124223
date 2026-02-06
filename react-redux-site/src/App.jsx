import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import InstrumentsList from "./pages/InstrumentsList_temp.jsx";
import InstrumentDetail from "./pages/InstrumentDetail_temp.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <BrowserRouter>
  <Header />
  
  <Routes>
    <Route path="/" element={<InstrumentsList />} />
    <Route path="/instruments/:id" element={<InstrumentDetail />} />
  </Routes>
  
  <Footer />
</BrowserRouter>

  );
}

export default App;
