import "./Timeline.css";
import timelineImg from "../../assets/images/timeline.png";
// import { FaCircle } from "react-icons/fa";
// import { AiOutlineArrowRight } from "react-icons/ai";
function TimeLine() {
	return (
		<div className="timeLine">
			<h2>
				How we <span>Work</span>
			</h2>
			<p>
				Our Approach! We collaborate seemlessly, listen intently to your needs, and employ a meticulous process to deliver tailored solutions.
				With a commitment to transparency, innovation and excellenc, we ensure a smooth journey from concept to implementation, turning your
				vision into reality.
			</p>
			{/* need to replace image */}
			<img src={timelineImg} alt="timeline image" />
			{/* <div className="horizontal-timeline">
				<div className="timeline-line"></div>
				<div className="timeline">
					<div className="timeline-item">
						<div className="timeline-circle">
							<FaCircle />
						</div>
						<div className="timeline-content">
							<h3>Event 1</h3>
							<p>Description of Event 1</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-content">
							<h3>Event 2</h3>
							<p>Description of Event 2</p>
						</div>
						<div className="timeline-circle">
							<AiOutlineArrowRight />
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-circle">
							<AiOutlineArrowRight />
						</div>
						<div className="timeline-content">
							<h3>Event 3</h3>
							<p>Description of Event 3</p>
						</div>
					</div>
					<div className="timeline-item">
						<div className="timeline-content">
							<h3>Event 4</h3>
							<p>Description of Event 4</p>
						</div>
						<div className="timeline-circle">
							<AiOutlineArrowRight />
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
}

export default TimeLine;
