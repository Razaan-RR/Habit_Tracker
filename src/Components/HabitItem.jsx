import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Swal from 'sweetalert2'

function HabitItem({ habit }) {
  const { title, category, completionHistory = [], createdAt, _id } = habit

  const navigate = useNavigate()
  const [habitData, setHabitData] = useState(habit)

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
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            navigate('/my-habits')
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file has been deleted.',
              icon: 'success',
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    })
  }

  // ✅ Handle Mark Complete
  const handleMarkComplete = async () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Prevent same-day duplicates
    const alreadyCompleted = completionHistory.some((entry) => {
      const entryDate = new Date(entry.createdAt)
      entryDate.setHours(0, 0, 0, 0)
      return entryDate.getTime() === today.getTime()
    })

    if (alreadyCompleted) {
      Swal.fire(
        'Already done!',
        'You have already completed this habit today.',
        'info'
      )
      return
    }

    // Update locally first (instant feedback)
    const updatedHistory = [
      ...completionHistory,
      { createdAt: new Date().toISOString() },
    ]
    setHabitData({ ...habitData, completionHistory: updatedHistory })

    try {
      const res = await fetch(`http://localhost:3000/habits/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completionHistory: updatedHistory }),
      })

      const data = await res.json()

      if (data.success) {
        Swal.fire('Good job!', 'Habit marked as complete!', 'success')
      } else {
        Swal.fire('Error', 'Failed to update habit.', 'error')
      }
    } catch (error) {
      console.error(error)
      Swal.fire('Error', 'Something went wrong!', 'error')
    }
  }

  // 🔄 Check if today already marked
  const isCompletedToday = (() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return completionHistory.some((entry) => {
      const entryDate = new Date(entry.createdAt)
      entryDate.setHours(0, 0, 0, 0)
      return entryDate.getTime() === today.getTime()
    })
  })()

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
              <Link
                to={`/update-habit/${_id}`}
                className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-none text-white"
              >
                Update
              </Link>
              <button
                onClick={handleDelete}
                className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white"
              >
                Delete
              </button>
              <button
                onClick={handleMarkComplete}
                disabled={isCompletedToday}
                className={`btn btn-sm ${
                  isCompletedToday
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-emerald-500 hover:bg-emerald-600'
                } border-none text-white`}
              >
                {isCompletedToday ? 'Completed ✅' : 'Mark Complete'}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HabitItem
