import { useLoaderData } from 'react-router'
import HabitItem from '../Components/HabitItem'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../Firebase/firebase.config'
import { useEffect, useState } from 'react'
import LoadingSpinner from '../Components/LoadingSpinner'

const auth = getAuth(app)

function MyHabits() {
  const data = useLoaderData()
  const [userEmail, setUserEmail] = useState(null)
  const [filteredHabits, setFilteredHabits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserEmail(currentUser?.email || null)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (userEmail && data?.length) {
      setFilteredHabits(data.filter((habit) => habit.ownerEmail === userEmail))
    } else {
      setFilteredHabits([])
    }
  }, [userEmail, data])

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-indigo-25 py-12">
      <section className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700 tracking-wide">
          My Habits
        </h2>

        {userEmail ? (
          filteredHabits.length > 0 ? (
            filteredHabits.map((habit) => (
              <div key={habit._id} className="mb-6">
                <HabitItem habit={habit} />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No habits found for you.
            </p>
          )
        ) : (
          <p className="text-center text-gray-500">
            Please log in to view your habits.
          </p>
        )}
      </section>
    </div>
  )
}

export default MyHabits
