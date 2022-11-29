import './BusinessFeatured.css'
// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
export const BusinessFeatured = () => {
  return (
    <Swiper
    breakpoints={{
      1800: {
        width: 1800,
        slidesPerView: 4,
      },
      // 
      // when window width is >= 640px
      1200: {
        width: 1200,
        slidesPerView: 3,
      },
      // when window width is >= 768px
      900: {
        width: 900,
        slidesPerView: 2,
      },
      0: {
        width: 0,
        slidesPerView: 1,
      },
    }}
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      loop={false}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        waitForTransition: true,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Pagination, Autoplay]}
    >
      <SwiperSlide>
        <div className='business_featured'>
          <h1>Negocios más destacados</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
