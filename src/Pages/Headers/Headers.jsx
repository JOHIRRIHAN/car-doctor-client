import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import { FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Headers = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log("users", user)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const navLink = (
    <>
      <Link className="text-base font-semibold" to={"/"}>
        <li>
          <a>Home</a>
        </li>
      </Link>
      <Link className="text-base font-semibold" to={"/about"}>
        <li>
          <a>About</a>
        </li>
      </Link>
      <Link className="text-base font-semibold" to={"/service"}>
        <li>
          <a>Service</a>
        </li>
      </Link>
      <Link className="text-base font-semibold" to={"/carddetails"}>
        <li>
          <a>Card Details</a>
        </li>
      </Link>
      <Link className="text-base font-semibold" to={"/contact"}>
        <li>
          <a>Contact</a>
        </li>
      </Link>
      {user?.email ? (
        <li className="text-base font-semibold">
          <a onClick={handleLogOut}>LogOut</a>
        </li>
      ) : (
        <li className="text-base font-semibold">
          <Link to={"/signin"}>
            <a>LogIn</a>
          </Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost w-28 ">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end text-xl gap-x-5">
        <FaShoppingBag />
        <CiSearch />

        <a className="btn border-2 border-[#FF3811] text-[#FF3811]">
          AppointMent
        </a>
      </div>
    </div>
  );
};

export default Headers;
