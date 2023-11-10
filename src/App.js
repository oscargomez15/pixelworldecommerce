
import { BrowserRouter as Router, Routes, Route, BrowserRouter  } from "react-router-dom";
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
          <BrowserRouter basename="/pixelworldecommerce">
            <Navbar/> 
            <Routes>
                <Route path="/" element={<Shop/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
        </SearchContextProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
