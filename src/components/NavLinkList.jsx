import { NavLink } from "react-router-dom";

function NavLinkList() {
  return (
    <div>
      <nav className="space-x-6 whitespace-nowrap">
        <NavLink
          to="/home"
          className="text-sm transition duration-300 hover:text-gray-300 lg:text-lg"
        >
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          className="text-sm transition duration-300 hover:text-gray-300 lg:text-lg"
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/wallet"
          className="text-sm transition duration-300 hover:text-gray-300 lg:text-lg"
        >
          Wallet
        </NavLink>
        <NavLink
          to="/profile"
          className="text-sm transition duration-300 hover:text-gray-300 lg:text-lg"
        >
          Profile
        </NavLink>
        <NavLink
          to="/terms"
          className="text-sm transition duration-300 hover:text-gray-300 lg:text-lg"
        >
          Terms & Uses
        </NavLink>
      </nav>
    </div>
  );
}

export default NavLinkList;
