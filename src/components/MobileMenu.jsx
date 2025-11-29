import { Link } from "react-router-dom"
import { HiOutlineX } from "react-icons/hi"
import { socialLinks } from "../constant"

const MobileMenu = ({ menuOpen, setMenuOpen, navLinks }) => {
  return (
    <div
      className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
        menuOpen ? "visible" : "invisible"
      }`}
    >
      {/* Overlay Layer */}
      <div
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={`overflow-y-auto custom-scroll relative w-[85%] max-w-sm h-full bg-[#1f2022] text-white p-6 flex flex-col transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <img src="/images/logo.png" alt="logo" className="h-20" />
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl hover:text-orange-500 transition"
          >
            <HiOutlineX />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.id} className="border-b border-white/20 pb-3">
              <Link
                to={link.path || ""}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-medium hover:text-orange-500 transition"
              >
                {link.label.en}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Info */}
        <div className="mt-10 flex flex-col gap-4 text-sm">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded-full">
              ✉
            </span>
            <span>Mbn.bh1@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-orange-500 flex items-center justify-center rounded-full">
              ☎
            </span>
            <span>+973 1745 3190</span>
          </div>
        </div>
        {/* Language Switch */}
        <div className="flex items-center gap-3 mt-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="px-4 py-1 border border-white/30 rounded-md text-sm hover:border-orange-500 hover:text-orange-500 transition"
          >
            EN
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            className="px-4 py-1 border border-white/30 rounded-md text-sm hover:border-orange-500 hover:text-orange-500 transition"
          >
            AR
          </button>
        </div>
        <a
          href="https://nfass.net/"
          target="_blank"
          className={`w-fit m-auto my-2 fontFigtree btn dark:btnDark border`}
        >
          MBN KSA ↗
        </a>
        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map((icon) => (
            <div
              key={icon.id}
              className="flex items-center justify-center w-8 h-8 rounded-full mt-8 text-white bg-white/10 hover:bg-amber-600 transition-colors duration-500"
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

export default MobileMenu
