import { Paper } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import SubHeader from "./Components/SubHeader";
import Home from "./Features/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <SubHeader />
      <Home />
    </div>
  );
}

export default App;
