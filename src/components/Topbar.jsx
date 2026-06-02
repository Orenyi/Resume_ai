import React, { useEffect, useState } from "react";
import { FiBell, FiMenu } from "react-icons/fi";
import useDashboardStore from "../store/dashboardStore";
import { supabase } from "../lib/supabaseClient";

const Topbar = ({ downloads = 0 }) => {
  const { openMobileSidebar } = useDashboardStore();
  const [initial, setInitial] = useState("U");

  useEffect(() => {
    const getUserInitial = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const name =
        user?.user_metadata?.full_name ||
        user?.user_metadata?.name ||
        user?.email ||
        "User";

      setInitial(name.charAt(0).toUpperCase());
    };

    getUserInitial();
  }, []);

  return (
    <section className="flex items-center justify-between gap-4 bg-white border border-gray-200 rounded-2xl px-4 py-4 shadow-sm">
      <div className="flex items-center gap-3">
        <button onClick={openMobileSidebar} className="lg:hidden">
          <FiMenu className="text-2xl" />
        </button>

        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Dashboard
          </h2>
          <p className="text-sm text-slate-500">
            Manage your resumes and exports
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-all duration-300">
          <FiBell className="text-lg" />

          {downloads > 0 && (
            <span className="absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-red-500 text-white text-[11px] font-bold flex items-center justify-center">
              {downloads > 9 ? "9+" : downloads}
            </span>
          )}
        </button>

        <div className="w-11 h-11 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center font-bold">
          {initial}
        </div>
      </div>
    </section>
  );
};

export default Topbar;
