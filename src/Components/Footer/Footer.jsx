import { useReducedMotion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Footer.scss";
import { useRef } from "react";
export default function Footer() {
	const serviceId = "service_vjrv5xh";
	const templateId = "template_wl12v6v";
	const publicKey = "2tYHnFk_p_sQG1fiK";

	const mail = useRef();
	const cont = useRef();
	const send = () => {
		// console.log(mail.current.value);
		// console.log(cont.current.value);
		const templateParams = {
			name: mail.current.value,
			message: cont.current.value,
		};

		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log("Email sent successfully");
				mail.current.value = "";
				cont.current.value = "";
			})
			.catch((error) => {
				console.log("Email failed to send");
				console.log(error);
			});
	};
	return (
		<div id="footer-container">
			<div id="footer-title">
				<span id="main-title"> Contact Us</span>
				<span id="sub-title">
					In addition to weddings and birthdays, [Organizer's Name] offers expert planning services
					for corporate events, holiday celebrations, community gatherings, and special occasions.
					We'll ensure it's a resounding success from start to finish.
				</span>
			</div>
			<div id="footer-content">
				<div id="left-content">
					<div id="title-footer-left">Reach Us Directly</div>
					<div id="content-footer-left">
						<div id="kk">
							<div>Organisers Name</div>
							<div>Address</div>
							<div>City,State,Zip Code</div>
							<div>
								<span style={{ fontWeight: "600" }}>Phone:</span>[Phone Number]
							</div>
							<div>
								<span style={{ fontWeight: "600" }}>Email:</span>[Email Address]
							</div>
						</div>
						<div style={{ fontWeight: "600" }}>Business Hours</div>
						<div id="kk">
							<div>Monday - Friday: [Opening Hours]</div>
							<div>Saturday: [Opening Hours]</div>
							<div>Sunday: [Opening Hours]</div>
						</div>
						<div style={{ fontWeight: "600" }}>Connect with Us</div>
					</div>
				</div>
				<div id="bar"></div>
				<div id="right-content">
					<div id="title-footer-right">Get in Touch</div>
					<div id="right-content-sub">Have questions or ready to start planning your event? </div>
					<div id="right-content-sub">Fill out the form below. </div>
					<div id="email-box">
						<textarea ref={mail} placeholder="Email Address"></textarea>
					</div>
					<div id="content-email">
						<textarea
							ref={cont}
							placeholder="Please use this space to provide details about your event such as date, location, estimated guests, theme preferences, or any specific requests you may have. "
						></textarea>
					</div>
					<div id="send-btn" onClick={() => send()}>
						Send
					</div>
				</div>
			</div>
		</div>
	);
}
