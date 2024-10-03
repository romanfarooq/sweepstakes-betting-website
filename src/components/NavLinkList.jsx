import { NavLink } from "react-router-dom";

function NavLinkList() {
  return (
    <div>
      <nav className="space-x-6 whitespace-nowrap">
        <NavLink
          to="/home"
          className="text-lg transition duration-300 hover:text-gray-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/portfolio"
          className="text-lg transition duration-300 hover:text-gray-300"
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/wallet"
          className="text-lg transition duration-300 hover:text-gray-300"
        >
          Wallet
        </NavLink>
        <NavLink
          to="/profile"
          className="text-lg transition duration-300 hover:text-gray-300"
        >
          Profile
        </NavLink>
        <NavLink
          to="/terms"
          className="text-lg transition duration-300 hover:text-gray-300"
        >
          Terms & Uses
        </NavLink>
      </nav>
    </div>
  );
}

export default NavLinkList;
