import React, { useContext, useEffect, useState } from "react"
import ThemeContext from "./ThemeContext"
import { FaClock, FaPhoneAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"

import { socialLinks } from "../constant"
import { useTranslation } from "react-i18next"

const TopBar = () => {
  const { darkMode } = useContext(ThemeContext)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const now = new Date()
  const day = now.getDay()
  const hour = now.getHours()
  const isWorkDay = day >= 0 && day <= 4
  const isWorkHours = hour >= 9 && hour < 17
  const isOpen = isWorkDay && isWorkHours

  return (
    <div
      className={`w-full z-40 transition-all duration-500 max-[991px]:hidden fontFigtree ${
        isScrolled ? " opacity-0" : "opacity-100"
      }  bg-white dark:bg-[#1f2022] shadow-sm`}
    >
      <div
        className={`flex flex-col md:flex-row justify-between items-center px-6 py-2 text-sm ${
          darkMode ? "text-gray-300" : "text-gray-700"
        } border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="flex justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-orange-500" />
            <a
              href="tel:97317453190"
              className="text-[16px] hover:text-orange-500"
            >
              +973 1745 3190
            </a>
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail className="text-orange-500" />
            <a
              href="mailto:Mbn.bhr1@gmail.com"
              className="text-[16px] hover:text-orange-500"
            >
              Mbn.bhr1@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-orange-500" />
            <p className="text-[16px] ">
              {t("workingHours.label")}{" "}
              {isOpen ? t("workingHours.open") : t("workingHours.closed")}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map((icon) => (
            <div
              key={icon.id}
              className="flex items-center justify-center w-8 h-8 rounded-full text-[#1f2022] dark:text-white dark:bg-white/10 hover:bg-amber-600 transition-colors duration-500"
            >
              <a href={icon.url} target="_blank">
                <icon.icon size={18} className="cursor-pointer block" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopBar
