import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import DoctorLogin from "./pages/DoctorLogin.jsx";
import DoctorSignUp from "./pages/DoctorSignUp.jsx";
import PatientLogin from "./pages/PatientLogin.jsx";
import PatientSignUp from "./pages/PatientSignUp.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import SignInOptions from "./pages/SignInOption.jsx";
import Home from "./pages/Home.jsx";
import LabReport from "./components/LabReport.jsx";
import DoctorDashboard from "./pages/DoctorDashboard.jsx";
function AppContent() {
  return (
    <Routes>
      <Route path="/doctor/login" element={<DoctorLogin />} />
      <Route path="/doctor/register" element={<DoctorSignUp />} />
      <Route path="/patient/login" element={<PatientLogin />} />
      <Route path="/patient/register" element={<PatientSignUp />} />
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
