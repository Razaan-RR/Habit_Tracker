function AchievementsAndRewards() {
  return (
    <section className="py-12 bg-indigo-50">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        Achievements & Rewards
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto px-4">
        Every small win matters. Trackify celebrates your consistency with
        milestones that keep you motivated and proud of your progress.
      </p>

      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl">🏅</div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Streak Badges
            </h3>
            <p className="text-gray-600">
              Earn badges as your streak grows. Each badge represents your
              dedication and progress toward building a better version of
              yourself.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-6">
          <div className="text-6xl">🎉</div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Milestone Celebrations
            </h3>
            <p className="text-gray-600">
              Celebrate when you hit important milestones like 7 days, 30 days,
              and beyond. These moments remind you how far you’ve come.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-6xl">🚀</div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              Motivation Boosts
            </h3>
            <p className="text-gray-600">
              Get encouraging messages and visual progress updates that push you
              to stay consistent even on tough days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsAndRewards
