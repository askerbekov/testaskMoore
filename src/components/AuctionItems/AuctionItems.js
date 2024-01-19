import React from 'react';
import './auctionItems.css'
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Mousewheel, Navigation, Scrollbar} from "swiper/modules";
import HitsCard from "../HitsCard/HitsCard";

const AuctionItems = () => {
    return (
        <div className={'container'}>
            <div className={'title-bar'}>
                <h2>Аукционные товары</h2>
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

export default AuctionItems;