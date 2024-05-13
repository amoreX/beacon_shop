import "./Footer.scss";

export default function Footer() {
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
						<textarea placeholder="Email Address"></textarea>
					</div>
					<div id="content-email">
						<textarea placeholder="Please use this space to provide details about your event such as date, location, estimated guests, theme preferences, or any specific requests you may have. "></textarea>
					</div>
					<div id="send-btn">Send</div>
				</div>
			</div>
		</div>
	);
}
