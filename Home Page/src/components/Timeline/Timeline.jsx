import "./Timeline.css";
import timelineImg from "../../assets/images/timeline.png";
function Timeline() {
	return (
		<div className="timeline">
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
		</div>
	);
}

export default Timeline;
