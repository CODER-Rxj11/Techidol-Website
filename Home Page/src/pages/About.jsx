import Insight from "../components/Insight/Insight";
import StyleGrid from "../components/StyleGrid/StyleGrid";
const url = "Home/About";
const heading = "About Us";
function About() {
	return (
		<>
			<Insight url={url} heading={heading} />
			<StyleGrid />
		</>
	);
}

export default About;
