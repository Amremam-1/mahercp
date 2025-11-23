import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-white" />,
      title: "Address",
      info: (
        <>
          <p>Building 2373</p>
          <p>Road 2831, Block 428, Office 24</p>
          <p>Seef, Manama</p>
        </>
      ),
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-white" />,
      title: "Phone",
      info: <p>+973 1745 3190</p>,
    },
    {
      icon: <FaEnvelope className="text-3xl text-white" />,
      title: "Email",
      info: <p>Mbn.bhr1@gmail.com</p>,
    },
  ]

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
              {item.icon}
            </div>
            <div className="ml-6">
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <div className="text-gray-200 leading-snug">{item.info}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ContactInfo
