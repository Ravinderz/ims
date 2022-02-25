import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import Admin from "./Features/Admin/Admin";
import Home from "./Features/Home/Home";
import Login from "./Features/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
