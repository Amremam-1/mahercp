import { motion, AnimatePresence } from "framer-motion"

const ProjectCards = ({ filteredProjects }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        layout
        className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10"
      >
        {filteredProjects.map((project) => (
          <motion.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            layout
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white dark:bg-[#1f2022] rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.12)] overflow-hidden transition-all"
          >
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold group-hover:text-[#f4911e] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm opacity-75 mt-1">{project.subtitle}</p>
            </div>
          </motion.a>
        ))}

        {filteredProjects.length === 0 && (
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-3xl md:text-4xl uppercase font-bold text-gray-900 dark:text-gray-100 col-span-full text-center mt-10"
          >
            No Projects Found
          </motion.h2>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default ProjectCards
