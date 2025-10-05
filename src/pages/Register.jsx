import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      register(form.name, form.email, form.password);
      navigate("/episodes");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c1120] to-[#11172d] flex items-center justify-center px-4">
      <div className="bg-[#1a2238] p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
  {/* Name */}
  <div className="flex items-center bg-[#0f1424] rounded-md px-3 py-2">
    <User className="text-cyan-400 mr-2" size={18} />
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      required
      value={form.name}
      onChange={handleChange}
      className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
    />
  </div>

  {/* Email */}
  <div className="flex items-center bg-[#0f1424] rounded-md px-3 py-2">
    <Mail className="text-cyan-400 mr-2" size={18} />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      required
      value={form.email}
      onChange={handleChange}
      className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
    />
  </div>

  {/* Password */}
  <div className="flex items-center bg-[#0f1424] rounded-md px-3 py-2">
    <Lock className="text-cyan-400 mr-2" size={18} />
    <input
      type="password"
      name="password"
      placeholder="Password"
      required
      value={form.password}
      onChange={handleChange}
      className="w-full bg-transparent text-white placeholder-gray-400 outline-none text-sm "
    />
  </div>

  <button
    type="submit"
    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-md mt-4 transition-all"
  >
    Register
  </button>

  <p className="text-center text-gray-400 text-sm mt-3">
    Already have an account?{" "}
    <Link to="/login" className="text-cyan-400 hover:underline">
      Login
    </Link>
  </p>
</form>

      </div>
    </div>
  );
}
