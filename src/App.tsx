import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import './components/Contact/Contact.css';
import Home from './components/Home/Home';
import './components/Home/Home.css';
import About from './components/About/About';
import './components/About/About.css';
import Coaching from './components/Coaching/Coaching';
import './components/Coaching/Coaching.css';


import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {

  return (
    <Router>
      <div className='header'>
        <Navbar />
      </div>

      <Routes>
        <Route path="/Kr4k3n/" element={<Home />} />
        <Route path="/Kr4k3n/coaching" element={<Coaching />} />
        <Route path="/Kr4k3n/contact" element={<Contact />} />
        <Route path="/Kr4k3n/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
