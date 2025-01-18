import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import DoctorLogin from './pages/DoctorLogin.jsx';
import DoctorSignUp from './pages/DoctorSignUp.jsx';
import PatientLogin from './pages/PatientLogin.jsx';
import PatientSignUp from './pages/PatientSignUp.jsx';
import PatientDashboard from './pages/PatientDashboard.jsx';
import SignInOptions from './pages/SignInOption.jsx';
import Home from './pages/Home.jsx'
import LabReport from './components/LabReport.jsx';
import DoctorDashboard from './pages/DoctorDashboard.jsx';
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(import.meta.env.SUPABASE_URL,import.meta.env.SUPABASE_KEY)

const ff ="fejfiefieh";
function AppContent(){
  
  const supabase = createClient("https://wisnpsaotnokckvuepeq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indpc25wc2FvdG5va2NrdnVlcGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxOTkxMTQsImV4cCI6MjA1Mjc3NTExNH0.sdYO0yT1aJp1MTr87ncGnyLKl_8Q0Rs4Nj6xsllN3og");

  return(
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