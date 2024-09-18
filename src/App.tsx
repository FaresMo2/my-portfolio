import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Reusem from "./pages/Resume";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="w-full overflow-hidden h-1/2">
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Reusem />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
