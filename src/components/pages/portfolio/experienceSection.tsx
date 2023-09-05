import classNames from "classnames"
import { useState } from "react"
import attLogo from "../../../assets/images/att-digital-life-logo.png"
import blockvLogo from "../../../assets/images/blockv-logo.png"
import engaugeLogo from "../../../assets/images/engauge-logo.png"
import fanbeatLogo from "../../../assets/images/fanbeat-logo.png"
import senditLogo from "../../../assets/images/sendit-logo.png"
import { AnimateInWhenVisible } from "../../animateInWhenVisible/animateInWhenVisible"
import "./experienceSection.scss"

enum Experience {
	fanbeat,
	sendit,
	blockv,
	att,
	engauge,
}

export function ExperienceSection() {
	const [experienceSelected, setExperienceSelected] = useState(Experience.fanbeat)

	function selectExperience(experience: Experience) {
		setExperienceSelected(experience)
	}

	return (
		<div className="experience-section">
			<AnimateInWhenVisible delay={250}>
				<div className={classNames("item", { selected: experienceSelected === Experience.fanbeat })} onClick={() => selectExperience(Experience.fanbeat)}>
					<div className="header">
						<div className="title"><h4>Tech Co-Founder</h4></div>
						<div className="logo"><img src={fanbeatLogo} alt="FanBeat" /></div>
					</div>

					<div className="description">
						<p>
							Co-Found FanBeat and built tech from the ground up. Created a portfolio of games
							that ranged from a live-action game capable of handling millions of simultaneous
							requests, to a daily fantasy game where users could make sports picks for a
							chance to win money.
						</p>

						<p>
							Led the tech through partnerships with sports teams, media companies and brands.
						</p>

						<div className="skills">
							<ul className="skills">
								<li>Node.js</li>
								<li>AWS</li>
								<li>Redis</li>
								<li>TypeScript</li>
								<li>Angular</li>
								<li>Redux</li>
								<li>iOS</li>
								<li>Swift</li>
								<li>Obj-C</li>
								<li>Android</li>
								<li>Java</li>
							</ul>
						</div>
					</div>
				</div>
			</AnimateInWhenVisible>

			<AnimateInWhenVisible delay={250}>
				<div className={classNames("item", { selected: experienceSelected === Experience.engauge })} onClick={() => selectExperience(Experience.engauge)}>
					<div className="header">
						<div className="title"><h4>Innovation Architect</h4></div>
						<div className="logo"><img src={engaugeLogo} alt="Engauge" /></div>
					</div>

					<div className="description">
						<p>
							Engauge (now Moxie) was an integrated marketing and advertising agency. I worked in its digital arm responsible for
							digital products that ranged from innovative tech to apps and websites.
						</p>

						<p>
							As part of Engauge, I architected tech solutions for many client projects. I worked on large-scale company websites
							for clients such as Home Depot, Food Lion and Outback, and also researched and experimented with new tech to
							showcase internally and to clients to keep the organization at the forefront of the industry.
						</p>

						<div className="skills">
							<ul className="skills">
								<li>iOS</li>
								<li>Swift</li>
								<li>Obj-C</li>
								<li>C#</li>
								<li>Kinect</li>
								<li>ASP.NET</li>
								<li>Android</li>
								<li>Java</li>
							</ul>
						</div>
					</div>
				</div>
			</AnimateInWhenVisible>

			<AnimateInWhenVisible delay={250}>
				<div className={classNames("item", { selected: experienceSelected === Experience.att })} onClick={() => selectExperience(Experience.att)}>
					<div className="header">
						<div className="title"><h4>Senior Developer</h4></div>
						<div className="logo"><img src={attLogo} alt="AT&T Digital Life" /></div>
					</div>

					<div className="description">
						<p>
							Worked in teams to create v2 of their Digital Life product, AT&T's version of IoT where users can control lights,
							monitor cameras and setup smart actions.
						</p>

						<div className="skills">
							<ul className="skills">
								<li>iOS</li>
								<li>Swift</li>
								<li>Windows Phone</li>
								<li>C#</li>
							</ul>
						</div>
					</div>
				</div>
			</AnimateInWhenVisible>	
				
			<AnimateInWhenVisible delay={250}>
				<div className={classNames("item", { selected: experienceSelected === Experience.sendit })} onClick={() => selectExperience(Experience.sendit)}>
					<div className="header">
						<div className="title"><h4>iOS Developer @ sendit</h4></div>
						<div className="logo"><img src={senditLogo} alt="sendit" /></div>
					</div>

					<div className="description">
						<p>
							Developed the MVP of the iOS app with focus on an immersive UI design that is heavy on animation to engage the user.
						</p>

						<div className="skills">
							<ul className="skills">
								<li>iOS</li>
								<li>Swift</li>
								<li>API</li>
								<li>SnapChat Auth</li>
							</ul>
						</div>
					</div>
				</div>
			</AnimateInWhenVisible>			
			
			<AnimateInWhenVisible delay={250}>
				<div className={classNames("item", { selected: experienceSelected === Experience.blockv })} onClick={() => selectExperience(Experience.blockv)}>
					<div className="header">
						<div className="title"><h4>iOS Developer</h4></div>
						<div className="logo"><img src={blockvLogo} alt="BLOCKv" /></div>
					</div>

					<div className="description">
						<p>
							Built iOS app for their platform called "RoundUp", where students on campuses could receive points for attending
							events. Integrated with their NFT token services.
						</p>

						<div className="skills">
							<ul className="skills">
								<li>iOS</li>
								<li>Swift</li>
							</ul>
						</div>
					</div>
				</div>
			</AnimateInWhenVisible>

			<AnimateInWhenVisible>
				<div className="item">
					<div className="header">
						<div className="title"><h4>And more...</h4></div>
					</div>
				</div>
			</AnimateInWhenVisible>
		</div>
	)
}
