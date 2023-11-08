import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Hobbies from "./pages/Hobbies"
import NotFound from "./pages/NotFound"
import Header from "./components/Header"   
import Footer from "./components/Footer"   

function App() {
  return (
    <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
  );
}

export default App;
