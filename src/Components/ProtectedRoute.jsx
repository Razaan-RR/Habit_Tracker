import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import LoadingSpinner from './LoadingSpinner'

function ProtectedRoute({ children }) {
  const { user, loading  } = useContext(AuthContext)
  const location = useLocation()

  if (loading) {
    return <LoadingSpinner />
  }
  
  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  return children
}

export default ProtectedRoute
