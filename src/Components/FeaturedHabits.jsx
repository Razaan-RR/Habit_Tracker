import { useLoaderData } from 'react-router'
import HabitCard from './HabitCard'
import LoadingSpinner from './LoadingSpinner'

function FeaturedHabits() {
  const data = useLoaderData()
  console.log(data)
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
        {data.map(habit=><HabitCard key={habit._id} habit={habit}></HabitCard>)}
      </div>
    </section>
  )
}

export default FeaturedHabits
