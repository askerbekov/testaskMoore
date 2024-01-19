import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Mousewheel, Navigation, Scrollbar} from "swiper/modules";
import HitsCard from "../HitsCard/HitsCard";
import NewsCard from "../NewsCard/NewsCard";

const News = () => {
    return (
        <div>
            <div className={'container'}>
                <div className={'title-bar'}>
                    <h2>Новости</h2>
                    <button>все</button>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={0}
                    navigation={true}
                    mousewheel={{forceToAxis: true}}
                    // direction={'horizontal'}
                    freeMode={true}
                    speed={700}
                    // scrollbar={true}
                    modules={[Navigation, Mousewheel, Scrollbar, FreeMode]}
                    className="mySwiper miniSwiper"
                >

                    <SwiperSlide><NewsCard/></SwiperSlide>
                    <SwiperSlide><NewsCard/></SwiperSlide>
                    <SwiperSlide><NewsCard/></SwiperSlide>
                    <SwiperSlide><NewsCard/></SwiperSlide>

                </Swiper>




            </div>
        </div>
    );
};

export default News;