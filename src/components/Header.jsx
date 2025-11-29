import { IoSunny, IoMoon } from "react-icons/io5"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import ThemeContext from "./ThemeContext"
import TopBar from "./TopBar"
import { navLinks } from "../constant"
import MobileMenu from "./MobileMenu"
import { useTranslation } from "react-i18next"

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openLangDropdown, setOpenLangDropdown] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)
  const { i18n } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="relative bg-[#1f2022] dark:bg-white">
      {/* ✅ Top Bar */}

      <TopBar />
      {/* ✅ Main Navbar */}
      <div
        className={`fixed left-0 h-15 w-full z-50 flex justify-between items-center px-6 py-2 transition duration-500  ${
          isScrolled ? "top-0" : ""
        } ${
          darkMode
            ? "bg-[#1f2022] text-white shadow-md"
            : "bg-white text-gray-800 shadow-md"
        }`}
      >
        <div className="h-20">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-full object-contain cursor-pointer"
          />
        </div>

        <nav>
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to=""
                  className="hover:text-orange-500 font-medium fontFigtree"
                >
                  {i18n.language === "en" ? link.label.en : link.label.ar}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full cursor-pointer"
          >
            {darkMode ? (
              <IoSunny size={18} className="text-orange-500" />
            ) : (
              <IoMoon size={18} />
            )}
          </button>
          <div className="relative hidden md:block">
            <button
              onClick={() => setOpenLangDropdown((prev) => !prev)}
              className="border px-3 py-1 rounded-md hover:border-orange-500 transition"
            >
              {i18n.language === "ar" ? "AR" : "EN"}
            </button>

            {openLangDropdown && (
              <ul className="absolute right-0 mt-2 w-32 bg-white dark:bg-black text-sm rounded-lg shadow-md overflow-hidden z-50">
                <li
                  onClick={() => {
                    i18n.changeLanguage("en")
                    localStorage.setItem("i18nextLng", "en")
                    setOpenLangDropdown(false)
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    i18n.language === "en" ? "font-semibold text-amber-600" : ""
                  }`}
                >
                  English
                </li>

                <li
                  onClick={() => {
                    i18n.changeLanguage("ar")
                    localStorage.setItem("i18nextLng", "ar")
                    setOpenLangDropdown(false)
                  }}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    i18n.language === "ar" ? "font-semibold text-amber-600" : ""
                  }`}
                >
                  العربية
                </li>
              </ul>
            )}
          </div>{" "}
          <a
            href="https://nfass.net/"
            target="_blank"
            className={`hidden md:block fontFigtree ${
              darkMode ? "btnDark" : "btn"
            }`}
          >
            MBN KSA ↗
          </a>
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
      />
    </header>
  )
}

export default Header
