import { Link, NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaReddit,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-600 bg-gray-800 px-8 py-8 text-white md:pb-10 md:pt-20">
      <div className="container mx-auto flex flex-col justify-between space-y-8 md:flex-row md:space-y-0">
        {/* Company Info */}
        <div className="w-full md:w-1/3 md:pr-2">
          <h2 className="mb-4 text-lg font-bold">Sweep Stakes</h2>
          <p className="text-gray-400">
            Bringing you the best online sweepstakes and prediction market
            games.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/3">
          <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
          <nav className="flex flex-wrap gap-4">
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
          </nav>
        </div>

        {/* Follow Us */}
        <div className="w-full md:w-1/3">
          <h2 className="mb-4 text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4 text-gray-400">
            <Link to="/facebook" className="hover:text-gray-200">
              <FaFacebookF className="h-6 w-6" />
            </Link>
            <Link to="/twitter" className="hover:text-gray-200">
              <FaTwitter className="h-6 w-6" />
            </Link>
            <Link to="/instagram" className="hover:text-gray-200">
              <FaInstagram className="h-6 w-6" />
            </Link>
            <Link to="/discord" className="hover:text-gray-200">
              <FaDiscord className="h-6 w-6" />
            </Link>
            <Link to="/youtube" className="hover:text-gray-200">
              <FaYoutube className="h-6 w-6" />
            </Link>
            <Link to="/reddit" className="hover:text-gray-200">
              <FaReddit className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">
          &copy; 2024 Sweep Stakes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
