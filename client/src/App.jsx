import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import PatientDashboard from './pages/PatientDashboard.jsx';
import SignInOptions from './pages/SignInOption.jsx';
import Home from './pages/Home.jsx'
import LabReport from './components/LabReport.jsx';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
function AppContent(){
  return(
    <Routes>
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/signInAs" element={<SignInOptions />} />
      <Route path="/" element={<Home />} />
      <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
      <Route path="/patient/dashboard" element={<PatientDashboard />} />
      <Route path="/labReport" element={<LabReport />} />

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