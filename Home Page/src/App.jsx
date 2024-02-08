import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Footer } from "./components";
import Insights from "./pages/Insights";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/insight" element={<Insights />} />
				<Route path="*" element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
