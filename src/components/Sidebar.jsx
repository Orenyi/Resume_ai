import React from "react";
import {
  RiDashboardLine,
  RiFileList3Line,
  RiSettings3Line,
} from "react-icons/ri";

import { HiOutlineDocumentText } from "react-icons/hi";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import logo from "../images/logo.png";
import useDashboardStore from "../store/dashboardStore";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    icon: <RiDashboardLine />,
    path: "/dashboard",
  },
  {
    name: "Templates",
    icon: <HiOutlineDocumentText />,
    path: "/templates",
  },
  {
    name: "Resumes",
    icon: <RiFileList3Line />,
    path: "/resumes",
  },
  {
    name: "Settings",
    icon: <RiSettings3Line />,
    path: "/settings",
  },
];

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar, mobileSidebar, closeMobileSidebar } =
    useDashboardStore();

  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="hidden lg:flex fixed top-5 left-5 z-50 bg-white shadow-md border border-gray-200 w-10 h-10 rounded-lg items-center justify-center"
      >
        <FiMenu className="text-xl" />
      </button>

      {/* Mobile Overlay */}
      {mobileSidebar && (
        <div
          onClick={closeMobileSidebar}
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-white border-r border-gray-200 z-50
          transition-all duration-300 ease-in-out
          ${sidebarOpen ? "w-[260px]" : "w-[85px]"}
          ${
            mobileSidebar
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <section className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex items-center justify-between px-5 py-6 border-b border-gray-100">
            <div className="flex items-center gap-3 overflow-hidden">
              <NavLink to="/">
                <img src={logo} alt="logo" className="w-32 object-contain" />
              </NavLink>
            </div>

            <button onClick={closeMobileSidebar} className="lg:hidden">
              <IoClose className="text-2xl" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 px-3 py-6 space-y-2">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300
        ${
          isActive
            ? "bg-[var(--color-primary)] text-white"
            : "text-gray-700 hover:bg-gray-100"
        }`
                }
              >
                <span className="text-xl">{item.icon}</span>

                {sidebarOpen && (
                  <span className="font-medium whitespace-nowrap">
                    {item.name}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Bottom Button */}
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="bg-[var(--color-primary)] text-white w-full py-3 rounded-xl font-semibold hover:opacity-90
               transition-all duration-300"
            >
              {sidebarOpen ? "Sign Out" : ""}
            </button>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
