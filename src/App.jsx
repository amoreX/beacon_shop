import Title from "./Components/Landing/titlepage.jsx";
import Birthday from "./Components/Birthday/Birthday.jsx";
import Wedding from "./Components/Wedding/Wedding.jsx";
import Corporate from "./Components/Corporate/Corporate.jsx";
import "./app.scss";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
function App() {
	// const [lastScrollTop, setLastScrollTop] = useState(0);
	// const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setWindowWidth(window.innerWidth);
	// 	};

	// 	window.addEventListener("resize", handleResize);

	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);
	// const scrollBy100vh = (event) => {
	// 	const currentScrollTop = window.scrollY;
	// 	const delta = currentScrollTop - lastScrollTop; // positive for down, negative for up
	// 	if (windowWidth > 1100) {
	// 		if (delta > 0) {
	// 			// Scrolled down, scroll down by 100vh
	// 			window.scrollBy(0, window.innerHeight);
	// 		} else if (delta < 0) {
	// 			// Scrolled up, scroll up by 100vh
	// 			window.scrollBy(0, -window.innerHeight);
	// 		}

	// 		setLastScrollTop(currentScrollTop);
	// 	}
	// };

	// useEffect(() => {
	// 	if (windowWidth > 1100) {
	// 		window.addEventListener("scroll", scrollBy100vh);
	// 	}

	// 	// Cleanup function to remove listener on unmount
	// 	return () => window.removeEventListener("scroll", scrollBy100vh);
	// }, []);
	return (
		<>
			<ReactLenis root>
				<div id="body-container">
					<Title />
					<Wedding />
					<Birthday />
					<Corporate />
				</div>
			</ReactLenis>
		</>
	);
}

export default App;
