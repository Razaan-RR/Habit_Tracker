import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function HabitDetails() {
  const habit = useLoaderData()
  const navigate = useNavigate()

  if (!habit) return <div className="text-center p-10">No Habit Selected</div>

  const {
    _id,
    title,
    description,
    category,
    imageUrl,
    completionHistory = [],
    ownerName,
    ownerEmail,
    createdAt,
  } = habit

  const calculateProgress = (history) => {
    if (!history.length) return 0
    const today = new Date()
    const last30Days = [...Array(30)].map((_, i) => {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      d.setHours(0, 0, 0, 0)
      return d.getTime()
    })
    const completedDays = history.map((entry) =>
      new Date(entry.createdAt).setHours(0, 0, 0, 0)
    )
    const completedCount = last30Days.filter((day) =>
      completedDays.includes(day)
    ).length
    return Math.round((completedCount / 30) * 100)
  }

  const progress = calculateProgress(completionHistory)

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

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/habits/${_id}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        })
          .then((res) => res.json())
          .then(() => {
            navigate('/my-habits')
            Swal.fire('Deleted!', 'Habit has been deleted.', 'success')
          })
          .catch((err) => console.error(err))
      }
    })
  }

  return (
    <div className="bg-linear-to-br from-indigo-50 to-indigo-25">
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-xl space-y-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-64 object-cover rounded-xl"
        />
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-600">{description}</p>
          <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
            {category}
          </span>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-700 font-semibold">
            Progress (Last 30 days)
          </h3>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div
              className="bg-emerald-500 h-4 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-600 text-sm">{progress}% completed</p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-700 font-semibold">
              Current Streak:{' '}
              <span className="text-orange-500">{currentStreak} 🔥</span>
            </p>
            <p className="text-gray-500 text-sm">
              Created by: {ownerName} ({ownerEmail})
            </p>
            <p className="text-gray-500 text-sm">
              Created on:{' '}
              {createdAt ? new Date(createdAt).toLocaleDateString() : 'Unknown'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleDelete}
              className="btn bg-red-500 hover:bg-red-600 border-none text-white px-4 py-2 rounded-lg"
            >
              Delete
            </button>
            <button className="btn bg-emerald-500 hover:bg-emerald-600 border-none text-white px-4 py-2 rounded-lg">
              Mark Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HabitDetails
