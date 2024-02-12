import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Footer } from "./components";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home url="Home" heading="Home" />} />
				<Route path="/insight" element={<Insights />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
