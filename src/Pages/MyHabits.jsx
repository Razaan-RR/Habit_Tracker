import { useLoaderData } from 'react-router'
import HabitItem from '../Components/HabitItem'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../Firebase/firebase.config'
import { useEffect, useState } from 'react'

const auth = getAuth(app)

function MyHabits() {
  const data = useLoaderData()
  const [userEmail, setUserEmail] = useState(null)
  const [filteredHabits, setFilteredHabits] = useState([])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserEmail(currentUser.email)
      } else {
        setUserEmail(null)
      }
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (userEmail && data?.length) {
      const myHabits = data.filter(
        (habit) => habit.ownerEmail === userEmail
      )
      setFilteredHabits(myHabits)
    } else {
      setFilteredHabits([])
    }
  }, [userEmail, data])

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
                <HabitItem habit={habit}></HabitItem>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No habits found for you.</p>
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
