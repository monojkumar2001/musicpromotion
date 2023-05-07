import Image from "next/image";

const PackageCard = ({
	package_type,
	cur_price,
	off_price,
	includes,
	details,
	index,
	sliderValue,
}) => {
	return (
		<div className="package-card">
			<svg
				className="hat-svg"
				width="327"
				height="38"
				viewBox="0 0 327 38"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M0 38L18 1.02703V0H18.5H308L327 38H308H18.5H18H0Z"
				/>
			</svg>

			<div className="top-logo">
				<Image
					src={`/assets/pricing/${index + 1}.png`}
					alt="top logo"
					height="100%"
					width="100%"
					objectFit="contain"
				/>
			</div>

			<div className="package-type">{package_type}</div>
			<div className="pricing-info">
				<p className="price">${cur_price * sliderValue}</p>
				<div className="offer">
					<del className="save">{off_price * sliderValue}$</del>
					<p className="off">50% OFF</p>
				</div>
			</div>
			<ul className="upper-details">
				{includes.map((item) => (
					<li key={item} className="list-item">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="12" cy="12" r="11.5" fill="#D9FFE6" />
							<path
								d="M7 12L10.1579 16L17 8"
								strokeWidth="2.5"
								strokeLinecap="round"
							/>
						</svg>
						<p className="item-text">{item}</p>
					</li>
				))}
			</ul>
			<p className="bottom-details">{details}</p>
			<a href="https://wa.me/13025977087" target={"_blank"} className="purchase-btn">Contact Us</a>
			{/* <button className="purchase-btn">PURCHASE</button> */}
		</div>
	);
};

export default PackageCard;
