import { useLoaderData } from 'react-router'
import HabitCard from '../Components/HabitCard'

function PublicHabits() {
  const data = useLoaderData()
  console.log(data)

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-indigo-25 py-12">
      <section className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-indigo-700 tracking-wide">
          Browse Public Habits
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {(data || [])
            .filter((habit) => habit.public)
            .map((habit) => (
              <HabitCard key={habit._id} habit={habit} />
            ))}
        </div>
        
      </section>
    </div>
  )
}

export default PublicHabits
