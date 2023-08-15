import { AnimateInWhenVisible } from "../../animateInWhenVisible/animateInWhenVisible"
import "./contactSection.scss"

export function ContactSection() {
	return (
		<div className="contact-section">
			<AnimateInWhenVisible>
				<div className="content">
					<h4>Available for select opportunities</h4>

					<p>
						Do you need some tech help? Send me an email to contact me!
					</p>

					<div>
						<a href="mailto:hi@mikerichards.tech">hi@mikerichards.tech</a>
					</div>
				</div>
			</AnimateInWhenVisible>
		</div>
	)
}
