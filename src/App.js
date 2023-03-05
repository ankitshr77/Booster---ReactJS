import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Resources from './components/Resources';
import Statsbox from './components/Statsbox';

function App() {
  return (
    <>
    <Router>

    <Navbar/>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/resources' element={<Resources/>}/>
        

      </Routes>


    </Router>
    </>
  );
}

export default App;
