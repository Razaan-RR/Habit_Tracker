import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import HabitCard from './HabitCard'

function FeaturedHabits() {
  const [habits, setHabits] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const res = await axios.get('http://localhost:3000/habits')
        const newestPublicHabits = res.data
          .filter((habit) => habit.public)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 6)
        setHabits(newestPublicHabits)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchHabits()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-gray-500 text-lg">Loading habits...</p>
      </div>
    )
  }

  return (
    <section className="py-12 bg-indigo-50">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Featured Habits
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover the most inspiring habits shared by our community. Explore what
        others are building and find motivation to start your own journey toward
        consistency and growth.
      </p>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <HabitCard key={habit._id} habit={habit} />
        ))}
      </div>
    </section>
  )
}

export default FeaturedHabits
