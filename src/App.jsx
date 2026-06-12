import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import About from "./pages/About/About";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService/TermsOfService";
import AuthPage from "./pages/Auth/AuthPage";

import Dashboard from "./pages/Dashboard/Dashboard";
import Templates from "./pages/Templates/Templates";
import Resumes from "./pages/Resumes/Resumes";

import ResumeBuilder from "./pages/ResumeBuilder/ResumeBuilder";
import BuilderAI from "./pages/BuilderAI/BuilderAI";

import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Toast from "./components/Toast";

const AppContent = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/auth");

  return (
    <>
      <Toast />
      {!hideLayout && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/templates"
          element={
            <ProtectedRoute>
              <Templates />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/resumes"
          element={
            <ProtectedRoute>
              <Resumes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/resumes/:resumeId/edit"
          element={
            <ProtectedRoute>
              <ResumeBuilder />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/builder-ai"
          element={
            <ProtectedRoute>
              <BuilderAI />
            </ProtectedRoute>
          }
        />

        <Route path="/About" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      {!hideLayout && <Footer />}
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
