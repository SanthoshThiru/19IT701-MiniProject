import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Vault from './pages/Vault/Vault';
import SecureNotes from './pages/SecureNotes/SecureNotes';
import Activity from './pages/Activity/Activity';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vault" element={<Vault />} />
      <Route path="/secure-notes" element={<SecureNotes />} />
      <Route path="/activity" element={<Activity />} />
    </Routes>
  );
};

export default App;

