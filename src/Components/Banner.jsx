import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Banner() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        className="h-[70vh] rounded-xl shadow-lg"
      >
        <SwiperSlide>
          <div className="bg-linear-to-r from-indigo-200 to-purple-200 h-full flex flex-col justify-center items-center text-gray-800 text-center p-8">
            <h1 className="text-5xl font-bold mb-4">Build Better Habits</h1>
            <p className="max-w-xl text-lg">
              Track your daily progress, stay consistent, and achieve your personal growth goals with ease.
            </p>
            <button className="mt-6 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
              Get Started
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-linear-to-r from-green-200 to-teal-200 h-full flex flex-col justify-center items-center text-gray-800 text-center p-8">
            <h1 className="text-5xl font-bold mb-4">Stay Motivated</h1>
            <p className="max-w-xl text-lg">
              Visualize your streaks and celebrate milestones as you progress towards your best self.
            </p>
            <button className="mt-6 bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-100 transition">
              View My Habits
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-linear-to-r from-blue-200 to-sky-200 h-full flex flex-col justify-center items-center text-gray-800 text-center p-8">
            <h1 className="text-5xl font-bold mb-4">Join the Community</h1>
            <p className="max-w-xl text-lg">
              Discover public habits shared by others and find inspiration to improve your lifestyle.
            </p>
            <button className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition">
              Explore Habits
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Banner
