import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import leaderIcon from "../../assets/images/leader-icon.png"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import avatarImage from "../../assets/images/mike-richards-avatar.png"
import skillsIcon from "../../assets/images/skills-icon.png"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { useScrollVar } from "../../hooks/useScrollVar"
import { useTimedFlag } from "../../hooks/useTimedFlag"
import { AnimateInWhenVisible } from "../animateInWhenVisible/animateInWhenVisible"
import { DownArrow } from "../downarrow/downarrow"
import { HamburgerIcon } from "../hamburgerIcon/hamburgerIcon"
import { Typewriter } from "../typewriter/typewriter"
import { TypewriterWhenVisible } from "../typewriter/typewriterWhenVisible"
import "./portfolio.scss"
import { ExperienceSection } from "./portfolio/experienceSection"
import { WorkSection } from "./portfolio/workSection"

export default function PortfolioPage() {
	useScrollVar()
	
	const { sectionId } = useParams()
	const isPageLoaded = useIsPageLoaded()
	const introDone = useTimedFlag(2000)
	const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
	const mainSection = useRef<HTMLDivElement>(null)
	const aboutSection = useRef<HTMLDivElement>(null)
	const expertiseSection = useRef<HTMLDivElement>(null)
	const workSection = useRef<HTMLDivElement>(null)
	const experienceSection = useRef<HTMLDivElement>(null)
	const contactSection = useRef<HTMLDivElement>(null)

	function goToSection(section: React.RefObject<HTMLElement>) {
		setHamburgerMenuOpen(false)
		section.current?.scrollIntoView({
			behavior: "smooth",
		})
	}

	useEffect(() => {
		if (!isPageLoaded) { return }

		switch (window.location.hash?.substring(1) || sectionId) {
			case "about":
				goToSection(aboutSection)
				break

			case "expertise":
				goToSection(expertiseSection)
				break

			case "work":
				goToSection(workSection)
				break

			case "experience":
				goToSection(experienceSection)
				break

			case "contact":
				goToSection(contactSection)
				break
		}
	}, [isPageLoaded])

	return <>
		<img
			alt="Let there be light"
			className="lightbulb-background"
			src={lightbulbImage}
		/>

		<nav className="nav">
			<HamburgerIcon isOpen={[ hamburgerMenuOpen, setHamburgerMenuOpen ]} />

			<a className="home" onClick={() => goToSection(mainSection)}>
				<Typewriter text="Mike Richards" />
			</a>

			<ul>
				<li><a onClick={() => goToSection(aboutSection)}><Typewriter text="# About" delay={200} speed={20} /></a></li>
				<li><a onClick={() => goToSection(expertiseSection)}><Typewriter text="# Expertise" delay={340} speed={20} /></a></li>
				<li><a onClick={() => goToSection(workSection)}><Typewriter text="# Work" delay={560} speed={20} /></a></li>
				<li><a onClick={() => goToSection(experienceSection)}><Typewriter text="# Experience" delay={680} speed={20} /></a></li>
				<li><a onClick={() => goToSection(contactSection)}><Typewriter text="# Contact" delay={920} speed={20} /></a></li>
			</ul>
		</nav>

		<div className="portfolio">
			<div className="content">
				<div className="section main" ref={mainSection}>
					<div className="headline">
						<h1 className={classNames({ show: isPageLoaded, "intro-done": introDone })}>MIKE RICHARDS</h1>
						<h2 className={classNames({ show: isPageLoaded, "intro-done": introDone })}>Full-Stack Engineer, Systems Architect, Startup Founder, Tech Enthusiast &amp; more...</h2>
					</div>

					<div className="scroll-for-more">
						<DownArrow />
					</div>
				</div>

				<div className="section about" ref={aboutSection}>
					<h3><TypewriterWhenVisible text="About Me" /></h3>

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
				
				<div className="section expertise" ref={expertiseSection}>
					<h3><TypewriterWhenVisible text="My Expertise" /></h3>

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
			
				<div className="section work" ref={workSection}>
					<h3><TypewriterWhenVisible text="Work Samples" /></h3>

					<WorkSection />
				</div>
				
				<div className="section experience" ref={experienceSection}>
					<h3><TypewriterWhenVisible text="Professional Experience" /></h3>

					<ExperienceSection />
				</div>
				
				<div className="section contact" ref={contactSection}>
					<h3><TypewriterWhenVisible text="Contact" /></h3>

					<AnimateInWhenVisible>
						<div className="content">
							<h4>Available for select opportunities</h4>

							<p>
								Do you need some tech help? Send me an email to contact me!
							</p>

							<div>
								<a href="mailto: hi@mikerichards.tech">hi@mikerichards.tech</a>
							</div>
						</div>
					</AnimateInWhenVisible>
				</div>
			</div>
		</div>

		<div className={classNames("hamburger-menu-background", { "is-open": hamburgerMenuOpen })} onClick={() => setHamburgerMenuOpen(false)}></div>
		
		<div className={classNames("hamburger-menu", { "is-open": hamburgerMenuOpen })}>
			<ul>
				<li><a onClick={() => goToSection(aboutSection)}><Typewriter text="# About" delay={200} speed={20} /></a></li>
				<li><a onClick={() => goToSection(expertiseSection)}><Typewriter text="# Expertise" delay={340} speed={20} /></a></li>
				<li><a onClick={() => goToSection(workSection)}><Typewriter text="# Work" delay={560} speed={20} /></a></li>
				<li><a onClick={() => goToSection(experienceSection)}><Typewriter text="# Experience" delay={680} speed={20} /></a></li>
				<li><a onClick={() => goToSection(contactSection)}><Typewriter text="# Contact" delay={920} speed={20} /></a></li>
			</ul>
		</div>
	</>
}
