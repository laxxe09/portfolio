import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

// Import project components
import EasyEats from './pages/EasyEats';
import FinanceTracker from './pages/FinanceTracker';
import PokemonBinder from './pages/PokemonBinder';
import PortfolioPlatform from './pages/PortfolioPlatform';

function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Header />
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Project-specific Routes */}
          <Route path="/easyeats" element={<EasyEats />} />
          <Route path="/financetracker" element={<FinanceTracker />} />
          <Route path="/pokemonbinder" element={<PokemonBinder />} />
          <Route path="/portfolioplatform" element={<PortfolioPlatform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
