import { NavLink } from "react-router-dom";

function Navbar() {
  const base =
    "px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600";

  const active =
    "px-3 py-2 text-sm font-semibold text-indigo-600 border-b-2 border-indigo-600";

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-extrabold text-indigo-700">
          ACCIO
        </h1>

        <div className="flex gap-6">
          <NavLink to="/home" className={({ isActive }) => isActive ? active : base}>
            Home
          </NavLink>

          <NavLink to="/leaderboard" className={({ isActive }) => isActive ? active : base}>
            Leaderboard
          </NavLink>

          <NavLink to="/matches" className={({ isActive }) => isActive ? active : base}>
            Matches
          </NavLink>

          <NavLink to="/report-lost" className={({ isActive }) => isActive ? active : base}>
            Report Lost
          </NavLink>

          <NavLink to="/report-found" className={({ isActive }) => isActive ? active : base}>
            Report Found
          </NavLink>

          {/* ✅ ADMIN */}
          <NavLink to="/admin" className={({ isActive }) => isActive ? active : base}>
            Admin
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
