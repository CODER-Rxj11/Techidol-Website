import "./Contact.css";
function Contact() {
	return (
		<>
			<div className="contact">
				<h1>
					Let&apos;s Connect and <span>Discuss</span>
				</h1>
				<h3>Contact Us Now</h3>

				<div className="contact-box">
					<div className="contact-left">
						<h3>What makes us different?</h3>
						<p>Consistency</p>
						<p>Solution Approach</p>
						<p>Partnerships</p>
						<p className="regional">
							{" "}
							Regional Language Expertise
							<p className="left-para">
								We talk and understand almost every regional language in India. With ourhybrid mode of Work from office and work from
								anywhere, we help our clients build scale.
							</p>
						</p>
					</div>

					<div className="contact-right">
						<p className="heading-right">Discover how we can help your business grow</p>
						<form>
							<div className="input-row1">
								<div className="input-group">
									<input type="text" id="txtbox" placeholder="Full name" />
								</div>
								<div className="input-group">
									<input type="text" id="txtbox" placeholder="Company name" />
								</div>
							</div>

							<div className="input-row2">
								<div className="input-group">
									<input type="text" id="txtbox" placeholder="Business Email" />
								</div>
								<div className="input-group">
									<input type="text" id="txtbox" placeholder="Contact Number" />
								</div>
							</div>

							<div className="input-group-message">
								<input type="text" id="message-txtbox" placeholder="Your Message" />
							</div>
						</form>

						<div className="container">
							<label className="container">
								<input type="checkbox" /> I agree to receive other communications from Techidol Solutions.
								<span className="checkmark"></span>
							</label>
						</div>

						<div className="button">
							<button type="button">Consult with our Experts</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
