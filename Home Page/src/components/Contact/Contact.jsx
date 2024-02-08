import "./Contact.css";
function Contact() {
	return (
		<>
			<div className="contact">
				<h1>
					Let&apos;s Connect and <span>Discuss</span>
				</h1>
				<h3 className="contact-heading">Contact Us Now</h3>

				<div className="contact-box">
					<div className="contact-left">
						<h3>What makes us different?</h3>

						<div className="left-cols">
							<p>Consistency</p>
							<p>Solution Approach</p>
							<p>Partnerships</p>
							<p>Regional Language Expertise</p>
						</div>
					</div>

					<div className="contact-right">
						<h2 className="heading-right">Discover how we can help your business grow</h2>
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
								{/* <input
                  type="text"
                  id="message-txtbox"
                  placeholder="Your Message"
                /> */}
								<textarea placeholder="Your Message" id="message-txtbox" cols="30" rows="10"></textarea>
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
