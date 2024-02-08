/* eslint-disable react/prop-types */
import "./Services.css";
import serviceimg from "../../assets/images/serviceimg.png";
import threadimg from "../../assets/images/thread.png";
import { MdHive } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaDesktop } from "react-icons/fa";
function Services() {
	return (
		<div className="services">
			<a href="#">Our Services</a>
			<h2>Tailored IT services, limitless solutions.</h2>
			<p>Transforming Challenges into solutions, our services redefine your digital experience.</p>
			<button>See All Services</button>
			<div>
				<img src={serviceimg} alt="service image" />

				<div>
					<Box Icon={MdHive} heading="AIML Services" desc="AI/ML services, driving innovation." />
					<Box Icon={RiCustomerService2Fill} heading="BPO Services" desc="BPO Excellence, Your Business Advantage." />
					<Box Icon={FaDesktop} heading="IT Services" desc="IT Solutions, Your Success Accelerated." />
				</div>
			</div>
			<img src={threadimg} alt="thread" />
		</div>
	);
}

export const Box = ({ Icon, heading, desc }) => {
	return (
		<div className="box">
			<div>
				<Icon />
			</div>
			<div>
				{/* <h3></h3> */}
				<h3>{heading}</h3>
				<p>{desc}</p>
				{/* <p></p> */}
			</div>
			<IoIosArrowForward />
		</div>
	);
};

export default Services;
