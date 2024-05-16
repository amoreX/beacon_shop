import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./title.scss";
import { allinfo, pictures } from "./text.js";
export default function Title() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const names = ["Birthday Parties", "Wedding Planning", "Corporate Events"];
	const pics = ["1", "2", "3"];
	let style = {
		// top: ["5%", "15%", "35%"],
		// left: ["20%", "50%", "15%"],
		// top: ["4%", "16%", "32%"],
		// left: ["16%", "40%", "8%"],
	};
	// const handleInitialAnimationComplete = () => {
	// 	setInitialAnimationCompleted(true);
	// };
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	if (windowWidth < 1100) {
		style = {
			top: ["4%", "16%", "32%"],
			left: ["16%", "40%", "8%"],
		};
	} else {
		style = {
			top: ["5%", "15%", "35%"],
			left: ["20%", "50%", "15%"],
		};
	}

	return (
		<>
			<div id="main-container">
				<motion.div
					id="title"
					initial={{ y: 30, opacity: 0 }}
					transition={{ type: "tween", ease: "easeInOut", delay: 0.3 }}
					animate={{ y: 0, opacity: 1 }}
					// onAnimationComplete={handleInitialAnimationComplete}
				>
					BEACON <span style={{color:"white"}}> EVENTS</span>
				</motion.div>
				<div id="body">
					<div id="left-container">
						<motion.div
							id="title"
							initial={{ y: 30, opacity: 0 }}
							transition={{ type: "tween", ease: "easeInOut", delay: 0.5 }}
							animate={{ y: 0, opacity: 1 }}
						>
							We create Unforgettable Experiences!
						</motion.div>
						<motion.div
							id="content"
							initial={{ y: 30, opacity: 0 }}
							transition={{ type: "tween", ease: "easeInOut", delay: 0.7 }}
							animate={{ y: 0, opacity: 1 }}
						>
							Welcome to Beacon Events, your premier destination for unforgettable event
							experiences. As you continue your journey through our services, allow us to provide
							you with a glimpse into the world of possibilities we offer.
						</motion.div>
						<div id="sub-content">
							{/* {allinfo.map((content, index) => {
									return (
										<div key={index}>
											<motion.div
												id="list-items"
												initial={ { y: 30, opacity: 0 }}
												transition={{ type: "tween", ease: "easeInOut", delay: 0.9 + index * 0.1 }}
												animate={{ y: 0, opacity: 1 }}
											>
												<div id="index">{index + 1}.</div>
												<div id="list-content">
													<span style={{ color: "#a66772", fontWeight: "600" }}>
														{names[index]}:
													</span>
													{content}
												</div>
											</motion.div>
										</div>
									);
								})} */}
							{names.map((party, index) => {
								return (
									<motion.div
										id="names"
										initial={{ y: 48, opacity: 0 }}
										transition={{ type: "tween", delay: 0.9 + index * 0.5 }}
										animate={{ y: 0, opacity: 1 }}
									>
										{party}
									</motion.div>
								);
							})}
						</div>
					</div>
					<div id="right-container">
						{pics.map((content, index) => {
							return (
								<motion.div
									key={index}
									id="pic-container"
									style={{ top: style["top"][index], left: style["left"][index] }}
									initial={{ scale: 0.001, opacity: 0 }}
									transition={{ type: "tween", ease: "easeInOut", delay: 0.9 + index * 0.1 }}
									animate={{ scale: 1, opacity: 1 }}
								>
									<img src={pictures[index]} alt="image" />
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
