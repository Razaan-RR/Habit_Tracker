function HabitBuildingPrinciples() {
  return (
    <section className="py-12 bg-indigo-50">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Habit Building Principles
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto px-4">
        Strong habits are built on simple principles. Follow these rules to stay
        consistent and grow every day.
      </p>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Principle 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-3">🌱</div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Start Small
          </h3>
          <p className="text-gray-600 text-sm">
            Focus on tiny actions. Small habits are easier to maintain and grow
            into powerful routines.
          </p>
        </div>

        {/* Principle 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-3">⏳</div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Stay Consistent
          </h3>
          <p className="text-gray-600 text-sm">
            Consistency beats perfection. Showing up daily matters more than
            doing it perfectly.
          </p>
        </div>

        {/* Principle 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-3">🎯</div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Track Honestly
          </h3>
          <p className="text-gray-600 text-sm">
            Be honest with your progress. Tracking builds awareness and
            accountability.
          </p>
        </div>

        {/* Principle 4 */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center hover:scale-105 transition-transform">
          <div className="text-4xl mb-3">🔥</div>
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Never Break Twice
          </h3>
          <p className="text-gray-600 text-sm">
            Missing one day is okay. Just don’t miss two in a row. Get back on
            track fast.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HabitBuildingPrinciples
