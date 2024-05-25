import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {
    const {signIn} = useContext(AuthContext)
    const handleLogIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = { email, password};
        console.log(data)
        signIn(email, password)
        .then(result =>{
            console.log(result.user)
        }).catch(error =>{
            console.log(error)
        })
    }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col  lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0  w-2/3 pl-52 ">
          <form onSubmit={handleLogIn} className="card-body border-2 rounded-xl">
            <h1 className="text-5xl font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-block bg-orange-700 text-white text-xl" type="submit" value="LogIn" />
            </div>
            <div className="flex item-center justify-center text-3xl py-2 gap-x-10 cursor-pointer">
            <Link><FaGoogle /></Link>
            <Link> <FaFacebook /></Link>
            <Link><FaLinkedin /></Link>
            </div>
           <p className="text-center py-5">New to card Doctors?  <Link className="text-orange-600 text-lg font-semibold" to={'/signup'}>SignUp</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
