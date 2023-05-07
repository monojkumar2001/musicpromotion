import SwiperCore, { Pagination, Navigation, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import PackageCard from "@components/cards/PackageCard";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const PackageSlider = ({ data, sliderValue }) => {
	return (
		<div className="package-slider">
			<Swiper
				slidesPerView="auto"
				centeredSlides={true}
				effect="coverflow"
				watchOverflow={false}
				// spaceBetween={50}
				breakpoints={{
					0: {
						spaceBetween: 0,
					},
					768: {
						spaceBetween: 50,
					},
				}}
				initialSlide="1"
				coverflowEffect={{
					rotate: 0,
					stretch: 100,
					depth: 150,
					modifier: 1.5,
					slideShadows: false,
				}}
			>
				{data.map((item, i) => (
					<SwiperSlide key={i}>
						<PackageCard index={i} {...item} sliderValue={sliderValue} />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="new-pagination flex items-center justify-center my-4"></div>
		</div>
	);
};

export default PackageSlider;
