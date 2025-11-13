import { useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function HabitDetails() {
  const habit = useLoaderData()
  const navigate = useNavigate()
  const [habitData, setHabitData] = useState(habit)

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

  const handleMarkComplete = async () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Deep copy of completionHistory
  let updatedHistory = (habitData.completionHistory || []).map((entry) => ({
    completed: entry.completed,
    createdAt: entry.createdAt,
  }));

  const todayIndex = updatedHistory.findIndex((entry) => {
    const entryDate = new Date(entry.createdAt);
    entryDate.setHours(0, 0, 0, 0);
    return entryDate.getTime() === today.getTime();
  });

  if (todayIndex === -1) {
    updatedHistory.push({
      createdAt: new Date().toISOString(),
      completed: true,
    });
  } else if (!updatedHistory[todayIndex].completed) {
    updatedHistory[todayIndex].completed = true;
  } else {
    Swal.fire('Already done!', 'You have completed this habit today.', 'info');
    return;
  }

  try {
    // If this is a public habit (not yours), create a copy for the user
    if (habitData.ownerEmail !== auth.currentUser.email) {
      const newHabit = {
        ...habitData,
        ownerEmail: auth.currentUser.email, // assign to current user
        completionHistory: updatedHistory,
        _id: undefined, // let backend generate new ID
      };

      const response = await fetch('http://localhost:3000/habits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newHabit),
      });

      if (!response.ok) throw new Error('Failed to create habit for user');

      const createdHabit = await response.json();
      setHabitData(createdHabit); // update local state
    } else {
      // It's your habit, just update
      const { _id, ...fieldsToUpdate } = habitData;
      fieldsToUpdate.completionHistory = updatedHistory;

      const response = await fetch(`http://localhost:3000/habits/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fieldsToUpdate),
      });

      if (!response.ok) throw new Error('Failed to update habit');

      const updatedHabit = await response.json();
      setHabitData(updatedHabit);
    }

    Swal.fire('Good job!', 'Habit marked as complete!', 'success');
  } catch (error) {
    console.error(error);
    Swal.fire('Error', 'Something went wrong!', 'error');
  }
};



  return (
    <div className="min-h-screen py-12 bg-linear-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl border border-indigo-100 transform hover:scale-105 transition-all duration-500">
          <img
            src={imageUrl || 'https://i.ibb.co/1J20DV2P/user.png'}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-indigo-100 space-y-4">
            <h1 className="text-3xl font-bold text-indigo-700">{title}</h1>
            <p className="text-gray-700">{description}</p>

            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold">
                {category}
              </span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                Owner: {ownerName} ({ownerEmail})
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
                Created:{' '}
                {createdAt
                  ? new Date(createdAt).toLocaleDateString()
                  : 'Unknown'}
              </span>
            </div>

            <div>
              <h3 className="text-gray-700 font-semibold mb-1">
                Progress (Last 30 days)
              </h3>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div
                  className="h-4 rounded-full bg-linear-to-r from-emerald-400 to-emerald-600 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                {progress}% completed
              </p>
            </div>

            <div>
              <p className="text-gray-700 font-semibold">
                Current Streak:{' '}
                <span className="text-orange-500">{currentStreak} 🔥</span>
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleMarkComplete}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-2xl font-semibold transition-all"
            >
              Mark Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HabitDetails
