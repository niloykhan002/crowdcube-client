import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/campaigns"}>All Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"/addCampaign"}>Add New Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"/myCampaign"}>My Campaign</NavLink>
      </li>
      <li>
        <NavLink to={"/myDonations"}>My Donations</NavLink>
      </li>
    </>
  );
  const handleSignOut = () => {
    logOut();
  };
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost font-bold text-3xl">
          Crowdcube
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-4 items-center">
            <img
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              title={user.displayName}
              alt=""
            />
            <button onClick={handleSignOut} className="btn btn-neutral w-24">
              Log Out
            </button>
          </div>
        ) : (
          <div className="space-x-4">
            <Link to={"/login"} className="btn btn-neutral w-24">
              Login
            </Link>
            <Link to={"/register"} className="btn btn-neutral w-24">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
