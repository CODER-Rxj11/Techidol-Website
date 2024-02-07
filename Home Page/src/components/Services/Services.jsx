import "./Services.css";
import serviceimg from "../../assets/images/serviceimg.png";
import threadimg from "../../assets/images/thread.png";
function Services() {
	return (
		<div className="services">
			<a href="#">Our Services</a>
			<h2>Tailored IT services, limitless solutions.</h2>
			<p>Transforming Challenges into solutions, our services redefine your digital experience.</p>
			<button>See All Services</button>
			<div>
				<img src={serviceimg} alt="service image" />

				<div></div>
			</div>
			<img src={threadimg} alt="thread" />
		</div>
	);
}

export default Services;
