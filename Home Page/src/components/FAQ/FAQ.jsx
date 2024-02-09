import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { FaPhoneAlt, FaLink ,FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot,FaSquareInstagram  } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";


import "./FAQ.css"
import { useState } from "react";
export default function FAQ() {

    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    };

    const data = [
        {
            question: "Is this thing on?",
            answer:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Ducimus ab velit ut deleniti illo inventore iusto perspiciatis dolor sunt, error possimus, assumenda deserunt? Laborum sunt distinctio reprehenderit odit ullam dicta animi vel nesciunt iste ratione ex quod ea, earum, nemo qui, harum unde commodi necessitatibus modi natus quae!",
        },
        {
            question: "Is this thing on?",
            answer:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Ducimus ab velit ut deleniti illo inventore iusto perspiciatis dolor sunt, error possimus, assumenda deserunt? Laborum sunt distinctio reprehenderit odit ullam dicta animi vel nesciunt iste ratione ex quod ea, earum, nemo qui, harum unde commodi necessitatibus modi natus quae!",
        },
        {
            question: "Is this thing on?",
            answer:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quam. Ducimus ab velit ut deleniti illo inventore iusto perspiciatis dolor sunt, error possimus, assumenda deserunt? Laborum sunt distinctio reprehenderit odit ullam dicta animi vel nesciunt iste ratione ex quod ea, earum, nemo qui, harum unde commodi necessitatibus modi natus quae!",
        },
        {
            question: "Is this thing on?",
            answer:
                "We talk and understand almost every regional language in India. With our hybrid model of Work from the office and work from anywhere, we help our clients build scale",
        },
    ];


    return <>

        <div className="faq">
            <div className="card-components">
                <div className="card-component">
                    <div className="circle"></div>
                    <div className="circle-content">
                        <div className="circ">
                        <FaLocationDot />
                        </div>
                        <h4>Address</h4>
                    </div>

                    <h3>
                        Building No 2,Bhopal, 
                    </h3>
                    <h3>Bagh Dilkusha 462023Madhya Pradesh</h3>
                </div>
                <div className="card-component">
                    <div className="circle"></div>
                    <div className="circle-content">
                        <div className="circ">
                        <FaPhoneAlt />
                        </div>
                        <h4>Contact</h4>
                    </div>

                    <h3>
                    +91 7238897498
                    </h3>
                    <h3>
                    contact@techidolsolutions.com
                    </h3>
                </div>
                <div className="card-component">
                    <div className="circle"></div>
                    <div className="circle-content">
                        <div className="circ">
                        <FaLink />
                        </div>
                        <h4>Follow</h4>
                    </div>

                    <h3>
                    Follow us on 
                    </h3>
                    <h2>
                    <AiFillTwitterCircle /><FaFacebook /><FaSquareInstagram /><FaLinkedin /><IoLogoWhatsapp /></h2>
                </div>
            </div>
            <h3>FAQs</h3>
            <h1>Frequently Asked <span>Questions</span></h1>

            {/* Accordian */}

            <div className="left-cols">
                <div className="accordian">
                    {data.map((item, i) => (
                        <div className="item">
                            <div className="title" onClick={() => toggle(i)}>
                                <p>
                                    {item.question}{" "}
                                    <span>
                                        {selected === i ? (
                                            <IoIosArrowUp className="arrowIcons" />
                                        ) : (
                                            <IoIosArrowDown className="arrowIcons" />
                                        )}
                                    </span>
                                </p>
                            </div>
                            <div
                                className={selected === i ? "content show" : "content"}
                            >
                                {item.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Accordian */}

        </div>


    </>
}
