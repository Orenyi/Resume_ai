import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import AuthPage from "./pages/Auth/AuthPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Templates from "./pages/Templates/Templates";
import ScrollToTop from "./components/ScrollToTop";

import ProtectedRoute from "./components/ProtectedRoute";

import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";

const AppContent = () => {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");
  const isTemplate = location.pathname.startsWith("/templates");

  return (
    <>
      {!isDashboard && !isTemplate && <Navbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/auth" element={<AuthPage />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/templates" element={<Templates />} />
      </Routes>

      {!isDashboard && !isTemplate && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <AppContent />
    </BrowserRouter>
  );
};

export default App;
