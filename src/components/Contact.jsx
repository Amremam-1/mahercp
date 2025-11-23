import React from "react"
import GetInTouch from "./GetInTouch"
import ContactInfo from "./ContactInfo"

const Contact = () => {
  return (
    <section className="py-20  bg-white dark:bg-[#1f2022] transition-colors duration-500 relative">
      <div className="px-10 flex gap-8 justify-between max-[768px]:flex-col">
        {/* Map */}
        <div className="flex-1">
          <GetInTouch />
        </div>
        {/*  */}
        <div className="flex-1">
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

export default Contact
