import Title from "./Components/Landing/titlepage.jsx";
import Birthday from "./Components/Birthday/Birthday.jsx";
import Wedding from "./Components/Wedding/Wedding.jsx";
import Corporate from "./Components/Corporate/Corporate.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./app.scss";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";
function App() {
	return (
		<>
			<ReactLenis root>
				<div id="body-container">
					{/* <video id="confetti" autoPlay>
						<source src="./assets/hbd.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video> */}
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
