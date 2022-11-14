import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddMovie from "./pages/AddMovie";
import Register from "./pages/Register";
import AuthRoute from "./components/AuthRoute";
import { useEffect } from "react";
import { checkSession } from "./redux/auth/auth.functions";
import { useDispatch } from "react-redux";
import Cart from "./pages/Cart";
import MovieInfo from "./pages/MovieInfo";
import Footer from "./components/Footer";

function App() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    token && checkSession(token, navigate, dispatch);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="">
          <Route index element={<Home />} />
          <Route path=":title" element={<MovieInfo />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/addMovie"
          element={<AuthRoute component={<AddMovie />} />}
        />
        <Route path="/cart" element={<AuthRoute component={<Cart />} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
