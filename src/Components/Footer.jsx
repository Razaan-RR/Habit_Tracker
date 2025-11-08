import { Link } from 'react-router'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="bg-linear-to-r from-indigo-50 to-purple-50 text-gray-700 py-12 px-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold text-indigo-600 mb-3">Trackify</h2>
          <p className="text-sm leading-relaxed">
            Build better habits, stay consistent, and track your daily progress with ease.
          </p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-indigo-500 transition">Home</Link>
            </li>
            <li>
              <Link to="/public-habits" className="hover:text-indigo-500 transition">Public Habits</Link>
            </li>
            <li>
              <Link to="/my-habits" className="hover:text-indigo-500 transition">My Habits</Link>
            </li>
            <li>
              <Link to="/add-habit" className="hover:text-indigo-500 transition">Add Habit</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Connect With Us</h3>
          <p className="text-sm mb-2">Follow us on social media for updates and tips:</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition">
              <FaFacebookF size={18} className="text-indigo-600" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition">
              <FaInstagram size={18} className="text-pink-500" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-blue-100 transition">
              <FaLinkedinIn size={18} className="text-blue-600" />
            </a>
            <a href="#" className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition">
              <FaXTwitter size={18} className="text-gray-800" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-indigo-600">Trackify</span>. All rights reserved by Razaan Reza.
      </div>
    </footer>
  )
}

export default Footer
