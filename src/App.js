import "./App.css";
import "./Media-queries.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Linktree from "./components/Linktree";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Linktree />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
