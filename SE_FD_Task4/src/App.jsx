import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Footer from './pages/Footer.jsx'
import Service from './pages/Service.jsx'
import Menu from './pages/Menu.jsx'
import Book from './pages/Book.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/book" element={<Book />} />
    </Routes>
    <Footer/>
    </>


  )
}

export default App
