import PackageCard from "@components/cards/PackageCard";
import CustomSlider from "@components/CustomSlider";
import PackageSlider from "@components/slider/PackageSlider";
import { useState } from "react";

const PricingSection = ({ data, type = "one" }) => {
  const [sliderValue, setSliderValue] = useState(1);

  return (
    <section id="pricing" className={`type-${type}`}>
      <div className="pricing-container">
        <h1 className="heading">
          Customize Your <span>Package</span> <br /> <span>According</span> to
          Your Need
        </h1>
        <p className="sub-heading">Ready to skyrocket your popularity?</p>
        <div className="save-btn">
          <p>Save 20%</p>
          {/* <svg
						width="117"
						height="49"
						viewBox="0 0 117 49"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="arrow-pointer"
					>
						<path
							d="M0 48.3671L16.499 43.0962L3.68472 31.4431L0 48.3671ZM61 22.8671L60.4874 24.2768L61 22.8671ZM46.5 22.8671L47.9973 22.957L46.5 22.8671ZM114.481 10.2744C115.258 10.5611 116.121 10.1634 116.407 9.38618C116.694 8.60894 116.296 7.74646 115.519 7.45977L114.481 10.2744ZM10.106 39.4759C22.2518 28.1805 41.1582 17.248 60.4874 24.2768L61.5126 21.4574C40.5122 13.8209 20.4114 25.7953 8.06297 37.279L10.106 39.4759ZM60.4874 24.2768C68.5324 27.2023 70.8105 30.9301 70.8047 33.7811C70.7985 36.7839 68.3044 39.8966 64.5613 41.6163C60.8753 43.3097 56.5136 43.3851 53.2563 40.9219C50.0089 38.4661 47.3865 33.128 47.9973 22.957L45.0027 22.7772C44.3635 33.4225 47.0536 39.9924 51.4468 43.3147C55.8302 46.6296 61.4372 46.353 65.8137 44.3423C70.1331 42.3579 73.7952 38.4145 73.8047 33.7873C73.8145 29.0082 69.9676 24.532 61.5126 21.4574L60.4874 24.2768ZM47.9973 22.957C48.4165 15.976 51.4126 11.3448 55.9323 8.31771C60.5298 5.23847 66.8206 3.74649 73.87 3.39405C87.9633 2.68943 104.432 6.56793 114.481 10.2744L115.519 7.45977C105.234 3.66625 88.3468 -0.333486 73.7202 0.397794C66.4095 0.763299 59.4995 2.3178 54.2629 5.82512C48.9483 9.38458 45.4769 14.8801 45.0027 22.7772L47.9973 22.957Z"
							fill="#1DB954"
						/>
					</svg> */}
        </div>

        <CustomSlider setSliderValue={setSliderValue} />
        {/* <div className="package-container">
					{data.map((item, i) => (
						<PackageCard key={i} index={i} {...item} />
					))}
				</div> */}
        <PackageSlider data={data} sliderValue={sliderValue} />
      </div>
    </section>
  );
};

export default PricingSection;
