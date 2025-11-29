import { useContext, useState, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, EffectFade, Pagination } from "swiper/modules"
import { motion, AnimatePresence } from "framer-motion"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import ThemeContext from "./ThemeContext"
import { slides } from "../constant"
import { useTranslation } from "react-i18next"

// Animation Variants
const slideVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.8 } },
}

// Animation for triangles
const triangleVariants = {
  hidden: { opacity: 0, y: 120 },
  visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
  exit: { opacity: 0, y: 100, transition: { duration: 0.8 } },
}

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const { darkMode } = useContext(ThemeContext)

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex)
  }

  const { t, i18n } = useTranslation()

  return (
    <div className="relative w-full max-h-screen overflow-hidden bg-[#0c0c0c] dark:bg-white">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade, Pagination]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={handleSlideChange}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-dvh bg-cover bg-center flex items-center justify-center text-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* خلفية شفافة */}
              <div className="absolute inset-0 bg-black/80"></div>

              {/* المثلثات المتحركة */}
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <>
                    {/* المثلث الأبيض */}
                    <motion.div
                      key={`${slide.id}-white-triangle`}
                      className="absolute bottom-0 left-30 w-full h-[60%] bg-white/20 dark:bg-black/70"
                      style={{
                        clipPath: "polygon(0 100%, 50% 10%, 80% 100%)",
                      }}
                      variants={triangleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    ></motion.div>

                    {/* المثلث الرمادي الفاتح فوقه */}
                    <motion.div
                      key={`${slide.id}-gray-triangle`}
                      className="absolute bottom-0 left-5 w-full h-[60%] bg-gray-200/30 dark:bg-gray-800/60"
                      style={{
                        clipPath: "polygon(0 100%, 50% 10%, 80% 100%)",
                      }}
                      variants={triangleVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    ></motion.div>
                  </>
                )}
              </AnimatePresence>

              {/* النصوص */}
              <AnimatePresence mode="wait">
                {activeIndex === index && (
                  <motion.div
                    key={`${slide.id}-${i18n.language}`} // المفتاح مرتبط باللغة + id
                    className="relative z-10 text-white pt-40 pb-20 px-4"
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <h2 className="capitalize leading-tight max-sm:text-4xl max-md:text-[55px] max-[992px]:text-[65px] text-[70px] font-bold drop-shadow-lg text-white">
                      {i18n.language === "en" ? slide.titleEn1 : slide.titleAr1}
                      <br />
                      {i18n.language === "en" ? slide.titleEn2 : slide.titleAr2}
                      <br />
                      {i18n.language === "en" ? slide.titleEn3 : slide.titleAr3}
                    </h2>
                    <button
                      className={`fontFigtree ${
                        darkMode ? "btnDark" : "btn"
                      } mt-6 transition-all duration-300`}
                    >
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send/?phone=97317453190&text&type=phone_number&app_absent=0"
                      >
                        {t("contact")} ↗
                      </a>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SwiperSlide>
        ))}

        {/* الأسهم */}
        <div
          ref={prevRef}
          className="custom-prev absolute top-1/2 left-4 z-20 cursor-pointer text-[#ccc] text-5xl select-none"
        >
          ‹
        </div>
        <div
          ref={nextRef}
          className="custom-next absolute top-1/2 right-4 z-20 cursor-pointer text-[#ccc] text-5xl select-none"
        >
          ›
        </div>
      </Swiper>

      {/* Pagination Custom */}
      <style>
        {`
          .swiper-pagination-bullet {
            background: ${darkMode ? "#000" : "#fff"};
            opacity: 0.7;
          }
          .swiper-pagination-bullet-active {
            opacity: 1;
            transform: scale(1.2);
          }
        `}
      </style>
    </div>
  )
}

export default HeroSection
