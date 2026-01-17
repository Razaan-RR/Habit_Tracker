import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="bg-linear-to-r from-indigo-50 to-purple-50 text-gray-700 py-6 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">

        <div className="flex flex-col">
          <h2 className="text-3xl font-bold text-indigo-600 mb-1">Trackify</h2>
          <p className="text-sm leading-relaxed mb-2">
            Build better habits, stay consistent, and track your daily progress with ease.
          </p>
          <div className="flex flex-wrap gap-4 text-blue-600 text-sm">
            <Link to="/" className="hover:underline transition">Home</Link>
            <Link to="/public-habits" className="hover:underline transition">Public Habits</Link>
            <Link to="/my-habits" className="hover:underline transition">My Habits</Link>
            <Link to="/add-habit" className="hover:underline transition">Add Habit</Link>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-sm mb-2">Follow us on social media for more updates:</p>
          <div className="flex gap-3 mt-1">
            <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition">
              <FaFacebookF size={16} className="text-indigo-600" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition">
              <FaInstagram size={16} className="text-pink-500" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-blue-100 transition">
              <FaLinkedinIn size={16} className="text-blue-600" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
              <FaXTwitter size={16} className="text-gray-800" />
            </a>
          </div>
        </div>

      </div>

      <div className="mt-6 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">Trackify</span>. All rights reserved by Razaan Reza.
      </div>
    </footer>
  )
}

export default Footer
