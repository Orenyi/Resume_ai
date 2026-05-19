import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--color-primary)" }}
        >
          Welcome to your Dashboard 🎉
        </h1>
        <p className="text-gray-500 text-sm mb-6">{user?.email}</p>
        <button
          onClick={handleLogout}
          className="px-6 py-3 rounded-xl text-white font-semibold"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Sign Out
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
