import { logos } from "../constant";


export default function PartnersSlider() {
  return (
    <section
      className="bg-[#1f2022] border-t-white/20 border-b-white/20 border
          transition-colors duration-300 "
    >
      <div className="overflow-hidden whitespace-nowrap">
        <div
          className="
              flex items-center gap-16
              animate-[partners-scroll_10s_linear_infinite]
              hover:[animation-play-state:paused]
            "
        >
          {logos.concat(logos).map((src, index) => (
            <img
              key={index}
              src={src}
              alt="logo"
              className="
                  h-30 md:h-40
                  w-auto object-contain
                  opacity-70 hover:opacity-100 hover:scale-110
                  transition duration-300
                  shadow-[0_2px_6px_rgba(0,0,0,0.1)]
                  
                "
            />
          ))}
        </div>
      </div>
    </section>
  )
}
