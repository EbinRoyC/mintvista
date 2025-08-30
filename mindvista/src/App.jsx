import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Service from './pages/service'
import LoginPage from './pages/login'
import './App.css'

function App() {
  return (
    <Router>
  
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />     {/* Default route */}
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  )
}

export default App
