import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  Video,
  Trophy,
  User,
  LogIn,
  UserPlus,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: <Home size={20} /> },
    { to: "/episodes", label: "Episodes", icon: <Video size={20} /> },
    { to: "/leaderboard", label: "Leaderboard", icon: <Trophy size={20} /> },
  ];

  return (
    <div className="w-full flex justify-center fixed top-4 left-0 z-50">
      <div className="flex items-center justify-between gap-6 px-6 py-3 bg-[#0c1120]  text-white shadow-primary rounded-full backdrop-blur-md border border-gray-700/40">
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex flex-col items-center text-xs transition-colors ${
                    isActive ? "text-cyan-400" : "hover:text-cyan-400"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="flex items-center gap-1 px-3 py-1 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition text-sm"
              >
                <LogIn size={16} /> Login
              </button>
              <button
                onClick={() => navigate("/register")}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition text-sm"
              >
                <UserPlus size={16} /> Register
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/profile"
                className="flex items-center gap-1 text-cyan-400 hover:text-white transition text-sm"
              >
                <User size={18} /> Profile
              </NavLink>
              <button
                onClick={logout}
                className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition text-sm"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-[#0c1120] text-white rounded-xl shadow-lg p-4 border border-gray-700/40 flex flex-col gap-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex items-center gap-2 text-white hover:text-cyan-400"
              onClick={() => setIsOpen(false)}
            >
              {item.icon} {item.label}
            </NavLink>
          ))}

          {!user ? (
            <>
              <button
                onClick={() => { navigate("/login"); setIsOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition"
              >
                <LogIn size={16} /> Login
              </button>
              <button
                onClick={() => { navigate("/register"); setIsOpen(false); }}
                className="flex items-center gap-1 px-3 py-2 rounded-full bg-cyan-500 text-white hover:bg-cyan-600 transition"
              >
                <UserPlus size={16} /> Register
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/profile"
                className="flex items-center gap-1 text-cyan-400 hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                <User size={18} /> Profile
              </NavLink>
              <button
                onClick={() => { logout(); setIsOpen(false); }}
                className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition"
              >
                <LogOut size={18} /> Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
