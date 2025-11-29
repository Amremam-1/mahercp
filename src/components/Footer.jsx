import { useTranslation } from "react-i18next"
import { socialLinks } from "../constant"

const Footer = () => {
  const { t } = useTranslation()
  return (
    <section className="pt-20 bg-[#1f2022] transition-colors duration-500 relative">
      {/* Head */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex  uppercase text-[100px] text-white/20 animate-[partners-scroll_20s_linear_infinite]  hover:[animation-play-state:paused] font-bold">
          <li className="mx-5">{t("titleA")}</li>
          <li className="mx-5">{t("titleB")}</li>
          <li className="mx-5">{t("titleC")}</li>
        </div>
      </div>

      <div className="relative felx justify-between overflow-hidden border-b-white/20 border-b">
        <div className="absolute -top-5 left-0 animate-[right-to-left_5s_linear_infinite]">
          <img
            src={"/images/site-footer-shape-1.png"}
            alt="shape"
            className=" opacity-5 object-cover"
          />
        </div>
        <div className="absolute -top-5 -right-5 animate-[top-to-bottom_5s_linear_infinite]">
          <img
            src={"/images/site-footer-shape-2.png"}
            alt="shape"
            className="object-cover opacity-5"
          />
        </div>
        <div className="container px-80 max-[1024px]:px-20 py-20  text-center m-auto pt-8 flex flex-col gap-2 items-center">
          <p className="mb-2 text-[16px] fontFigtree font-normal text-white/50">
            {t("footSubtitle")}
          </p>

          <div className="flex items-center gap-3 relative z-20">
            {socialLinks.map((icon) => (
              <div
                key={icon.id}
                className="flex items-center justify-center w-8 h-8 rounded-full text-white bg-white/10 hover:bg-amber-600 transition-colors duration-500"
              >
                <a href={icon.url} target="_blank">
                  <icon.icon size={18} className="cursor-pointer block z-20" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="max-[768px]:text-center  p-8 font-semibold text-[#aeb0b4]">
        {t("copyrightText")}{" "}
        <a href="" className="text-[#f4911e]">
          MBN.
        </a>{" "}
        {t("copyrightRest")}
      </p>
    </section>
  )
}

export default Footer
