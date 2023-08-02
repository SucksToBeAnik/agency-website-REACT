import { BrowserRouter,Route,Routes } from "react-router-dom"
import Homepage from "./components/pages/Homepage/Homepage"
import About from "./components/pages/About/About"
import Services from "./components/pages/services/Services"
import Contact from "./components/pages/Contact/Contact"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>

  )
}

export default App
