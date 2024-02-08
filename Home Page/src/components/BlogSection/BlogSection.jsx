import { IoIosArrowDown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import "./BlogSection.css";
import BlogComponent from "../BlogComponent/BlogComponent";
export default function BlogSection() {
	return (
		<div className="blog-section">
			<div className="blog-nav">
				<a href="#">All</a>
				<a href="#">Industry Knowledge</a>
				<a href="#">Stories</a>
				<a href="#">Case Studies</a>
				<div className="search">
					<button>
						Filter <IoIosArrowDown />
					</button>
					<FaSearch />
				</div>
			</div>
			<BlogComponent />
			<BlogComponent />
			<BlogComponent />
			<BlogComponent />
			<BlogComponent />
		</div>
	);
}
