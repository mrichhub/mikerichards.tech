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
						<h2 className={classNames({ show: isPageLoaded, "intro-done": introDone })}>Startup Founder, Full-Stack Engineer, Systems Architect &amp; more...</h2>
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
									With 15+ years of industry experience, I've architected, lead and developed many projects across the technology spectrum. I have
									lead development efforts on large-scale consumer-focused websites for Fortune 500 companies and I've established tech startups
									delivering apps that have highly dynamic UIs and extreme scalability.
								</p>
							</AnimateInWhenVisible>
		
							<AnimateInWhenVisible delay={250}>
								<p>
									I'm passionate about tech and fueled by innovative ideas. I am driven to bring concepts into reality. I love getting into the
									weeds with ideas, solving problems by finding solutions balanced with business needs, and building something that people love.
								</p>
							</AnimateInWhenVisible>
		
							<AnimateInWhenVisible delay={250}>
								<p>
									I am always open to hearing ideas and finding how I can help. Please <a onClick={() => goToSection(contactSection)}>contact me</a> to
									see how I can help!
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
										<h4><TypewriterWhenVisible text="Tech Leader" delay={500} /></h4>
									</div>
								</div>
								<p>
									Experienced with leading technology development in growth stage companies.
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
									These are just some of the skills I'm proficient at as of late. I'm open to all technologies and constantly learning.
								</em>
								<ul>
									<li>
										<h5>React</h5>
										<em>(This site developed in React)</em>
										<a href="https://github.com/mrichhub/mikerichards.tech">See code on GitHub</a>
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

						<AnimateInWhenVisible delay={750}>
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
						</AnimateInWhenVisible>
					</div>
				</div>
			
				<div className="section work" ref={workSection}>
					<h3><TypewriterWhenVisible text="Some of My Work" /></h3>
				</div>
				
				<div className="section experience" ref={experienceSection}>
					<h3><TypewriterWhenVisible text="Professional Experience" /></h3>

					<ExperienceSection />
				</div>
				
				<div className="section contact" ref={contactSection}>
					<h3><TypewriterWhenVisible text="Contact Me" /></h3>
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
