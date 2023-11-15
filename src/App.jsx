import './App.css'
import './Mobile.css';
import MainLayout from './components/MainLayout'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';
import { AnimatePresence } from "framer-motion";

function App() {

  return (
    <>
    <AnimatePresence >
    <Routes>
      <Route element={<MainLayout/>}>
        <Route index path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
    </Routes>
    </AnimatePresence>
    </>
  )
}

export default App
