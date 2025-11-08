import Banner from '../Components/Banner'
import WhyBuildHabits from '../Components/WhyBuildHabits'
import { motion } from 'framer-motion'

console.log(motion)
function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Banner></Banner>
        <WhyBuildHabits></WhyBuildHabits>
      </motion.div>
    </div>
  )
}

export default Home
