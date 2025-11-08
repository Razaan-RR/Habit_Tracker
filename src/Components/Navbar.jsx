import { Link, useNavigate } from 'react-router'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'

function Navbar() {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogOut = () => {
    logOut()
      .then(() => navigate('/'))
      .catch((err) => console.log(err))
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="shrink-0">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              Trackify
            </Link>
          </div>

          <div className="hidden lg:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
            <Link to="/public-habits" className="text-gray-700 hover:text-indigo-600 font-medium">
              Public Habits
            </Link>
            <Link to="/my-habits" className="text-gray-700 hover:text-indigo-600 font-medium">
              My Habits
            </Link>
            <Link to="/add-habit" className="text-gray-700 hover:text-indigo-600 font-medium">
              Add Habit
            </Link>
          </div>

          <div className="hidden lg:flex gap-4">
            {user ? (
              <>
                <span className="flex items-center gap-2">
                  <img
                    src={user.photoURL || 'https://i.ibb.co/1J20DV2P/user.png'}
                    alt={user.displayName || 'User'}
                    className="w-8 h-8 rounded-full object-cover border border-gray-300"
                  />
                  <span>{user.displayName || 'User'}</span>
                </span>
                <button
                  onClick={handleLogOut}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/auth/login" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                  Login
                </Link>
                <Link to="/auth/register" className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <div className="lg:hidden">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="lg:hidden bg-white border-t">
        <ul className="flex flex-col px-4 py-2 space-y-1">
          <Link to="/" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded">Home</Link>
          <Link to="/public-habits" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded">Public Habits</Link>
          <Link to="/my-habits" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded">My Habits</Link>
          <Link to="/add-habit" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded">Add Habit</Link>

          {user ? (
            <>
              <li className="flex items-center gap-2 px-3 py-2">
                <img
                  src={user.photoURL || 'https://i.ibb.co/1J20DV2P/user.png'}
                  alt={user.displayName || 'User'}
                  className="w-8 h-8 rounded-full object-cover border border-gray-300"
                />
                <span>{user.displayName || 'User'}</span>
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="w-full px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <Link to="/auth/login" className="block px-3 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-700">Login</Link>
              <Link to="/auth/register" className="block px-3 py-2 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50">Sign Up</Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
