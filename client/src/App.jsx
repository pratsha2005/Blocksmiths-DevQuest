import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Dashboard from './pages/Dashboard.jsx';
import SignInOptions from './pages/SignInOption.jsx';
import Home from './pages/Home.jsx'
function AppContent(){
  return(
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/signInAs" element={<SignInOptions />} />
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}


function App() {
  return (
      <Router>
        <AppContent />
      </Router> 
  );
}
export default App;