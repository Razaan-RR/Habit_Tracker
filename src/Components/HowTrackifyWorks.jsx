function HowTrackifyWorks() {
  return (
    <section className="py-12 bg-indigo-50">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        How Trackify Works
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Building better habits doesn’t have to be complicated. Trackify keeps it
        simple so you can focus on consistency and growth.
      </p>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-5xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Create Your Habit
          </h3>
          <p className="text-gray-600">
            Add a habit you want to build, set your goal, and make it part of
            your daily routine.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-5xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Track Daily Progress
          </h3>
          <p className="text-gray-600">
            Mark your habit as completed every day and stay accountable to
            yourself.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <div className="text-5xl mb-4">🔥</div>
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">
            Build Streaks & Stay Motivated
          </h3>
          <p className="text-gray-600">
            Watch your streaks grow, celebrate milestones, and stay motivated on
            your journey.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowTrackifyWorks
