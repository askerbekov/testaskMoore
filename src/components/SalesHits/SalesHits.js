import React from 'react';
import  './salesHits.css'
import HitsCard from "../HitsCard/HitsCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import {FreeMode, Mousewheel, Navigation, Pagination, Scrollbar} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const SalesHits = () => {
    return (
        <div className={'container'}>
            <div className={'title-bar'}>
                <h2>Хиты продаж</h2>
                <button>перейти в каталог</button>
            </div>
            <Swiper
                slidesPerView={5}
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

                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
                <SwiperSlide><HitsCard/></SwiperSlide>
            </Swiper>


        </div>
    );
};

export default SalesHits;