import { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import Swal from 'sweetalert2'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { getAuth } from 'firebase/auth'
import app from '../Firebase/firebase.config'

const auth = getAuth(app)

function HabitItem({ habit }) {
  const {
    title,
    imageUrl,
    category,
    completionHistory = [],
    createdAt,
    _id,
  } = habit
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
      if (diff === 1) streak++, (lastDate = currentDate)
      else break
    }
    return streak
  }

  const currentStreak = calculateStreak(habitData.completionHistory)

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
        fetch(`https://trackify-server-azure.vercel.app/habits/${_id}`, {
          method: 'DELETE',
        })
          .then(() => {
            navigate('/my-habits')
            Swal.fire('Deleted!', 'Habit deleted.', 'success')
          })
          .catch((err) => console.log(err))
      }
    })
  }

  const handleMarkComplete = async () => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const alreadyCompleted = habitData.completionHistory.some((entry) => {
      const entryDate = new Date(entry.createdAt)
      entryDate.setHours(0, 0, 0, 0)
      return entryDate.getTime() === today.getTime()
    })
    if (alreadyCompleted) return Swal.fire('Already done!', '', 'info')

    const updatedHistory = [
      ...habitData.completionHistory,
      { createdAt: new Date().toISOString() },
    ]
    setHabitData({ ...habitData, completionHistory: updatedHistory })

    try {
      await fetch(`https://trackify-server-azure.vercel.app/habits/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completionHistory: updatedHistory }),
      })
      Swal.fire('Good job!', 'Habit marked as complete!', 'success')
    } catch {
      Swal.fire('Error', 'Something went wrong!', 'error')
    }
  }

  const isCompletedToday = (() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return habitData.completionHistory.some((entry) => {
      const entryDate = new Date(entry.createdAt)
      entryDate.setHours(0, 0, 0, 0)
      return entryDate.getTime() === today.getTime()
    })
  })()

  return (
    <div className="rounded-2xl shadow-xl bg-white mb-6 overflow-x-auto">
      <table className="table-auto w-full border-collapse min-w-[600px] md:min-w-full">
        <thead>
          <tr className="bg-indigo-100 text-indigo-800 text-sm md:text-base font-semibold">
            <th className="w-1/6 py-2 pl-4 text-left wrap-break-word">Title</th>
            <th className="w-1/6 text-left wrap-break-word">Category</th>
            <th className="w-1/6 text-center">Current Streak</th>
            <th className="w-1/6 text-center">Created Date</th>
            <th className="w-1/6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-indigo-50 transition-all duration-200">
            <td
              className="font-medium text-gray-800 wrap-break-word pl-4"
              data-tooltip-id="main-tooltip"
              data-tooltip-html={`<img src="${imageUrl}" style="width:150px;height:150px;object-fit:cover;" />`}
            >
              {title}
            </td>
            <td
              className="text-gray-600 wrap-break-word"
              data-tooltip-id="main-tooltip"
              data-tooltip-html={`<img src="${imageUrl}" style="width:150px;height:150px;object-fit:cover;" />`}
            >
              {category}
            </td>
            <td
              className="text-orange-500 font-semibold text-center"
              data-tooltip-id="main-tooltip"
              data-tooltip-html={`<img src="${imageUrl}" style="width:150px;height:150px;object-fit:cover;" />`}
            >
              {currentStreak} 🔥
            </td>
            <td
              className="text-gray-500 text-center"
              data-tooltip-id="main-tooltip"
              data-tooltip-html={`<img src="${imageUrl}" style="width:150px;height:150px;object-fit:cover;" />`}
            >
              {createdAt ? new Date(createdAt).toLocaleDateString() : 'Unknown'}
            </td>
            <td className="text-center py-3 flex justify-center gap-2 pr-4">
              <Link
                to={`/update-habit/${_id}`}
                className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-none text-white w-auto sm:w-auto md:w-24 lg:w-28" // ✅ added
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
      <Tooltip
        id="main-tooltip"
        place="right"
        style={{
          position: 'fixed',
          top: '20%',
          right: '5%',
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

export default HabitItem
