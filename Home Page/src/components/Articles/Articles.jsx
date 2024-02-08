/* eslint-disable react/prop-types */
import "./Articles.css";
import ctaimg1 from "../../assets/images/ctaimg1.png";
import ctaimg2 from "../../assets/images/ctaimg2.png";
import ctaimg3 from "../../assets/images/ctaimg3.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
function Articles() {
	return (
		<div className="articles">
			<a href="#">Blogs</a>
			<h2>Popular Articles</h2>
			<section>
				<CTA heading="Navigating Cybersecurity Threats A Comprehensive Guide" date="18/07/2012" img={ctaimg1} />
				<CTA heading="Embracing Digital Transformation in Techidol Solutions" date="18/07/2012" img={ctaimg2} />
				<CTA heading="Navigating Cybersecurity Threats A Comprehensive Guide" date="18/07/2012" img={ctaimg3} />
			</section>
			<article>
				<div>
					<FaArrowLeft />
				</div>
				<div>
					<FaArrowRight />
				</div>
			</article>
		</div>
	);
}

export const CTA = ({ img, heading, date }) => {
	return (
		<div className="cta">
			<img src={img} alt="cta image 1" />

			<div>
				<h3>{heading}</h3>
				<div>
					<a href="#">Read More</a>
					<p>{date}</p>
				</div>
			</div>
		</div>
	);
};

export default Articles;
