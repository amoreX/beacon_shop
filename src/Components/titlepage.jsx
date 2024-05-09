import { motion } from "framer-motion";
import "./title.scss";
import { allinfo,pictures } from "./text.js";
export default function Title() {
	const names = ["Birthday Parties", "Wedding Planning", "Corporate Evenets"];
	const pics = ["1", "2", "3"];
	const style = {
		top: ["5%", "15%", "35%"],
		left: ["20%", "50%", "15%"],
	};
	return (
		<>
			<div id="main-container">
				<div id="title">Beacon Events</div>
				<div id="body">
					<div id="left-container">
						<div id="title">We create Unforgettable Experiences!</div>
						<div id="content">
							Welcome to Beacon Events, your premier destination for unforgettable event
							experiences. As you continue your journey through our services, allow us to provide
							you with a glimpse into the world of possibilities we offer.
						</div>
						<div id="sub-content">
							<div>Our services, designed to cater to every occasion:</div>
							<div id="list">
								{allinfo.map((content, index) => {
									return (
										<div key={index}>
											<div id="list-items">
												<div id="index">{index + 1}.</div>
												<div id="list-content">
													<span style={{ color: "#a66772", fontWeight: "600" }}>
														{names[index]}:
													</span>
													{content}
												</div>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
					<div id="right-container">
						{pics.map((content, index) => {
							return (
								<div
									key={index}
									id="pic-container"
									style={{ top: style["top"][index], left: style["left"][index] }}
								>
									<img src={pictures[index]} alt="image" />
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
