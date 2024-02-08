import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperImage1 from '../../assets/images/testimonial1.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testinomial.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Testinomial() {
    return (
        <>
            <div className="testinomials">
                <a href="#">Testinomials</a>
                <h2>
                    Why People <span>love Us</span>
                </h2>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={SwiperImage1} alt="" />
                        <div className="slide-content">
                            <div>
                                <h2>Kristin Watson</h2>
                                <h3>Dog Trainer</h3>
                            </div>
                            <h4>
                                ⭐⭐⭐⭐⭐
                            </h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SwiperImage1} alt="" />
                        <div className="slide-content">
                            <div>
                                <h2>Kristin Watson</h2>
                                <h3>Dog Trainer</h3>
                            </div>
                            <h4>
                                ⭐⭐⭐⭐⭐
                            </h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SwiperImage1} alt="" />
                        <div className="slide-content">
                            <div>
                                <h2>Kristin Watson</h2>
                                <h3>Dog Trainer</h3>
                            </div>
                            <h4>
                                ⭐⭐⭐⭐⭐
                            </h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SwiperImage1} alt="" />
                        <div className="slide-content">
                            <div>
                                <h2>Kristin Watson</h2>
                                <h3>Dog Trainer</h3>
                            </div>
                            <h4>
                                ⭐⭐⭐⭐⭐
                            </h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SwiperImage1} alt="" />
                        <div className="slide-content">
                            <div>
                                <h2>Kristin Watson</h2>
                                <h3>Dog Trainer</h3>
                            </div>
                            <h4>
                                ⭐⭐⭐⭐⭐
                            </h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={SwiperImage1} alt="" />
                        <div className="slide-content">
                            <div>
                                <h2>Kristin Watson</h2>
                                <h3>Dog Trainer</h3>
                            </div>
                            <h4>
                                ⭐⭐⭐⭐⭐
                            </h4>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
                    <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                    <span class="swiper-pagination-bullet"></span>
                </div>
                <article>
				<div>
					<FaArrowLeft />
				</div>
				<div>
					<FaArrowRight />
				</div>
			</article>
            </div>
        </>
    );
}
