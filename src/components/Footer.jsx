import { socialLinks } from "../constant"

const Footer = () => {
  return (
    <section className="pt-20 bg-[#1f2022] transition-colors duration-500 relative">
      {/* Head */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="inline-flex  uppercase text-[100px] text-white/20 animate-[partners-scroll_20s_linear_infinite]  hover:[animation-play-state:paused] font-bold">
          <li className="mx-5">Maher Bin Nayif Al-Harithi IT Group</li>
          <li className="mx-5">Innovative Software Solutions</li>
          <li className="mx-5">Continuous Technical Support</li>
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
            Maher Bin Nayif Al-harthi IT Group offers innovative software
            solutions and continuous technical support to serve our clients with
            the highest level of professionalism and quality.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((icon) => (
              <div
                key={icon.id}
                className="flex items-center justify-center w-8 h-8 rounded-full text-white bg-white/10 hover:bg-amber-600 transition-colors duration-500"
              >
                <a href={icon.url} target="_blank">
                  <icon.icon size={18} className="cursor-pointer block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="max-[768px]:text-center  p-8 font-semibold text-[#aeb0b4]">
        © 2025 Copyright{" "}
        <a href="" className="text-[#f4911e]">
          MBN.{" "}
        </a>
        | All rights reserved
      </p>
    </section>
  )
}

export default Footer
