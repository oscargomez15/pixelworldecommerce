
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import  Navbar  from "./components/Navbar";
import  Shop  from "./pages/shop/Shop"
import  Cart  from "./pages/cart/Cart"
import { ShopContextProvider } from "./Context/ShopContext";
import { SearchContextProvider } from "./Context/SearchContext";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <SearchContextProvider>
          <Router>
            <Navbar/> 
            <Routes>
              <Route path="/" element={<Shop/>}/>
              <Route path="/cart" element={<Cart/>}/>
            </Routes>
          </Router>
        </SearchContextProvider>
      </ShopContextProvider>
    </div>
  );
}

export default App;
