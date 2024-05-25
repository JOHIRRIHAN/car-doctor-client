import  { useContext, useState } from "react";

import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";
import signupImage from '../../assets/images/login/login.svg'; // Ensure you have the correct path to your image
import { AuthContext } from "../../Provider/AuthProvider";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, loading } = useContext(AuthContext);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    try {
      const userCredential = await createUser(email, password);
      console.log("User created successfully:", userCredential);
    } catch (error) {
      console.error("Error creating user:", error);
      setError("Error creating user: " + error.message);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={signupImage} alt="Signup" />
        </div>
        <div className="card shrink-0 w-2/3 pl-52">
          <form onSubmit={handleSignUp} className="card-body border-2 rounded-xl">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-block bg-orange-700 text-white text-xl" type="submit" disabled={loading}>
                {loading ? "Creating..." : "Sign Up"}
              </button>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="flex items-center justify-center text-3xl py-2 gap-x-10 cursor-pointer">
              <Link to="#"><FaGoogle /></Link>
              <Link to="#"><FaFacebook /></Link>
              <Link to="#"><FaLinkedin /></Link>
            </div>
            <p className="text-center py-5">
              Already have an account? <Link className="text-orange-600 text-lg font-semibold" to={'/signin'}>Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
