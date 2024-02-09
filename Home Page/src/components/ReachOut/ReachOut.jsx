import "./ReachOut.css"
import ReachOutImage from "../../assets/images/reachout.png"
export default function ReachOut() {

    const messages = [
		"Our team is dedicated to providing exceptional support. Feel free to reach out for any assistance or inquiries you may have. We look forward to hearing from you!",
		"At Techidol Solutions, customer satisfaction is our priority. Use the contact form below to send us a message, and our team will respond promptly to address your needs.",
		"Have a question, comment, or suggestion? We're here to help. Use the provided contact options to get in touch with us, and we'll do our best to assist you.",
	];
    return <>
        <div className="reachout">
            <div className="left">
                <h1>Reach Out - <span>We&apos;re Here to Help</span></h1>
                {messages.map((message, index) => (
					<div key={index} className="rows">
						<div>
							<div></div>
						</div>
						<p>{message}</p>
					</div>
				))}
            </div>
            <div className="right">
                <img src={ReachOutImage} alt="Reach Out Image" />
            </div>
        </div>
    </>
}
