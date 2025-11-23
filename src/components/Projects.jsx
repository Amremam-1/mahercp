import { motion } from "framer-motion"
import ProjectNavgation from "./ProjectNavgation"

const Projects = () => {
  return (
    <section
      className="py-20 bg-white dark:bg-[#1f2022]
    transition-colors duration-500 relative"
    >
      <div className="px-6">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 10 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl uppercase font-bold text-gray-900 dark:text-gray-100 mb-12"
        >
          Our Projects
        </motion.h2>
      </div>

      {/* Projects View Port */}
      <ProjectNavgation />
    </section>
  )
}

export default Projects
