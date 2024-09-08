import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Products from "./components/product/Products";
import Cart from "./components/cart/Cart";
import { CartProvider } from "./components/cart/CartContext";
import { User } from "./components/user/User";

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </MainLayout>
      </CartProvider>
    </Router>
  );
};

export default App;
