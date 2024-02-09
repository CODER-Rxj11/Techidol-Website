import { Services, Timeline, Articles, Promotion, Subscription, Testinomial } from "../components";
import Insight from "../components/Insight/Insight";

const url = "Home";
const heading = "Home Page";
function Home() {
	return (
		<>
			<Insight url={url} heading={heading} />
			<Timeline />
			<Services />
			<Articles />
			<Promotion />
			<Subscription />
			<Testinomial />
		</>
	);
}

export default Home;
