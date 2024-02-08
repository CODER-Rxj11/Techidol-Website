import "./BlogComponent.css";
import ComponentImage from "../../assets/images/ctaimg1.png";
export default function BlogComponent() {
	return (
		<>
			<div className="blog-component">
				<img src={ComponentImage} alt="Component Image" />
				<div className="content">
					<h5>Industry Knowledge</h5>
					<h1>Interview With TechIdol Solutions CEO : Shaping the futures of IT Fields.</h1>
					<div className="info">
						<a href="#">Read More</a>
						<h4>Date : 14/03/2014</h4>
					</div>
				</div>
			</div>
		</>
	);
}
