import Banner from '../Components/Banner'
import FeaturedHabits from '../Components/FeaturedHabits'
import FeedbackSection from '../Components/FeedbackSection'
import TopUsers from '../Components/TopUsers'
import WhyBuildHabits from '../Components/WhyBuildHabits'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="overflow-x-hidden bg-indigo-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="w-full mx-auto"
      >
        <Banner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="sm:px-6"
      >
        <FeaturedHabits />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="sm:px-6"
      >
        <WhyBuildHabits />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="sm:px-6"
      >
        <TopUsers />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="sm:px-6"
      >
        <FeedbackSection />
      </motion.div>
    </div>
  )
}

export default Home
