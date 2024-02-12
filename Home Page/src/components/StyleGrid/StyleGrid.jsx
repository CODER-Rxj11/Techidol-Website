import officeimg1 from "../../assets/images/bgheader.png";
import "./StyleGrid.css";
function StyleGrid() {
	const messages = [
		"Our team is dedicated to providing exceptional support. Feel free to reach out for any assistance or inquiries you may have. We look forward to hearing from you!",
		"At Techidol Solutions, customer satisfaction is our priority. Use the contact form below to send us a message, and our team will respond promptly to address your needs.",
		"Have a question, comment, or suggestion? We're here to help. Use the provided contact options to get in touch with us, and we'll do our best to assist you.",
	];
	return (
		<div className="style-container">
			<div className="left">
				<h1>
					Leading the Way in <span> IT Services, BPO, and AI/ML</span>
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium officia provident molestias, rerum culpa obcaecati quo
					repellat, corporis nobis commodi tempora nulla fugit at exercitationem magni eos dolor. Maiores, ab itaque iusto excepturi aliquam
					asperior.
				</p>
				{messages.map((message, index) => (
					<div key={index} className="rows">
						<div>
							<div></div>
						</div>
						<p>{message}</p>
					</div>
				))}
			</div>

			<div className="right-container">
				<img className="img1" src={officeimg1} alt="" />
			</div>
		</div>
	);
}

export default StyleGrid;
