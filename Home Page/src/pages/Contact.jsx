import FAQ from "../components/FAQ/FAQ";
import GetInTouch from "../components/GetInTouch/GetInTouch";
import Insight from "../components/Insight/Insight";
import ReachOut from "../components/ReachOut/ReachOut";
const url = "Home/Contact"
const heading="Contact Us"
export default function Contact() {
    return <>
        <Insight />
        <ReachOut />
        <GetInTouch />
        <FAQ />
    </>
}
