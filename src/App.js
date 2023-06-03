import './assets/scss/App.scss';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Merchant from './pages/Merchant';
import AddMerchant from './pages/Merchant/AddMerchant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/merchant" element={<Merchant />} />
          <Route path="/merchant/add" element={<AddMerchant />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
