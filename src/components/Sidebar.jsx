import React, { useEffect } from "react";
import {
  RiDashboardLine,
  RiFileList3Line,
  RiSettings3Line,
} from "react-icons/ri";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FiMenu, FiPlus, FiMessageSquare, FiTrash2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import logo from "../images/logo.png";
import useDashboardStore from "../store/dashboardStore";
import useBuilderAiStore from "../store/builderAiStore";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <RiDashboardLine />,
  },
  {
    name: "Templates",
    path: "/dashboard/templates",
    icon: <HiOutlineDocumentText />,
  },
  {
    name: "Resumes",
    path: "/dashboard/resumes",
    icon: <RiFileList3Line />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <RiSettings3Line />,
  },
];

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar, mobileSidebar, closeMobileSidebar } =
    useDashboardStore();

  const {
    chats,
    activeChatId,
    loadingChats,
    loadChats,
    createNewChat,
    loadChatMessages,
    deleteChat,
  } = useBuilderAiStore();

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isBuilderAIPage = location.pathname.startsWith("/dashboard/builder-ai");

  useEffect(() => {
    if (isBuilderAIPage) {
      loadChats();
    }
  }, [isBuilderAIPage, loadChats]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleNewChat = async () => {
    navigate("/dashboard/builder-ai");
    await createNewChat();
    closeMobileSidebar();
  };

  const handleOpenChat = async (chatId) => {
    navigate("/dashboard/builder-ai");
    await loadChatMessages(chatId);
    closeMobileSidebar();
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="hidden lg:flex fixed top-5 left-5 z-50 bg-white shadow-md border border-gray-200 w-10 h-10 rounded-lg items-center justify-center"
      >
        <FiMenu className="text-xl" />
      </button>

      {mobileSidebar && (
        <div
          onClick={closeMobileSidebar}
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
        />
      )}

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
          {/* Logo */}
          <div className="flex items-center justify-between px-5 py-6 border-b border-gray-100">
            <NavLink to="/">
              <img
                src={logo}
                alt="Resume AI"
                className={`${sidebarOpen ? "w-32" : "w-10"} object-contain`}
              />
            </NavLink>

            <button onClick={closeMobileSidebar} className="lg:hidden">
              <IoClose className="text-2xl" />
            </button>
          </div>

          <div className="flex-1 px-3 py-6 overflow-y-auto">
            {/* Navigation */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === "/dashboard"}
                  onClick={closeMobileSidebar}
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

            {/* New Chat */}
            <div className="mt-8">
              <button
                onClick={handleNewChat}
                className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:opacity-90 transition"
              >
                <FiPlus className="text-xl" />

                {sidebarOpen && <span>New Chat</span>}
              </button>
            </div>

            {/* Chat History */}
            {sidebarOpen && (
              <div className="mt-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-4 mb-3">
                  Recent Chats
                </p>

                <div className="space-y-2">
                  {loadingChats ? (
                    <p className="text-sm text-gray-400 px-4">Loading...</p>
                  ) : chats.length === 0 ? (
                    <p className="text-sm text-gray-400 px-4">No chats yet</p>
                  ) : (
                    chats.map((chat) => (
                      <div
                        key={chat.id}
                        className={`group flex items-center gap-2 rounded-xl transition ${
                          activeChatId === chat.id
                            ? "bg-gray-100 text-[var(--color-primary)]"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <button
                          onClick={() => handleOpenChat(chat.id)}
                          className="flex-1 flex items-center gap-3 text-left px-4 py-3 min-w-0"
                        >
                          <FiMessageSquare className="shrink-0" />

                          <span className="text-sm truncate">
                            {chat.title || "New Chat"}
                          </span>
                        </button>

                        <button
                          onClick={() => deleteChat(chat.id)}
                          className="opacity-0 group-hover:opacity-100 shrink-0 mr-2 w-8 h-8 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-500 flex items-center justify-center transition"
                          title="Delete chat"
                        >
                          <FiTrash2 size={15} />
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Bottom */}
          <div className="p-4 border-t border-gray-100">
            <button
              onClick={handleLogout}
              className="bg-[var(--color-primary)] text-white w-full py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
            >
              {sidebarOpen ? "Sign Out" : "↪"}
            </button>
          </div>
        </section>
      </aside>
    </>
  );
};

export default Sidebar;
