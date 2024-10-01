import { Link } from 'react-router-dom';
import NavLinkList from './NavLinkList'; // Import your NavLinkList component

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t border-gray-700 p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2 className="text-lg font-bold mb-4">Sweep Stakes</h2> 
          <p className="text-gray-400">
            Bringing you the best online sweepstakes and prediction market games.
          </p>
        </div>

        <div className="w-full sm:w-1/3 mb-6 sm:mb-0">
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <NavLinkList /> 
        </div>

        <div className="w-full sm:w-1/3">
          <h2 className="text-lg font-bold mb-4">Follow Us</h2>
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

      <div className="text-center border-t border-gray-700 mt-8 pt-4">
        <p className="text-gray-400">&copy; 2024 Sweep Stakes. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
