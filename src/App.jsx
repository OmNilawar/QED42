import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Cart } from './pages/Cart.jsx'
import { DetailedInfo } from "./pages/DetailedInfo.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<DetailedInfo />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
        </Routes>
      </Router>
    </>
  );
}   

export default App
