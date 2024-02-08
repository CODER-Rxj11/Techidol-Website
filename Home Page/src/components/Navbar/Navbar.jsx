import Logo from "../../assets/images/Logo.png";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
function Navbar() {
	return (
		<nav className="navbar">
			<img src={Logo} alt="TechIdol Logo" />
			<div className="links">
				<a href="">Home</a>
				<a href="">About</a>
				<a href="">
					Services <IoIosArrowDown />
				</a>
				<a href="">Insights</a>
				<a href="">Career</a>
				<a href="">Contact</a>
			</div>
			<button>Get a Quote</button>
		</nav>
	);
}

export default Navbar;
