import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Footer from "./components/Footer";

// Lazy load pages
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Suspense>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
