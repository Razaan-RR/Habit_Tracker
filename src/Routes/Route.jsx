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
import HabitDetails from '../Pages/HabitDetails'
import UpdateHabit from '../Pages/UpdateHabit'

let router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch('https://trackify-server-azure.vercel.app/latest-habits'),
      },
      {
        path: '/public-habits',
        element: <PublicHabits></PublicHabits>,
        loader: () => fetch('https://trackify-server-azure.vercel.app/habits'),
      },
      {
        path: '/my-habits',
        element: (
          <ProtectedRoute>
            <MyHabits></MyHabits>
          </ProtectedRoute>
        ),
        loader: () => fetch('https://trackify-server-azure.vercel.app/habits'),
      },
      {
        path: '/add-habit',
        element: (
          <ProtectedRoute>
            <AddHabit></AddHabit>
          </ProtectedRoute>
        ),
      },
      {
        path: '/habit-details/:id',
        element: (
          <ProtectedRoute>
            <HabitDetails />
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://trackify-server-azure.vercel.app/habits/${params.id}`),
      },
      {
        path: '/update-habit/:id',
        element: (
          <ProtectedRoute>
            <UpdateHabit></UpdateHabit>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://trackify-server-azure.vercel.app/habits/${params.id}`),
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
