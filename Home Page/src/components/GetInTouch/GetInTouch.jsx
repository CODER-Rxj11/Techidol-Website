import "./GetInTouch.css"
import GetInTouchImage from "../../assets/images/getintouch.png"
export default function GetInTouch() {
    return <>
        <div className="getintouch">
            <img src={GetInTouchImage} alt="" />
            <form action="">
                    <h1>Get in Touch with <span>Techidol Solutions</span></h1>
                    <h3>Thank you for your interest in Techidol Solutions. We value your inquiries and feedback.</h3>
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <textarea name="textarea" id="textarea" cols="10" rows="7" placeholder="Write a message ...."></textarea>
                    <button>Submit</button>
            </form>
        </div>
    </>
}
