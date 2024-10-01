import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700 bg-gray-800 p-8 text-white">
      <div className="container mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0">
        {/* Branding Section */}
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

        {/* Social Media Icons */}
        <div className="w-full md:w-1/3">
          <h2 className="mb-4 text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24H12v-9.294H9.293v-3.623H12v-2.671c0-2.733 1.668-4.222 4.102-4.222 1.164 0 2.167.087 2.457.125v2.85h-1.687c-1.323 0-1.58.63-1.58 1.553v2.364h3.162l-.413 3.623h-2.749V24h5.387C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.95.555-2.005.959-3.127 1.184-.897-.955-2.178-1.555-3.594-1.555-2.719 0-4.92 2.206-4.92 4.917 0 .39.045.765.127 1.124-4.088-.205-7.719-2.165-10.148-5.144-.424.723-.666 1.561-.666 2.475 0 1.71.87 3.214 2.188 4.096-.807-.026-1.566-.248-2.23-.617v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.621-.03-.921-.086.631 1.953 2.445 3.376 4.6 3.415-1.68 1.316-3.809 2.101-6.102 2.101-.395 0-.785-.023-1.17-.067 2.179 1.397 4.768 2.214 7.557 2.214 9.054 0 14.004-7.498 14.004-13.986 0-.213-.004-.425-.014-.637.962-.693 1.8-1.562 2.46-2.549z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 50 50"
                className="h-6 w-6 fill-current"
              >
                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
              </svg>
            </a>
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
