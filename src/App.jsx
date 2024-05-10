import Title from "./Components/Landing/titlepage.jsx";
import Birthday from "./Components/Birthday/Birthday.jsx";
import "./app.scss";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
function App() {
	const [lastScrollTop, setLastScrollTop] = useState(0);

	const scrollBy100vh = (event) => {
		const currentScrollTop = window.scrollY;
		const delta = currentScrollTop - lastScrollTop; // positive for down, negative for up

		if (delta > 0) {
			// Scrolled down, scroll down by 100vh
			window.scrollBy(0, window.innerHeight);
		} else if (delta < 0) {
			// Scrolled up, scroll up by 100vh
			window.scrollBy(0, -window.innerHeight);
		}

		setLastScrollTop(currentScrollTop);
	};

	useEffect(() => {
		window.addEventListener("scroll", scrollBy100vh);

		// Cleanup function to remove listener on unmount
		return () => window.removeEventListener("scroll", scrollBy100vh);
	}, []);
	return (
		<>
			<ReactLenis root>
				<div id="body-container">
					<Title />
					<Birthday />
				</div>
			</ReactLenis>
		</>
	);
}

export default App;
