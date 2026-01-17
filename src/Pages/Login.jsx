import { useContext, useState } from 'react'
import { Link } from 'react-router'
import { useNavigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import app from '../Firebase/firebase.config'
import { FcGoogle } from 'react-icons/fc'

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const demoUser = {
  email: 'user@demo.com',
  password: '123456',
}

function Login() {
  const { signIn, setUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user
        toast.success('Google Login successful!')
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error('Google login error:', error.message)
        toast.error('Google login failed. Try again.')
      })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    setError('')

    signIn(email, password)
      .then(async (result) => {
        await result.user.reload()
        setUser(auth.currentUser)
        toast.success('Login successful!')
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error('Login error:', error.message)
        setError('Invalid email or password.')
        toast.error('Login failed. Please check your credentials.')
      })
  }

  const fillDemoCredentials = () => {
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')

    emailInput.value = demoUser.email
    passwordInput.value = demoUser.password
    toast.success('Demo user credentials filled')
  }

  return (
    <section className="flex justify-center items-center min-h-screen bg-linear-to-br from-indigo-100 via-white to-indigo-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Login to continue building your habits
        </p>

        <div className="mb-6">
          <button
            onClick={fillDemoCredentials}
            type="button"
            className="w-full bg-indigo-100 text-indigo-700 font-semibold py-2 rounded-md hover:bg-indigo-200 transition"
          >
            Use Demo Account
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-indigo-200 focus:outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-indigo-600"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-9 0-1.042.178-2.046.513-3M3 3l18 18"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.879 9.879a3 3 0 104.242 4.242"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        <div className="my-6 flex items-center justify-center">
          <div className="h-px bg-gray-300 w-full"></div>
          <span className="px-3 text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-300 w-full"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-md hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} />
          <span className="font-medium text-gray-700">
            Continue with Google
          </span>
        </button>

        <p className="text-center text-gray-600 mt-8">
          Don't have an account?{' '}
          <Link
            to="/auth/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
      <Toaster position="top-center" />
    </section>
  )
}

export default Login
