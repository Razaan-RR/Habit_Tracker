import { Link } from "react-router"

function HabitItem({ habit }) {
  const { title, category, completionHistory = [], createdAt, _id } = habit

  const calculateStreak = (history) => {
    if (!history.length) return 0

    const sortedDates = history
      .map((entry) => new Date(entry.createdAt))
      .sort((a, b) => b - a)

    let streak = 1
    let lastDate = new Date(sortedDates[0])
    lastDate.setHours(0, 0, 0, 0)

    for (let i = 1; i < sortedDates.length; i++) {
      const currentDate = new Date(sortedDates[i])
      currentDate.setHours(0, 0, 0, 0)

      const diff = (lastDate - currentDate) / (1000 * 60 * 60 * 24)

      if (diff === 1) {
        streak++
        lastDate = currentDate
      } else {
        break
      }
    }

    return streak
  }

  const currentStreak = calculateStreak(completionHistory)

  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white mb-6">
      <table className="table w-full">
        <thead>
          <tr className="bg-indigo-100 text-indigo-800 text-base font-semibold">
            <th className="py-4">Title</th>
            <th>Category</th>
            <th>Current Streak</th>
            <th>Created Date</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-indigo-50 transition-all duration-200">
            <td className="font-medium text-gray-800">{title}</td>
            <td className="text-gray-600">{category}</td>
            <td className="text-orange-500 font-semibold">
              {currentStreak} 🔥
            </td>
            <td className="text-gray-500">
              {createdAt ? new Date(createdAt).toLocaleDateString() : 'Unknown'}
            </td>
            <td className="flex gap-2 justify-center py-3">
              <button className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-none text-white">
                Update
              </button>
              <button className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white">
                Delete
              </button>
              <button className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 border-none text-white">
                Mark Complete
              </button>
              {/* <Link to={`/habit-details/${_id}`} className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 border-none text-white">
                See Details
              </Link> */}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HabitItem
