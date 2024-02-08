import "./Footer.css";
import logo from "../../assets/images/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
	return (
		<>
			<footer id="footer" className="footer">
				<div className="container">
					<div className="row gy-4 d-flex justify-content-between align-items-center m-auto fotterlinks">
						<div className="col-lg-5 col-md-12 footer-info">
							<a href="index.html" className="logo d-flex align-items-center">
								<img src={logo} alt="logo image" />
							</a>
							<p>
								Techidol solutions Pioneering AI/ML Solutions, Empowering Businesses to Thrive. With Innovation, Integration, and
								Illumination, We Drive Excellence in BPO, AI, and Digital Marketing on a Global Scale.
							</p>
							<div className="social-links d-flex mt-4">
								<a href="https://www.linkedin.com/company/techidolsolutions/" className="linkedin">
									<FaFacebookF />
								</a>
								<a href="#" className="facebook">
									<FaInstagram />
								</a>
								<a href="#" className="instagram">
									<FaLinkedinIn />
								</a>
								<a href="#" className="linkedin">
									<FaXTwitter />
								</a>
							</div>
						</div>

						<div className="col-lg-2 col-6 footer-links">
							<h4>Useful Links</h4>
							<ul>
								<li>
									<a href="#">Home</a>
								</li>
								<li>
									<a href="#">About us</a>
								</li>
								<li>
									<a href="#">Services</a>
								</li>
								<li>
									<a href="#">Terms of service</a>
								</li>
								<li>
									<a href="#">Privacy policy</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-2 col-6 footer-links">
							<h4>Our Services</h4>
							<ul>
								<li>
									<a href="#">Web Design</a>
								</li>
								<li>
									<a href="#">Web Development</a>
								</li>
								<li>
									<a href="#">Product Management</a>
								</li>
								<li>
									<a href="#">Marketing</a>
								</li>
								<li>
									<a href="#">Graphic Design</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-2 col-md-12 footer-contact text-center text-md-start">
							<h4>Contact Us</h4>
							<p>contact@techidolsolutions.com</p>
							<p>+91-7238897498</p>
							<p>H No - B48, 3rd floor, Lala Lajpat Rai Colony, Bag dilkusha, Bhopal MP, 462023.</p>
						</div>
					</div>
				</div>

				<div className="container mt-4 d-flex justify-content-between align-items-center">
					<div className="copyright">
						&copy; Copyright{" "}
						<strong>
							<span>Gilqo</span>
						</strong>
						.
					</div>
					<div className="credits mr-5">
						Designed by <b>The Prothagonist&apos;s</b>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
