import { useLoaderData } from 'react-router'
import HabitItem from '../Components/HabitItem'

function MyHabits() {
  const data = useLoaderData()
  console.log(data)

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-indigo-25 py-12">
      <section className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700 tracking-wide">
          My Habits
        </h2>
        {data.map((habit) => (
          <div key={habit._id} className="mb-6">
            <HabitItem habit={habit}></HabitItem>
          </div>
        ))}
      </section>
    </div>
  )
}

export default MyHabits
