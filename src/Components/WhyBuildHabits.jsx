import { BoltIcon, ClockIcon, FaceSmileIcon, UsersIcon } from '@heroicons/react/24/outline'

function WhyBuildHabits() {
  return (
    <section className="bg-indigo-50 py-16 px-5">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Why Build Habits?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition">
          <BoltIcon className="h-7 w-7 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Better Focus</h3>
          <p className="text-gray-600">Develop mental clarity and stay focused on your goals every day.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition">
          <ClockIcon className="h-7 w-7 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Time Management</h3>
          <p className="text-gray-600">Learn to manage your time effectively and stay consistent.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition">
          <FaceSmileIcon className="h-7 w-7 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Reduced Stress</h3>
          <p className="text-gray-600">Reduce stress by building positive routines and productive habits.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transform transition">
          <UsersIcon className="h-7 w-7 text-indigo-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Support</h3>
          <p className="text-gray-600">Join a community and find inspiration from shared habits.</p>
        </div>

      </div>
    </section>
  )
}

export default WhyBuildHabits
