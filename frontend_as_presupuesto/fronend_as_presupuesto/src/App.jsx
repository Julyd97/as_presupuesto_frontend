import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import AuthInput from './components/AuthInput.jsx';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard.jsx'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<AuthInput/>}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;