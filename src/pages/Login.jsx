import { useNavigate } from "react-router-dom";
import { ShieldCheck, MapPin, Lock, Mail } from "lucide-react";
import { useState } from "react";

function Login() {
  console.log("Login page loaded");

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    console.log("Login button clicked");

    if (!email) {
      alert("Please enter your college email");
      return;
    }

    // 🔒 COLLEGE EMAIL CHECK
    if (!email.endsWith("@vishnu.edu.in")) {
      alert("Only official college email IDs are allowed");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("accio_logged_in", "true");
      localStorage.setItem("accio_user_email", email);
      console.log("User logged in with college email:", email);
      navigate("/home");
    }, 800);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 font-sans">

      {/* LEFT SECTION */}
      <div className="hidden md:flex flex-col justify-center bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900 text-white px-16">
        <h1 className="text-5xl font-extrabold mb-6 tracking-wide">ACCIO</h1>

        <p className="text-lg opacity-90 mb-10 leading-relaxed">
          A secure, campus-exclusive platform to manage lost and found items
          efficiently.
        </p>

        <ul className="space-y-5 text-sm opacity-90">
          <li className="flex items-center gap-3">
            <ShieldCheck size={18} />
            Verified college-only access
          </li>
          <li className="flex items-center gap-3">
            <MapPin size={18} />
            Campus-specific item tracking
          </li>
          <li className="flex items-center gap-3">
            <Lock size={18} />
            Secure authentication & data handling
          </li>
        </ul>

        <p className="mt-12 text-xs opacity-70">
          Firebase-ready · Demo authentication enabled
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center justify-center bg-gray-100 px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl px-10 py-12">

          <h2 className="text-3xl font-bold text-center text-gray-800">
            College Login
          </h2>

          <p className="text-sm text-gray-500 text-center mt-3 mb-10">
            Use your official college email ID
          </p>

          <div className="space-y-6">

            {/* Email (ENABLED) */}
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="college-id@vishnu.edu.in"
                className="w-full pl-10 py-2.5 text-sm border rounded-lg"
              />
            </div>

            {/* Password (disabled for demo) */}
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-gray-400 w-4 h-4" />
              <input
                disabled
                placeholder="Password"
                className="w-full pl-10 py-2.5 text-sm border rounded-lg bg-gray-100"
              />
            </div>

            {/* LOGIN BUTTON */}
            <button
              onClick={handleDemoLogin}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 py-3 rounded-xl border transition
                ${
                  loading
                    ? "bg-gray-200 opacity-50 cursor-not-allowed"
                    : "bg-white hover:bg-gray-50 shadow-sm"
                }`}
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-4 h-4"
                alt="Google"
              />
              <span className="text-sm font-medium text-gray-700">
                {loading ? "Signing in…" : "Continue with Google"}
              </span>
            </button>

            <p className="text-xs text-center text-gray-400">
              Demo authentication (Firebase-ready)
            </p>
          </div>

          <p className="mt-10 text-xs text-center text-gray-400">
            © 2026 ACCIO · College Lost & Found
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
