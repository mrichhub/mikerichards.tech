import leaderIcon from "../../../assets/images/leader-icon.png"
import skillsIcon from "../../../assets/images/skills-icon.png"
import { AnimateInWhenVisible } from "../../animateInWhenVisible/animateInWhenVisible"
import { TypewriterWhenVisible } from "../../typewriter/typewriterWhenVisible"
import "./skillsSection.scss"

export function SkillsSection() {
	return (
		<div className="skills-section">
			<div className="items">
				<AnimateInWhenVisible delay={250}>
					<div className="item">
						<div className="header">
							<div className="icon">
								<img src={leaderIcon} alt="Leader" />
							</div>
							<div className="headline">
								<h4><TypewriterWhenVisible text="Tech" delay={500} /></h4>
							</div>
						</div>
						<p>
							Experienced with leading technology development in growth stage companies, as well as getting heads down to get code done.
						</p>
						<p>
							Tech is my passion, it's what I do in my free time, and I like delivering quality products that make people happy.
						</p>
					</div>
				</AnimateInWhenVisible>

				<AnimateInWhenVisible delay={500}>
					<div className="item">
						<div className="header">
							<div className="icon">
								<img src={skillsIcon} alt="Skills" />
							</div>
							<div className="headline">
								<h4><TypewriterWhenVisible text="Skills" delay={750} /></h4>
							</div>
						</div>
						<em className="note">
							These are the skills I'm most proficient at. I'm open to all technologies and continually furthering my knowledge.
						</em>
						<ul>
							<li>
								<h5>React</h5>
								<em>(This site developed in React)</em>
								<a href="https://github.com/mrichhub/mikerichards.tech" target="_blank">See code on GitHub</a>
							</li>
							<li>
								<h5>iOS</h5>
								Swift, Obj-C
							</li>
							<li>
								<h5>Node.js</h5>
								Express, Socket.io
							</li>
							<li>
								<h5>Typescript</h5>
							</li>
							<li>
								<h5>C#</h5>
							</li>
							<li>
								<h5>APIs</h5>
								Protocols, data-handling, scalability
							</li>
							<li>
								<h5>Web Sockets</h5>
								Real-time data, scalability
							</li>
							<li>
								<h5>Cloud</h5>
								AWS, Azure
							</li>
							<li>
								<h5>Web</h5>
								React, Redux, Angular, etc.
							</li>
						</ul>
					</div>
				</AnimateInWhenVisible>

				{/* <AnimateInWhenVisible delay={750}>
					<div className="item">
						<div className="header">
							<div className="icon">
								<img src={skillsIcon} alt="Skills" />
							</div>
							<div className="headline">
								<h4><TypewriterWhenVisible text="Something Else" delay={1000} /></h4>
							</div>
						</div>
					</div>
				</AnimateInWhenVisible> */}
			</div>
		</div>
	)
}
