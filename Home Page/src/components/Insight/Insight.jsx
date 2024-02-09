import "./Insight.css";
import { CiMail } from "react-icons/ci";
import { FaLinkedin, FaFacebook, FaTwitter, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Navbar from "../Navbar/Navbar";
function Insight({url,heading}) {
	return (
		<div className="insights">
			<section className="start">
				<div className="contact-links">
					<a href="">
						<span>
							<CiMail />
						</span>{" "}
						contact@techidol.gmail.com
					</a>
					<a href="">
						<FaPhoneAlt /> +91-7554169396
					</a>
				</div>
				<div className="social-links">
					<a href="">
						<FaLinkedin />
					</a>
					<a href="">
						<FaFacebook />
					</a>
					<a href="">
						<FaTwitter />
					</a>
					<a href="">
						<AiFillInstagram />
					</a>
				</div>
			</section>
			<Navbar />
			<h3>{url}</h3>
			<h1>{heading}</h1>
		</div>
	);
}

export default Insight;
