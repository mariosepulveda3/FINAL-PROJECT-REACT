import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";

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
      </Routes>
      </main>
    </div>
  );
}

export default App;
