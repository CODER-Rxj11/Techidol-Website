import FAQ from "../components/FAQ/FAQ";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Insight from "../components/Insight/Insight";
import ReachOut from "../components/ReachOut/ReachOut";
const url = "Home/Contact";
const heading = "Contact Us";
export default function Contact() {
<<<<<<< HEAD
    return <>
        <Insight />
        <ReachOut />
        <GetInTouch />
        <FAQ />
    </>
=======
	return (
		<>
			<Insight url={url} heading={heading} />
			<ReachOut />
			<GetInTouch />
			<FAQ />
		</>
	);
>>>>>>> 93ed3d116e7c4cfaefe0e8d4bbab1c13a6d0f52e
}
