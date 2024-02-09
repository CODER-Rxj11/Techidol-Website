import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Footer } from "./components";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home url="Home" heading="Home" />} />
				<Route path="/insight" element={<Insights url="Home/Insights" heading="Insights" />}  />
				<Route path="/contact" element={<Contact url="Home/Contact" heading="Contact" />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
