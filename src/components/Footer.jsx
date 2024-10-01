import NavLinkList from "@/components/NavLinkList";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-800 p-8 py-8 text-white">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="mb-6 w-full sm:mb-0 sm:w-1/3">
          <h2 className="mb-4 text-lg font-bold">Sweep Stakes</h2>
          <p className="text-gray-400">
            Bringing you the best online sweepstakes and prediction market
            games.
          </p>
        </div>

        <div className="mb-6 w-full sm:mb-0 sm:w-1/3">
          <h2 className="mb-4 text-lg font-bold">Quick Links</h2>
          <NavLinkList />
        </div>

        <div className="w-full sm:w-1/3">
          <h2 className="mb-4 text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <Link to="/facebook" className="text-gray-400 hover:text-gray-200">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M..." />
              </svg>
            </Link>
            <Link to="/twitter" className="text-gray-400 hover:text-gray-200">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M..." />
              </svg>
            </Link>
            <Link to="/instagram" className="text-gray-400 hover:text-gray-200">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M..." />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400">
          &copy; 2024 Sweep Stakes. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
