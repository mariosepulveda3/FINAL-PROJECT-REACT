import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddMovie from "./pages/AddMovie";
import Register from "./pages/Register";
import Search from "./pages/Search";
import AuthRoute from "./components/AuthRoute";
import { useEffect } from "react";
import { checkSession } from "./redux/auth/auth.functions";
import { useDispatch } from "react-redux";

function App() {

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  useEffect (() => {
    token && checkSession(token, navigate, dispatch)
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path='/search' element={<Search/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addMovie" element={<AuthRoute component={<AddMovie/>} />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
