import { News } from "../constant"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const Details = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // يبدأ مرة واحدة فقط
    // threshold: 0.3, // يبدأ لما 30% من العنصر تظهر في الشاشة
  })
  const { i18n } = useTranslation()
  return (
    <section
      className="py-20 bg-[#1f2022]  overflow-hidden
    transition-colors duration-500 relative border-t-white/20 border-b-white/5 border flex items-center justify-center"
    >
      <div className="absolute -top-20 -right-10 opacity-10 animate-[right-to-left_5s_linear_infinite]">
        <img
          src="/public/images/counter-one-shape2.png"
          className="h-full w-full"
          alt="shape"
        />
      </div>
      <div className="px-10 justify-between w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-8 z-10 relative">
        {News.map((item) => (
          <div
            className="flex flex-col items-center gap-1.5 text-white fontFigtree"
            key={item.id}
            ref={ref}
          >
            {inView && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-6xl font-bold"
              >
                <CountUp start={0} end={item.num} duration={5} suffix="K+" />
              </motion.div>
            )}

            <span className="text-2xl">
              {i18n.language === "en" ? item.titleEn : item.titleAr}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Details
