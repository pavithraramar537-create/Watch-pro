import { Routes, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'  // BrowserRouter vendam
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About';

function App() {
  return (
    <HashRouter>  // ← IDHU DHAAN MUKKIYAM
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </HashRouter>  // ← IDHUVUM CLOSE PANNU
  )
}

export default App