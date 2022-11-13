import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddMovie from "./pages/AddMovie";
import Register from "./pages/Register";
import Search from "./pages/Search";
import AuthRoute from "./components/AuthRoute";

function App() {
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
