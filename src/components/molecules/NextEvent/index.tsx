import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { MdClose } from "react-icons/md";
import CheckBox from "../../atoms/Checkbox";
import { motion } from "framer-motion";
import { CgOptions } from "react-icons/cg";
import Event from "../../atoms/Event";
import { NEXT_EVENTS } from "../../../constant/CONST";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

export default function NextEvent() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="p-5 lg:mx-16">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Next Events</h1>
          <GoArrowRight size={25} className="text-slate-600" />
        </div>
        <div>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
            className="pt-4 flex items-center gap-3 text-indigo-600 text-lg"
          >
            <CgOptions size={25} />
            <div className="font-semibold hover:underline">
              Filter teams (1)
            </div>
          </button>
        </div>

        <div>
          <Swiper
            slidesPerView={"auto"}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="carousel"
          >
            {NEXT_EVENTS.map((item) => (
              <SwiperSlide className="swiper-slide">
                <Event
                  key={item.nameAway}
                  nameHome={item.nameHome}
                  nameAway={item.nameAway}
                  logoHome={item.logoHome}
                  logoAway={item.logoAway}
                  typeMatch={item.typeMatch}
                  matchDay={item.matchDay}
                  date={item.date}
                  stadium={item.stadium}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {openModal ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              openModal
                ? { visibility: "visible", opacity: 1 }
                : { visibility: "hidden", opacity: 0 }
            }
            transition={{ ease: "easeOut", duration: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 right-0 h-screen w-screen backdrop-blur-md "
          >
            <div className="w-full h-full relative">
              <div className="bg-white w-full absolute bottom-0 p-5 rounded-t-3xl px-5 lg:px-16 flex flex-col gap-8">
                <div className="flex items-center justify-between ">
                  <button className="text-indigo-600 text-lg font-bold">
                    Reset Filters
                  </button>
                  <button
                    className="hover:text-indigo-600 transition-all duration-700 ease-in-out"
                    onClick={() => setOpenModal(!openModal)}
                  >
                    <MdClose size={25} />
                  </button>
                </div>
                <div className="font-bold text-2xl">Filter Teams</div>
                <div className="grid grid-cols-2">
                  <div>
                    <p className="text-2xl font-bold">Football</p>
                    <div className="flex flex-col gap-2 text-slate-90000">
                      <CheckBox />
                      <CheckBox />
                      <CheckBox />
                    </div>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">Basketball</p>
                    <div className="flex flex-col gap-2 ">
                      <CheckBox />
                      <CheckBox />
                      <CheckBox />
                    </div>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-[#3e31fb] to-[#852DF6] hover:bg-indigo-600 text-white py-3 rounded-xl font-bold">
                  Show Events
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </section>
    </>
  );
}
