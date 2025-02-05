import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer";

function App() {  
  return (  
    <Router>  
      <div className="min-h-screen flex flex-col">  
        <Routes>  
          <Route path="/" element={<LoginPage />} />  
          <Route path="/dashboard" element={<DashboardPage />} />  
        </Routes>  
        <Footer />  
      </div>  
    </Router>  
  );  
}  

export default App;
