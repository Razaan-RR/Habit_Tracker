import { Link } from "react-router"

function HabitCard({ habit }) {
  const { title, category, ownerName, completionHistory = [], imageUrl, _id } = habit

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
    <div className="bg-linear-to-r from-indigo-50 to-purple-50 border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <div className="relative h-48 w-full">
        <img
          src={imageUrl || 'https://i.ibb.co/1J20DV2P/user.png'}
          alt={title}
          className="object-cover w-full h-full"
        />
        <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          {category}
        </span>
      </div>
      <div className="p-5 space-y-3">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm">By: <span className="font-medium">{ownerName}</span></p>
        <div className="bg-gray-100 rounded-lg p-2 mt-2">
          <p className="text-orange-500 font-semibold text-sm">
            🔥 Current Streak: {currentStreak}
          </p>
        </div>
        <Link
          to={`/habit-details/${_id}`}
          className="block text-center mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-full transition"
        >
          See Details →
        </Link>
      </div>
    </div>
  )
}

export default HabitCard
