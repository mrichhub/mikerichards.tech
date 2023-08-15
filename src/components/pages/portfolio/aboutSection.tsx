import avatarImage from "../../../assets/images/mike-richards-avatar.png"
import { AnimateInWhenVisible } from "../../animateInWhenVisible/animateInWhenVisible"
import "./aboutSection.scss"

export function AboutSection() {
	return (
		<div className="about-section">
			<div className="about-table">
				<div className="image">
					<AnimateInWhenVisible delay={250}>
						<img src={avatarImage} />
					</AnimateInWhenVisible>
				</div>
				<div className="about-content">
					<AnimateInWhenVisible delay={250}>
						<p>
							With over 15 years of tech industry experience, I've developed, architected and led many projects across the technology spectrum.
							I've engineered large-scale consumer-focused apps for Fortune 500 companies, and I've established tech startups that deliver 
							apps with highly dynamic UIs and extreme scalability.
						</p>
					</AnimateInWhenVisible>

					<AnimateInWhenVisible delay={250}>
						<p>
							I've consistently embraced the challenges of various roles. As a collaborative teammate, I've contributed to feature enhancements,
							placing a strong emphasis on exceptional user experiences while maintaining optimized and readable code. Additionally, I have a
							deep understanding of the full stack, and have architected systems that align with and further business objectives.
						</p>
					</AnimateInWhenVisible>

					<AnimateInWhenVisible delay={250}>
						<p>
							Technology is my passion, and I love creating experiences that people enjoy. What truly excites me is the ability to transform
							ideas - no matter their scale - into realities. With a robust skill set at my disposal, I am well-equipped to navigate the
							complexities of bringing concepts to life. I have the expertise to nurture products, fostering their growth in a manner that
							is both sustainable and scalable.
						</p>
					</AnimateInWhenVisible>
				</div>
			</div>
		</div>
	)
}
