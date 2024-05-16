import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { listofpicss } from "./weddingtext.js";
import "./Wedding.scss";

export default function Birthday() {
	const [mark, setMark] = useState(0);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const [pics, setPics] = useState([
		{ top: "4%", left: "4%", width: "24%", height: "60%" }, // pic1
		{ top: "4%", left: "32%", width: "24%", height: "32%" }, // pic2
		{ top: "4%", left: "60%", width: "36%", height: "32%" }, // pic3
		{ top: "68%", left: "4%", width: "36%", height: "28%" }, // pic4
		{ top: "68%", left: "44%", width: "24%", height: "28%" }, // pic5
		{ top: "40%", left: "72%", width: "24%", height: "56%" }, // pic6
	]);
	const [pics1, setPics1] = useState([
		{ top: "4%", left: "4%", width: "24%", height: "60%" }, // pic1
		{ top: "4%", left: "32%", width: "24%", height: "32%" }, // pic2
		{ top: "4%", left: "60%", width: "36%", height: "32%" }, // pic3
		{ top: "68%", left: "4%", width: "36%", height: "28%" }, // pic4
		{ top: "68%", left: "44%", width: "24%", height: "28%" }, // pic5
		{ top: "40%", left: "72%", width: "24%", height: "56%" }, // pic6
	]);
	const [pics2, setPics2] = useState([
		{ top: "68%", left: "4%", width: "36%", height: "28%" }, // pic1
		{ top: "4%", left: "4%", width: "24%", height: "60%" }, // pic2
		{ top: "4%", left: "32%", width: "24%", height: "32%" }, // pic3
		{ top: "68%", left: "44%", width: "24%", height: "28%" }, // pic4
		{ top: "40%", left: "72%", width: "24%", height: "56%" }, // pic5
		{ top: "4%", left: "60%", width: "36%", height: "32%" }, // pic6
	]);
	const [pics3, setPics3] = useState([
		{ top: "68%", left: "44%", width: "24%", height: "28%" }, // pic1
		{ top: "68%", left: "4%", width: "36%", height: "28%" }, // pic2
		{ top: "4%", left: "4%", width: "24%", height: "60%" }, // pic3
		{ top: "40%", left: "72%", width: "24%", height: "56%" }, // pic4
		{ top: "4%", left: "60%", width: "36%", height: "32%" }, // pic5
		{ top: "4%", left: "32%", width: "24%", height: "32%" }, // pic6
	]);
	const [pics4, setPics4] = useState([
		{ top: "40%", left: "72%", width: "24%", height: "56%" }, // pic1
		{ top: "68%", left: "44%", width: "24%", height: "28%" }, // pic2
		{ top: "68%", left: "4%", width: "36%", height: "28%" }, // pic3
		{ top: "4%", left: "60%", width: "36%", height: "32%" }, // pic4
		{ top: "4%", left: "32%", width: "24%", height: "32%" }, // pic5
		{ top: "4%", left: "4%", width: "24%", height: "60%" }, // pic6
	]);
	const [pics5, setPics5] = useState([
		{ top: "4%", left: "60%", width: "36%", height: "32%" }, // pic1
		{ top: "40%", left: "72%", width: "24%", height: "56%" }, // pic2
		{ top: "68%", left: "44%", width: "24%", height: "28%" }, // pic3
		{ top: "4%", left: "32%", width: "24%", height: "32%" }, // pic4
		{ top: "4%", left: "4%", width: "24%", height: "60%" }, // pic5
		{ top: "68%", left: "4%", width: "36%", height: "28%" }, // pic6
	]);
	const [pics6, setPics6] = useState([
		{ top: "4%", left: "32%", width: "24%", height: "32%" }, // pic1
		{ top: "4%", left: "60%", width: "36%", height: "32%" }, // pic2
		{ top: "40%", left: "72%", width: "24%", height: "56%" }, // pic3
		{ top: "4%", left: "4%", width: "24%", height: "60%" }, // pic4
		{ top: "68%", left: "4%", width: "36%", height: "28%" }, // pic5
		{ top: "68%", left: "44%", width: "24%", height: "28%" }, // pic6
	]);
	const [picsM, setPicsM] = useState([
		{ top: "4%", left: "4%", width: "42%", height: "40%" }, // pic1
		{ top: "4%", left: "52%", width: "40%", height: "18%" }, // pic2
		{ top: "26%", left: "52%", width: "40%", height: "18%" }, // pic3
		{ top: "56%", left: "4%", width: "42%", height: "18%" }, // pic4
		{ top: "78%", left: "4%", width: "42%", height: "18%" }, // pic5
		{ top: "56%", left: "52%", width: "42%", height: "40%" }, // pic6
	]);
	const [pics2M, setPics2M] = useState([
		{ top: "26%", left: "52%", width: "40%", height: "18%" }, // pic1
		{ top: "4%", left: "4%", width: "42%", height: "40%" }, // pic2
		{ top: "4%", left: "52%", width: "40%", height: "18%" }, // pic3
		{ top: "78%", left: "4%", width: "42%", height: "18%" }, // pic4
		{ top: "56%", left: "52%", width: "42%", height: "40%" }, // pic5
		{ top: "56%", left: "4%", width: "42%", height: "18%" }, // pic6
	]);
	const [pics3M, setPics3M] = useState([
		{ top: "4%", left: "52%", width: "40%", height: "18%" }, // pic1
		{ top: "26%", left: "52%", width: "40%", height: "18%" }, // pic2
		{ top: "4%", left: "4%", width: "42%", height: "40%" }, // pic3
		{ top: "56%", left: "52%", width: "42%", height: "40%" }, // pic4
		{ top: "56%", left: "4%", width: "42%", height: "18%" }, // pic5
		{ top: "78%", left: "4%", width: "42%", height: "18%" }, // pic6
	]);
	let listofpics = [pics1, pics2, pics3, pics4, pics5, pics6];

	if (windowWidth <= 1100) {
		listofpics = [picsM, pics2M, pics3M];
	}

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (windowWidth <= 1100) {
				setMark((prev) => (prev + 1) % 3);
			} else {
				setMark((prev) => (prev + 1) % 6);
			}
		}, 2500); // Adjust the interval duration as per your preference

		return () => clearInterval(intervalId);
	}, []);
	useEffect(() => {
		setPics(listofpics[mark]);
	}, [mark]); // Adjust the interval duration as per your preference

	return (
		<div id="wedding-container">
			<div id="title-wedding">Wedding</div>
			<div id="pictures">
				{pics.map((pic, index) => {
					return (
						<div
							key={index}
							id="pic"
							style={{
								top: pics[index]["top"],
								left: pics[index]["left"],
								height: pics[index]["height"],
								width: pics[index]["width"],
							}}
						>
							<img src={listofpicss[index]} alt="weddingpic"/>
						</div>
					);
				})}
			</div>
		</div>
	);
}
