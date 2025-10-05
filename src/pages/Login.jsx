import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.email, form.password);
    if (success) navigate("/episodes");
    else alert("Invalid email or password");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1120] to-[#11172d] flex items-center justify-center px-4">
      <div className="bg-[#1a2238] p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Welcome Back 🌙
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center bg-[#0f1424] rounded-md px-3 py-2">
            <Mail className="text-cyan-400 mr-2" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-sm"
            />
          </div>

          <div className="flex items-center bg-[#0f1424] rounded-md px-3 py-2">
            <Lock className="text-cyan-400 mr-2" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md mt-4 transition-all"
          >
            Login
          </button>

          <p className="text-center text-gray-400 text-sm mt-3">
            Don’t have an account?{" "}
            <Link to="/register" className="text-cyan-400 hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
