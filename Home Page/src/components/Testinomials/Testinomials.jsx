import "./Testinomials.css";
function Testinomials() {
	return (
		<div className="testinomials">
			<a href="#">Testinomials</a>
			<h2>
				Why People <span>love Us</span>
			</h2>
			<MySwiper />
		</div>
	);
}

export default Testinomials;

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } fsrom "swiper";

// Import Swiper styles
// import "swiper/swiper-bundle.css";

// Install Swiper modules
// SwiperCore.use([Navigation]);

const MySwiper = () => {
	const params = {
		slidesPerView: 3,
		spaceBetween: 5,
		centeredSlides: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
	};

	return (
		<div className="swiper-div">
			<div className="swiper-container">
				<Swiper {...params}>
					<SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide>
					<SwiperSlide>Slide 5</SwiperSlide>
					<SwiperSlide>Slide 6</SwiperSlide>
					<SwiperSlide>Slide 7</SwiperSlide>
				</Swiper>
			</div>
			<div className="swiper-button-next">
				<div className="swiper-button-inner">&#9658;</div>
			</div>
			<div className="swiper-button-prev">
				<div className="swiper-button-inner">&#9668;</div>
			</div>
		</div>
	);
};
