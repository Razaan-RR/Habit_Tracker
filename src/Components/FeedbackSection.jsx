import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const testimonials = [
  {
    name: "Alice Johnson",
    habit: "Meditation",
    quote: "Trackify has completely changed how I start my day. I'm more focused and consistent than ever!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "David Smith",
    habit: "Workout",
    quote: "Seeing my streaks grow keeps me motivated every single day. I love the community aspect too!",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Maria Lopez",
    habit: "Reading",
    quote: "Trackify made it easy to stay on top of my habits. The daily reminders are a lifesaver!",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
]

function FeedbackSection() {
  return (
    <section className="bg-indigo-50 py-16 px-5">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">
        What Our Users Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transform transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <FaQuoteLeft className="text-indigo-400 w-6 h-6 mr-2" />
              <FaQuoteRight className="text-indigo-400 w-6 h-6 ml-2" />
            </div>
            <p className="text-gray-600 mb-4">{t.quote}</p>
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-3"
            />
            <h3 className="text-lg font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-500">
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeedbackSection
