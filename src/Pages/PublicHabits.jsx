function PublicHabits() {
  return (
    <div className="min-h-screen bg-indigo-50 py-12">
      <section className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-10 text-center text-indigo-700 tracking-wide">
          Browse Public Habits
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-linear-to-br from-blue-100 to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100 rounded-2xl">
            <figure className="px-5 pt-5">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80"
                alt="Habit"
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-start text-left">
              <h2 className="card-title text-lg font-semibold text-gray-800">
                Morning Meditation
              </h2>
              <p className="text-sm text-gray-500">Category: Mindfulness</p>
              <p className="text-sm text-gray-600">By: John Doe</p>
              <div className="mt-3">
                <p className="text-gray-700 text-sm">
                  Current Streak:{' '}
                  <span className="font-medium text-orange-500">12 🔥</span>
                </p>
              </div>
              <div className="card-actions mt-4 w-full">
                <button className="btn btn-primary w-full rounded-full">
                  See Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PublicHabits
