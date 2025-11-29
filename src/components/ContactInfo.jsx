import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import { contactItems } from "../constant"
import { useTranslation } from "react-i18next"

const ContactInfo = () => {
  const { i18n } = useTranslation()
  return (
    <section className="bg-[#111] text-white py-5 px-4">
      <h2 className="text-2xl font-bold text-center border-b border-gray-600 pb-3 mb-10">
        CONTACT INFORMATION
      </h2>

      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        {contactItems.map((item, i) => (
          <div
            key={i}
            className="flex items-center bg-[#555] p-5 rounded-md shadow-md"
          >
            <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-sm shrink-0">
              <item.icon className="text-3xl text-white" />
            </div>
            <div className="ml-6">
              <h3>{i18n.language === "en" ? item.titleEn : item.titleAr}</h3>
              <p>{i18n.language === "en" ? item.infoEn : item.infoAr}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactInfo
