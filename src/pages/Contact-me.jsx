import React, { useEffect, useRef, useState } from "react";
import "../css/main.css";
import emailjs from "@emailjs/browser";

function ContactMe() {
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState({
		from_name: "",
		from_email: "",
		subject: "",
		message: "",
	});
	const form = useRef();

	// Form validation function
	const validateForm = (formData) => {
		const newErrors = {};

		// Name validation
		if (!formData.from_name.trim()) {
			newErrors.from_name = "Name is required";
		} else if (formData.from_name.trim().length < 4) {
			newErrors.from_name = "Name must be at least 4 characters";
		}

		// Email validation
		if (!formData.from_email.trim()) {
			newErrors.from_email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.from_email)) {
			newErrors.from_email = "Please enter a valid email address";
		}

		// Subject validation
		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		} else if (formData.subject.trim().length < 5) {
			newErrors.subject = "Subject must be at least 5 characters";
		}

		// Message validation
		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		} else if (formData.message.trim().length > 1000) {
			newErrors.message = "Message must be less than 1000 characters";
		}

		return newErrors;
	};

	// Real-time validation on input change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Clear error for this field when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: "",
			}));
		}
	};

	// Logic that sends email
	const sendEmail = async (e) => {
		e.preventDefault();

		const validationErrors = validateForm(formData);
		setErrors(validationErrors);

		// if there is an error do not send the email
		if (Object.keys(validationErrors).length > 0) {
			return;
		}

		emailjs
			.sendForm("service_rptcm8r", "template_r63zw8q", form.current, {
				publicKey: "tCXWVAXu2nipTH7Gk",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);
	};

	// Error display
	const ErrorMessage = ({ error }) => (error ? <p className="text-red-400 text-sm mt-1">{error}</p> : null);

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
			<form ref={form} onSubmit={sendEmail}>
				<fieldset>
					<legend>For any inquires or if you want to speak with me you can send an email below</legend>
					<ol>
						<li>
							<label htmlFor="from_name">Name: *</label>
							<input type="text" name="from_name" value={formData.from_name} onChange={handleInputChange} className={`auto-expand ${errors.from_name ? "border-red-500" : "border-white/20"}`} placeholder="Enter your name" />
							<ErrorMessage error={errors.from_name} />
						</li>
						<li>
							<label htmlFor="from_email">Email: *</label>
							<input type="email" name="from_email" value={formData.from_email} onChange={handleInputChange} className={`auto-expand ${errors.from_email ? "border-red-500" : "border-white/20"}`} placeholder="Enter your email" />
							<ErrorMessage error={errors.from_email} />
						</li>
						<li>
							<label htmlFor="phone_number">Phone Number: (Optional)</label>
							<input type="tel" name="phone_number" onChange={handleInputChange} className="auto-expand" placeholder="Enter your phone number" />
						</li>
						<li>
							<label htmlFor="subject">Subject: *</label>
							<input type="text" name="subject" value={formData.subject} onChange={handleInputChange} className={`auto-expand ${errors.subject ? "border-red-500" : "border-white/20"}`} placeholder="Enter the Subject for your email" />
							<div className="error"></div>
							<ErrorMessage error={errors.subject} />
						</li>
						<li>
							<label htmlFor="message">Message: *</label>
							<input type="text" name="message" value={formData.message} onChange={handleInputChange} className={`auto-expand ${errors.message ? "border-red-500" : "border-white/20"}`} placeholder="Enter your query, information and what you want to talk about" />
							<ErrorMessage error={errors.message} />
						</li>
					</ol>
				</fieldset>
				<input type="submit" value="Send Email" className="px-4.5 py-2 mt-6 bg-sky-500 hover:bg-sky-600 text-lg rounded-md form-btn" />
			</form>
		</div>
	);
}

export default ContactMe;
