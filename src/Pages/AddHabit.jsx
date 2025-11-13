import { useContext, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import toast from 'react-hot-toast'

function AddHabit() {
  const { user } = useContext(AuthContext)
  const [habit, setHabit] = useState({
    title: '',
    description: '',
    category: 'Morning',
    reminderTime: '',
    imageUrl: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setHabit({ ...habit, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newHabit = {
      ...habit,
      ownerName: user?.displayName,
      ownerEmail: user?.email,
      public: false,
      completionHistory: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    fetch('https://trackify-server-azure.vercel.app/habits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newHabit),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast.success('Habit added successfully!')
        setHabit({
          title: '',
          description: '',
          category: 'Morning',
          reminderTime: '',
          imageUrl: '',
        })
      })
      .catch((err) => {
        console.error(err)
        toast.error('Something went wrong')
      })
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 to-indigo-25 py-12">
      <section className="w-11/12 max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700 tracking-wide">
          Add a New Habit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Habit Title
            </label>
            <input
              type="text"
              name="title"
              value={habit.title}
              onChange={handleChange}
              placeholder="Enter habit title"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={habit.description}
              onChange={handleChange}
              placeholder="Describe your habit..."
              rows="3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Category
            </label>
            <select
              name="category"
              value={habit.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option>Morning</option>
              <option>Work</option>
              <option>Fitness</option>
              <option>Evening</option>
              <option>Study</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Reminder Time
            </label>
            <input
              type="time"
              name="reminderTime"
              value={habit.reminderTime}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={habit.imageUrl}
              onChange={handleChange}
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              User Name
            </label>
            <input
              type="text"
              value={user?.displayName || ''}
              readOnly
              className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              User Email
            </label>
            <input
              type="email"
              value={user?.email || ''}
              readOnly
              className="w-full border border-gray-300 bg-gray-100 rounded-lg px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add Habit
          </button>
        </form>
      </section>
    </div>
  )
}

export default AddHabit
