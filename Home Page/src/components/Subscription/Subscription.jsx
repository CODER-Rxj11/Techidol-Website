import subscripImg from "../../assets/images/subscrip.png";
import "./Subscription.css";

function Subscription() {
	return (
		<div className="subscription">
			<div>
				<h2>Transform Your Tech Future – Request a Proposal Today!</h2>
				<p>
					Seize the Future of IT – Request Your Proposal Now! Experience a tailored approach to technology solutions. Click to initiate
					change and receive a personalized proposal for your business today.
				</p>
				<form>
					<input type="text" placeholder="abcd@gmail.com" />
					<button type="submit">Send a Proposal</button>
				</form>
			</div>
			<img src={subscripImg} alt="" />
		</div>
	);
}

export default Subscription;
