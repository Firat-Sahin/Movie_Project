import './App.css';
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>
  );
}

export default App;
