import { Link, useNavigate } from 'react-router'
import { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'

function Navbar() {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  )
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleLogOut = () => {
    logOut()
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-linear-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
            >
              Trackify
            </Link>
          </div>

          <div className="hidden lg:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/public-habits"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium"
            >
              Public Habits
            </Link>
            <Link
              to="/my-habits"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium"
            >
              My Habits
            </Link>
            <Link
              to="/add-habit"
              className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 font-medium"
            >
              Add Habit
            </Link>
          </div>

          <div className="hidden lg:flex gap-4 items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-yellow-400"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            {user ? (
              <>
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <img
                    src={user.photoURL || 'https://i.ibb.co/1J20DV2P/user.png'}
                    alt={user.displayName || 'User'}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                  />
                </button>

                {userDropdownOpen && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-12 right-0 bg-white dark:bg-gray-800 shadow-lg border dark:border-gray-700 rounded-md w-48 py-2 text-sm"
                  >
                    <div className="px-4 py-2 border-b dark:border-gray-700">
                      <p className="font-semibold dark:text-white">
                        {user.displayName || 'User'}
                      </p>
                      <p className="text-gray-500 text-xs">{user.email}</p>
                    </div>
                    <button
                      onClick={handleLogOut}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-yellow-400"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-8 h-8 text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
          <ul className="flex flex-col px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/public-habits"
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Public Habits
            </Link>
            <Link
              to="/my-habits"
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Habits
            </Link>
            <Link
              to="/add-habit"
              className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded"
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Habit
            </Link>

            {user ? (
              <li className="relative flex flex-col mt-2 px-3 py-2 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md">
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL || 'https://i.ibb.co/1J20DV2P/user.png'}
                    alt={user.displayName || 'User'}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium dark:text-white">
                      {user.displayName || 'User'}
                    </span>
                    <span className="text-gray-500 text-xs">{user.email}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogOut()
                    setMobileMenuOpen(false)
                  }}
                  className="mt-2 block w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700"
                >
                  Log out
                </button>
              </li>
            ) : (
              <>
                <Link
                  to="/auth/login"
                  className="block px-3 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700 mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="block px-3 py-2 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded hover:bg-indigo-50 dark:hover:bg-gray-800 mt-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
