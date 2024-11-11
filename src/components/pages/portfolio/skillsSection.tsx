import leaderIcon from "../../../assets/images/leader-icon.png"
import softwareDevelopmentIcon from "../../../assets/images/software-development-icon.png"
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
								<img src={softwareDevelopmentIcon} alt="Software Development" />
							</div>
							<div className="headline">
								<h4><TypewriterWhenVisible text="Technologies" delay={500} /></h4>
							</div>
						</div>
						<em className="note">
							The following is a highlight of skills, but is not all-encompassing.
						</em>
						<ul>
							<li>
								<h5>Node.js</h5>
								API, SSE, Sockets, Express, etc.
							</li>
							<li>
								<h5>TypeScript/JavaScript</h5>
							</li>
							<li>
								<h5>Databases</h5>
								MongoDB, PostgreSQL, Redis, etc.
							</li>
							<li>
								<h5>React</h5>
								<em>(This site developed in React)</em>
								<a href="https://github.com/mrichhub/mikerichards.tech" target="_blank">See code on GitHub</a>
							</li>
							<li>
								<h5>APIs</h5>
								Protocols, scalability, security, etc.
							</li>
							<li>
								<h5>Sockets</h5>
								Real-time data, scalability
							</li>
							<li>
								<h5>Cloud</h5>
								AWS, GCP, Azure
							</li>
							<li>
								<h5>Web</h5>
								React, Redux, Angular, etc.
							</li>
							<li>
								<h5>iOS</h5>
								Swift, SwiftUI
							</li>
						</ul>
					</div>
				</AnimateInWhenVisible>

				<AnimateInWhenVisible delay={500}>
					<div className="item">
						<div className="header">
							<div className="icon">
								<img src={leaderIcon} alt="Leader" />
							</div>
							<div className="headline">
								<h4><TypewriterWhenVisible text="Roles" delay={750} /></h4>
							</div>
						</div>

						<h5>Engineer</h5>
						<p>
							First and foremost, I describe myself as an engineer. I break down large challenges into manageable pieces, finding a path forward while
							evaluating pros and cons of technologies and approaches. 
						</p>
						
						<h5>Architect</h5>
						<p>
							I design systems around business use cases, navigate through complexities, and research to help establish solid technical foundations.
						</p>
						
						<h5>Lead</h5>
						<p>
							I lead through agile processes, fostering an environment where engineers can take ownership and pride of features, while collaborating
							with business stakeholders to ensure proper alignment.
						</p>

						<h5>Coder</h5>
						<p>
							Coding is my passion; it's what I do professionally and in my free time. I like getting heads down into code.
						</p>
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
