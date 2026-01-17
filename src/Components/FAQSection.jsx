function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-md">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            What is Trackify?
          </h3>
          <p className="text-gray-600">
            Trackify is a habit tracking platform that helps you stay
            consistent, build streaks, and improve your daily lifestyle through
            small actions.
          </p>
        </div>

        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-md">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Is Trackify free to use?
          </h3>
          <p className="text-gray-600">
            Yes, Trackify is completely free and accessible for everyone who
            wants to build better habits.
          </p>
        </div>

        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-md">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Can I track multiple habits?
          </h3>
          <p className="text-gray-600">
            Absolutely. You can create and track as many habits as you like at
            the same time.
          </p>
        </div>

        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-md">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Are public habits visible to everyone?
          </h3>
          <p className="text-gray-600">
            Yes, public habits are shared with the community so others can find
            inspiration and motivation.
          </p>
        </div>

        <div className="border-l-4 border-indigo-500 bg-indigo-50 p-5 rounded-md">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            How do streaks work?
          </h3>
          <p className="text-gray-600">
            Each day you complete a habit, your streak increases. Missing a day
            resets the streak, encouraging consistency.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
