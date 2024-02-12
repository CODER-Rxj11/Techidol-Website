import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
function Navbar() {
	return (
		<nav className="navbar">
			<img src={Logo} alt="TechIdol Logo" />
			<div className="links">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/about">About</NavLink>
				<NavLink to="/service">
					Services <IoIosArrowDown />
				</NavLink>
				<NavLink to="/insight">Insights</NavLink>
				<NavLink to="/carrer">Career</NavLink>
				<NavLink to="/contact">Contact</NavLink>
			</div>
			<button>Get a Quote</button>
		</nav>
	);
}

export default Navbar;
