function AddHabit() {
  return (
    <section className="min-h-screen bg-linear-to-br from-indigo-50 to-indigo-25 flex items-center justify-center py-16 px-5">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-10 space-y-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600">Add a New Habit</h1>

        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Habit Title</label>
            <input
              type="text"
              placeholder="Enter habit title"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-200 focus:outline-none shadow-sm"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              placeholder="Describe your habit"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-200 focus:outline-none shadow-sm resize-none"
              rows={4}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Category</label>
              <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-200 focus:outline-none shadow-sm">
                <option value="">Select Category</option>
                <option value="Morning">Morning</option>
                <option value="Work">Work</option>
                <option value="Fitness">Fitness</option>
                <option value="Evening">Evening</option>
                <option value="Study">Study</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Reminder Time</label>
              <input
                type="time"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-200 focus:outline-none shadow-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload Image (Optional)</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none shadow-sm"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">User Name</label>
              <input
                type="text"
                value="John Doe"
                readOnly
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 cursor-not-allowed shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">User Email</label>
              <input
                type="email"
                value="johndoe@example.com"
                readOnly
                className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-100 cursor-not-allowed shadow-sm"
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-indigo-700 transition shadow-lg"
            >
              Add Habit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default AddHabit
