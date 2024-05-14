import Title from "./Components/Landing/titlepage.jsx";
import Birthday from "./Components/Birthday/Birthday.jsx";
import Wedding from "./Components/Wedding/Wedding.jsx";
import Corporate from "./Components/Corporate/Corporate.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./app.scss";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
function App() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight * 2) {
				setVisible(true);
			}
			if (window.scrollY > window.innerHeight * 3) {
				setVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Empty dependency array to run effect only once
	return (
		<>
			<ReactLenis root>
				<div id="body-container">
					{visible && <img src="./hbd.gif" id="confetti" />}
					<Title />
					<Wedding />
					<Birthday />
					<Corporate />
					<Footer />
				</div>
			</ReactLenis>
		</>
	);
}

export default App;
