import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext.jsx';
import Navbar from './components/Navbar.jsx';
import LoginPage from './pages/LoginPage.jsx'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard.jsx'
import PrivateRoute from './components/PrivateRoute.jsx';
import PublicRoute from './components/PublicRoute.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}/>
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;