import { useLoaderData } from 'react-router'
import HabitCard from '../Components/HabitCard'
import { useEffect, useState } from 'react'

function PublicHabits() {
  const data = useLoaderData() || []

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [categories, setCategories] = useState(['All'])

  useEffect(() => {
    fetch('https://trackify-server-azure.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error('Error loading categories:', err))
  }, [])

  const filteredHabits = data
    .filter((habit) =>
      selectedCategory === 'All' ? true : habit.category === selectedCategory
    )
    .filter((habit) => habit.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-indigo-25 py-12">
      <section className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-700 tracking-wide">
          Browse Public Habits
        </h2>

        <div className="flex flex-col sm:flex-row justify-between mb-6 gap-4">
          <input
            type="text"
            placeholder="Search habits..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-1/4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredHabits.length > 0 ? (
            filteredHabits.map((habit) => (
              <HabitCard key={habit._id} habit={habit} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No habits found.
            </p>
          )}
        </div>
      </section>
    </div>
  )
}

export default PublicHabits
