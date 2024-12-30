import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Cart } from './pages/Cart.jsx'
import { DetailedInfo } from "./pages/DetailedInfo.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import { Orders } from "./pages/Orders.jsx";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<DetailedInfo />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </>
  );
}   

export default App
