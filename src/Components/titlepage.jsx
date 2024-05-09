import { motion } from "framer-motion";
import { useState } from "react";
import "./title.scss";
import { allinfo, pictures } from "./text.js";
export default function Title() {
	const [initialAnimationCompleted, setInitialAnimationCompleted] = useState(false);
	const names = ["Birthday Parties", "Wedding Planning", "Corporate Evenets"];
	const pics = ["1", "2", "3"];
	const style = {
		top: ["5%", "15%", "35%"],
		left: ["20%", "50%", "15%"],
	};
	// const handleInitialAnimationComplete = () => {
	// 	setInitialAnimationCompleted(true);
	// };

	return (
		<>
			<div id="main-container">
				<motion.div
					id="title"
					initial={initialAnimationCompleted ? {} : { y: 30, opacity: 0 }}
					transition={{ type: "tween", ease: "easeInOut", delay: 0.3 }}
					animate={{ y: 0, opacity: 1 }}
					// onAnimationComplete={handleInitialAnimationComplete}
				>
					Beacon Events
				</motion.div>
				<div id="body">
					<div id="left-container">
						<motion.div
							id="title"
							initial={initialAnimationCompleted ? {} : { y: 30, opacity: 0 }}
							transition={{ type: "tween", ease: "easeInOut", delay: 0.5 }}
							animate={{ y: 0, opacity: 1 }}
						>
							We create Unforgettable Experiences!
						</motion.div>
						<motion.div
							id="content"
							initial={initialAnimationCompleted ? {} : { y: 30, opacity: 0 }}
							transition={{ type: "tween", ease: "easeInOut", delay: 0.7 }}
							animate={{ y: 0, opacity: 1 }}
						>
							Welcome to Beacon Events, your premier destination for unforgettable event
							experiences. As you continue your journey through our services, allow us to provide
							you with a glimpse into the world of possibilities we offer.
						</motion.div>
						<div id="sub-content">
							<motion.div
								initial={initialAnimationCompleted ? {} : { y: 30, opacity: 0 }}
								transition={{ type: "tween", ease: "easeInOut", delay: 0.8 }}
								animate={{ y: 0, opacity: 1 }}
							>
								Our services, designed to cater to every occasion:
							</motion.div>
							<div id="list">
								{allinfo.map((content, index) => {
									return (
										<div key={index}>
											<motion.div
												id="list-items"
												initial={initialAnimationCompleted ? {} : { y: 30, opacity: 0 }}
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
								})}
							</div>
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
