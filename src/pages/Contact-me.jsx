import React, {useEffect} from "react";
import "../css/main.css";

function ContactMe() {
	useEffect(() => {
		const autoExpandInput = (inputElement) => {
			inputElement.addEventListener("input", function () {
				const style = window.getComputedStyle(this);
				const canvas = document.createElement("canvas");
				const context = canvas.getContext("2d");
				context.font = style.fontSize + " " + style.fontFamily;

				const textWidth = context.measureText(this.value).width;
				const inputWidth = this.offsetWidth - 20; 

				if (textWidth >= inputWidth && this.tagName === "INPUT") {
					const textarea = document.createElement("textarea");
					textarea.value = this.value;
					textarea.className = this.className;
					textarea.placeholder = this.placeholder;
					textarea.rows = 1;
					textarea.style.resize = "none";
					textarea.style.overflow = "hidden";

					this.parentNode.replaceChild(textarea, this);
					textarea.focus();

					const length = textarea.value.length;
					textarea.setSelectionRange(length, length);

					const autoResize = () => {
						textarea.style.height = "auto";
						textarea.style.height = textarea.scrollHeight + "px";
					};

					textarea.addEventListener("input", autoResize);

					autoResize();
				}
			});
		};

		document.querySelectorAll(".auto-expand").forEach(autoExpandInput);
	}, []);


    return (
		<div className="contact">
			<div className="headingdiv">
				<h1>Contact Me</h1>
			</div>
				<form action="">
					<fieldset>
						<legend>For any inquires or if you want to speak with me you can send an email below</legend>
						<ol>
							<li>
								<label htmlFor="name">Name:</label>
								<input type="name" placeholder="Enter your name" />
								<div className="error"></div>
							</li>
							<li>
								<label htmlFor="phone-number">Phone Number:</label>
								<input type="phone-number" placeholder="Enter your phone-number" />
								<div className="error"></div>
							</li>
							<li>
								<label htmlFor="subject">Subject:</label>
								<input type="subject" className="auto-expand" placeholder="Enter the Subject for your email" />
								<div className="error"></div>
							</li>
							<li>
								<label htmlFor="content">Content:</label>
								<input type="content" className="auto-expand" placeholder="Enter your query, information and what you want to talk about" />
								<div className="error"></div>
							</li>
						</ol>
					</fieldset>
				</form>
		</div>
	);
}

export default ContactMe;
