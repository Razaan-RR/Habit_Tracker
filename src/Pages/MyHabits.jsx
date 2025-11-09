function MyHabits() {
  return (
    <div className="min-h-screen bg-indigo-50 py-12">
      <section className="w-11/12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-indigo-700 tracking-wide">
          My Habits
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow-xl bg-white">
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
                <td className="font-medium text-gray-800">Morning Meditation</td>
                <td className="text-gray-600">Mindfulness</td>
                <td className="text-orange-500 font-semibold">5 🔥</td>
                <td className="text-gray-500">09/11/2025</td>
                <td className="flex gap-2 justify-center py-3">
                  <button className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 border-none text-white">
                    Update
                  </button>
                  <button className="btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white">
                    Delete
                  </button>
                  <button className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 border-none text-white">
                    Mark Complete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default MyHabits
