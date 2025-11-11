import {
  BoltIcon,
  ClockIcon,
  FaceSmileIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

function WhyBuildHabits() {
  return (
    <section className="bg-indigo-50 py-16 px-5">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        Why Build Habits?
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transform transition-all duration-300">
          <div className="bg-indigo-100 p-3 rounded-full mb-4">
            <BoltIcon className="h-7 w-7 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Better Focus</h3>
          <p className="text-gray-600 text-sm">
            Develop mental clarity and stay focused on your goals every day.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transform transition-all duration-300">
          <div className="bg-indigo-100 p-3 rounded-full mb-4">
            <ClockIcon className="h-7 w-7 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Time Management</h3>
          <p className="text-gray-600 text-sm">
            Learn to manage your time effectively and stay consistent.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transform transition-all duration-300">
          <div className="bg-indigo-100 p-3 rounded-full mb-4">
            <FaceSmileIcon className="h-7 w-7 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Reduced Stress</h3>
          <p className="text-gray-600 text-sm">
            Reduce stress by building positive routines and productive habits.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:-translate-y-2 hover:shadow-2xl transform transition-all duration-300">
          <div className="bg-indigo-100 p-3 rounded-full mb-4">
            <UsersIcon className="h-7 w-7 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Community Support</h3>
          <p className="text-gray-600 text-sm">
            Join a community and find inspiration from shared habits.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyBuildHabits
