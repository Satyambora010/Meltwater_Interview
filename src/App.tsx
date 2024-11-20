import { Route, Routes } from "react-router-dom";
import "./App.css";
import Brands from "./Components/Brands";
import Details from "./Components/Details";
import Expertise from "./Components/Expertise";
import Home from "./Components/Home";
import { UserProvider } from "./Components/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
