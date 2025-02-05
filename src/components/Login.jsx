import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import LoginImg from "../assets/LoginImg.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!email.includes("@")) {
      setError("Enter a valid email address");
      return;
    }

    console.log("Login Successful", { email, password });
    navigate("/dashboard");
  };

  return (
    <section className="bg-[#f8eeb8] ">
      <div className="relative w-full h-screen flex md:flex-row items-center justify-center md:w-[1200px] shadow-xl bg-white mx-auto">
        <div className="absolute inset-0 md:relative w-full md:w-[500px] md:h-[600px] ">
          <img
            src={LoginImg}
            alt="Login Background"
            className="w-full h-full object-cover md:rounded-xl"
          />
        </div>

        <div className="absolute  md:relative bg-white/80 md:bg-white p-6 rounded-lg shadow-md w-[90%] max-w-sm md:w-1/3 z-10 md:translate-x-4">
          <h2 className="text-3xl font-semibold mb-6 text-[#FFD700] text-center">
            Welcome to Fitsphere
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>

            <p className="mt-4 text-sm text-gray-600 text-center">
              Don't have an account?{" "}
              <a href="#" className="text-blue-500">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
