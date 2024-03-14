import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Dashboard from "./pages/Admin/Dashboard";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./shared/ProtectedRoute";
import { CartProvider } from "@shared/CartContext";

const HeaderWrapper = () => {
  const location = useLocation();

  if (location.pathname === '/sign-in') {
    return null;
  }
  return <Header />;
};

function App() {
  return (
    <>
      <div className="app-container">
      <CartProvider>
        <Router>
        <HeaderWrapper />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/order-information" element={<Order />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            </Routes>
          </div>
        </Router>
        </CartProvider>
      </div>
    </>
  );
}

export default App;
