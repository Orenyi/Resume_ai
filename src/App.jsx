import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
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

  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <>
      <Toast />
      {!isDashboardPage && <Navbar />}

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
      </Routes>

      {!isDashboardPage && <Footer />}
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
