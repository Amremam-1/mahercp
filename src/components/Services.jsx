import { motion } from "framer-motion"
import { servicesCards } from "../constant"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
}

export default function Services() {
  const [visible, setVisible] = useState(false)
  const { t, i18n } = useTranslation()
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <section className="py-20  bg-white dark:bg-[#1f2022] transition-colors duration-500 relative">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl uppercase font-bold text-gray-900 dark:text-gray-100 mb-12"
        >
          {t("ourServices")}
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {servicesCards.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="group cursor-pointer bg-[#f9fafb] dark:bg-[#2a2b2f] shadow-md rounded-2xl p-6 flex flex-col items-center justify-center transition-all hover:-translate-y-2 hover:shadow-yellow-500/20 hover:shadow-lg duration-300 border border-gray-100 dark:border-[#333]"
            >
              <div className="text-4xl text-yellow-500 mb-3 group-hover:scale-110 transition-transform duration-300">
                <service.icon />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 tracking-wide">
                {i18n.language === "en" ? service.titleEn : service.titleAr}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>

      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-10 right-3 z-50 flex flex-col items-center cursor-pointer"
          onClick={scrollToTop}
        >
          {/* النقطة المتحركة */}
          <motion.span
            className="w-3 h-3 bg-[#f4911e] rounded-full mb-2 shadow-[0_0_10px_#f4911e]"
            animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* النص العمودي */}
          <p className="text-xs font-semibold tracking-wider rotate-90 origin-bottom text-[#f4911e] hover:text-yellow-400 transition-colors duration-300">
            Go Back Top
          </p>
        </motion.div>
      )}
    </section>
  )
}
