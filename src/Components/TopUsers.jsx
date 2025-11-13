import { useEffect, useState } from 'react'
import HabitCard from '../Components/HabitCard'

function TopUsers() {
  const [topUsers, setTopUsers] = useState([])

  useEffect(() => {
    fetch('https://trackify-server-azure.vercel.app/habits')
      .then((res) => res.json())
      .then((data) => {
        // Helper: calculate streak for each habit
        const calculateStreak = (history) => {
          if (!history.length) return 0

          const sorted = history
            .map((e) => new Date(e.createdAt))
            .sort((a, b) => b - a)

          let streak = 1
          let lastDate = new Date(sorted[0])
          lastDate.setHours(0, 0, 0, 0)

          for (let i = 1; i < sorted.length; i++) {
            const currentDate = new Date(sorted[i])
            currentDate.setHours(0, 0, 0, 0)
            const diff = (lastDate - currentDate) / (1000 * 60 * 60 * 24)
            if (diff === 1) {
              streak++
              lastDate = currentDate
            } else break
          }

          return streak
        }

        // Step 1: calculate streaks for all habits
        const habitsWithStreaks = data.map((h) => ({
          ...h,
          streak: calculateStreak(h.completionHistory || []),
        }))

        // Step 2: group by ownerEmail → keep max streak habit
        const userBestHabits = {}
        for (const habit of habitsWithStreaks) {
          const user = habit.ownerEmail
          if (
            !userBestHabits[user] ||
            habit.streak > userBestHabits[user].streak
          ) {
            userBestHabits[user] = habit
          }
        }

        // Step 3: convert to array and sort descending
        const sorted = Object.values(userBestHabits).sort(
          (a, b) => b.streak - a.streak
        )

        // Step 4: take top 3
        setTopUsers(sorted.slice(0, 3))
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="bg-indigo-50 py-16 px-5">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        🏆 Top 3 Habit Champions
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        These top performers have shown incredible consistency in building their
        habits! Here are the users with the longest current streaks — true
        champions of discipline and growth.
      </p>
      {topUsers.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          Loading top users...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {topUsers.map((habit, index) => (
            <div
              key={habit._id}
              className="relative transform hover:-translate-y-2 transition duration-300"
            >
              {/* Ranking Badge */}
              <div className="absolute -top-4 -right-4 bg-indigo-600 text-white w-10 h-10 flex items-center justify-center text-lg font-bold rounded-full shadow-lg">
                {index + 1}
              </div>
              <HabitCard habit={habit} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default TopUsers
