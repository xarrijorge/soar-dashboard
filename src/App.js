import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Transactions from './pages/Transactions';
import Cards from './pages/CreditCards';
import Accounts from './pages/Accounts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/transactions" element={<Transactions/>} />
        <Route path="/credit-cards" element={<Cards/>}/>
        <Route path="/accounts" element={<Accounts/>} />
      </Routes>
    </Router>
  );
}

export default App;