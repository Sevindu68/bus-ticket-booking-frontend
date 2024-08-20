import { Route, Routes } from "react-router-dom";
import "./App.css";

import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import SearchResult from "./components/SearchResult";
import BusLayOut from "./layout/BusLayOut";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/result" element={<SearchResult />} />
          <Route path="/bus" element={<BusLayOut />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
