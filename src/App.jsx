import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Dashboard from "./pages/Admin/Dashboard";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./shared/ProtectedRoute";
import { CartContextProvider } from "@shared/CartContext";
import LogIn from "./pages/LogIn";

const HeaderWrapper = () => {
  const location = useLocation();

  if (location.pathname === "/sign-in" || location.pathname === "/log-in") {
    return null;
  }
  return <Header />;
};

function App() {
  return (
    <>
      <div className="app-container">
        <CartContextProvider>
          <Router>
            <HeaderWrapper />
            <div className="main-content">
              <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route
                  path="/"
                  element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <ProtectedRoute>
                      <Cart />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/orders"
                  element={
                    <ProtectedRoute>
                      <Order />
                    </ProtectedRoute>
                  }
                />
                <Route path="/admin" element={<Dashboard />} />
              </Routes>
            </div>
          </Router>
        </CartContextProvider>
      </div>
    </>
  );
}

export default App;
