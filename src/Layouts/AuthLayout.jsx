import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

function AuthLayout() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="shadow-sm bg-white">
        <Navbar />
      </header>

      <main className="flex-1 max-w-6xl w-11/12 mx-auto py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
