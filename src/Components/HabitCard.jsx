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
    <div className="card bg-linear-to-br from-blue-100 to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 rounded-2xl">
      <figure className="px-5 pt-5">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body items-start text-left">
        <h2 className="card-title text-lg font-semibold text-gray-800">
          {title}
        </h2>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="text-sm text-gray-600">{ownerName}</p>
        <div className="mt-3">
          <p className="text-gray-700 text-sm">
            Current Streak:{' '}
            <span className="font-medium text-orange-500">
              {currentStreak}🔥
            </span>
          </p>
        </div>
        <div className="card-actions mt-4 w-full">
          <Link to={`/habit-details/${_id}`} className="btn btn-primary w-full rounded-full">
            See Details →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HabitCard
