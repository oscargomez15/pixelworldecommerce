
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import  Shop  from "./pages/shop/Shop"
import  Cart  from "./pages/cart/Cart"
import { ShopContextProvider } from "./context/ShopContext";
import { SearchContextProvider } from "./context/SearchContext";
import Footer from "./Footer";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <SearchContextProvider>
          <Router>
            <Navbar/> 
            <Routes>
              <Route path="/pixelworldecommerce" element={<Shop/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
            <Footer></Footer>
          </Router>
        </SearchContextProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
