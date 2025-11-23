import { IoSunny, IoMoon } from "react-icons/io5"
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"
import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import ThemeContext from "./ThemeContext"
import TopBar from "./TopBar"
import { navLinks } from "../constant"
import MobileMenu from "./MobileMenu"

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  const [isScrolled, setIsScrolled] = useState(false)

  const [menuOpen, setMenuOpen] = useState(false)

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
                  {link.label.en}
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
          <button className="hidden md:flex border px-3 py-1 rounded-md hover:border-orange-500 transition">
            🌐
          </button>

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

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div
          className={`fixed top-[90px] left-0 w-full md:hidden z-40 ${
            darkMode ? "bg-[#1f2022] text-white" : "bg-white text-gray-800"
          } shadow-lg`}
        >
          <ul className="flex flex-col gap-5 p-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path || ""}
                  onClick={() => setMenuOpen(false)}
                  className="block text-lg font-medium hover:text-orange-500"
                >
                  {link.label.en}
                </Link>
              </li>
            ))}

            <hr className="opacity-30" />

            <button className="border px-4 py-2 rounded-md w-full text-left">
              🌐 Language
            </button>

            <a
              href="https://nfass.net/"
              target="_blank"
              className={`text-center ${darkMode ? "btnDark" : "btn"}`}
            >
              MBN KSA ↗
            </a>
          </ul>
        </div>
      )} */}

      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
      />
    </header>
  )
}

export default Header
