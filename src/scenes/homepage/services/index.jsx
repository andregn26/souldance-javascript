import { Box, useTheme, useMediaQuery, Typography, Card } from "@mui/material"
import { motion } from "framer-motion"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedPage } from "@/state"
import MainSectionContainer from "@/components/MainSectionContainer"
import CardOne from "@/components/Cards"
import WidthContainer from "@/components/WidthContainer"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/grid"
import "swiper/css/pagination"

import SwiperModalities from "./swiperModalities"

import { Navigation, Grid, Pagination } from "swiper"

const Services = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const isNonMobile800 = useMediaQuery("(min-width: 800px)")
  const isNonMobile1200 = useMediaQuery("(min-width: 1200px)")
  return (
    <motion.div onViewportEnter={() => dispatch(setSelectedPage("servicos"))}>
      <MainSectionContainer
        id="servicos"
        sx={{ backgroundColor: theme.palette.background.alt }}
      >
        <WidthContainer>
          <Box>
            <Typography>Serviços</Typography>
            {isNonMobile800 ? (
              <>
                <Swiper
                  breakpoints={{
                    801: {
                      slidesPerView: 2,
                    },
                    1200: {
                      slidesPerView: 3,
                    },
                    1500: {
                      slidesPerView: 4,
                    },
                  }}
                  grid={{
                    rows: 2,
                    fill: "row",
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  spaceBetween={70}
                  modules={[Grid, Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                  <SwiperSlide>
                    <SwiperModalities />
                  </SwiperSlide>
                </Swiper>
              </>
            ) : (
              <Swiper
                centeredSlides={true}
                centeredSlidesBounds={true}
                navigation={true}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <article class="card">
                    <img
                      class="card__background"
                      src="https://i.imgur.com/QYWAcXk.jpeg"
                      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
                      width="1920"
                      height="2193"
                    />
                    <div class="card__content | flow">
                      <div class="card__content--container | flow">
                        <h2 class="card__title">Colombia</h2>
                        <p class="card__description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Rerum in labore laudantium deserunt fugiat
                          numquam.
                        </p>
                      </div>
                      <button class="card__button">Read more</button>
                    </div>
                  </article>
                </SwiperSlide>

                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            )}
          </Box>
        </WidthContainer>
      </MainSectionContainer>
    </motion.div>
  )
}

export default Services
