import Image from "next/image";
import image1 from "@assets/image-1.png";

const ImageSection = () => {
	return (
		<div className="section-image">
			<Image src={image1} alt="image one" objectFit="cover" />
		</div>
	);
};

export default ImageSection;
