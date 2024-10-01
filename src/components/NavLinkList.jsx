
import { NavLink } from 'react-router-dom';

function NavLinkList() {
  return (
   
    <div>
        <nav className="space-x-6 dark:text-background">
          <NavLink
            to="/home"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/portfolio"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/wallet"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Wallet
          </NavLink>
          <NavLink
            to="/profile"
            className="text-lg hover:text-gray-300 transition duration-300"
          >
            Profile
          </NavLink>
        </nav>
      </div>
  
  )
}

export default NavLinkList