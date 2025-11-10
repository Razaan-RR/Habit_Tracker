import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home'
import PublicHabits from '../Pages/PublicHabits'
import MyHabits from '../Pages/MyHabits'
import AddHabit from '../Pages/AddHabit'
import MainLayout from '../Layouts/MainLayout'
import AuthLayout from '../Layouts/AuthLayout'
import ErrorPage from '../Pages/ErrorPage'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import ProtectedRoute from '../Components/ProtectedRoute'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/public-habits',
        element: <PublicHabits></PublicHabits>,
        loader: () => fetch('http://localhost:3000/habits'),
      },
      {
        path: '/my-habits',
        element: (
          <ProtectedRoute>
            <MyHabits></MyHabits>
          </ProtectedRoute>
        ),
        loader: () => fetch('http://localhost:3000/habits'),
      },
      {
        path: '/add-habit',
        element: (
          <ProtectedRoute>
            <AddHabit></AddHabit>
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      },
    ],
  },
])

export default router
