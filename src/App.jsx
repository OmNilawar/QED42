import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Cart } from './pages/Cart.jsx'
import { DetailedInfo } from "./pages/DetailedInfo.jsx";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<DetailedInfo />} />
        </Routes>
      </Router>
    </>
  );
}   

export default App
