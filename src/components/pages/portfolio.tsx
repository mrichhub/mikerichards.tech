import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { useScrollVar } from "../../hooks/useScrollVar"
import { useTimedFlag } from "../../hooks/useTimedFlag"
import { DownArrow } from "../downarrow/downarrow"
import { HamburgerIcon } from "../hamburgerIcon/hamburgerIcon"
import { Typewriter } from "../typewriter/typewriter"
import { TypewriterWhenVisible } from "../typewriter/typewriterWhenVisible"
import "./portfolio.scss"
import { AboutSection } from "./portfolio/aboutSection"
import { ContactSection } from "./portfolio/contactSection"
import { ExperienceSection } from "./portfolio/experienceSection"
import { SkillsSection } from "./portfolio/skillsSection"
import { WorkSection } from "./portfolio/workSection"

export default function PortfolioPage() {
	useScrollVar()
	
	const { sectionId } = useParams()
	const isPageLoaded = useIsPageLoaded()
	const introDone = useTimedFlag(2000)
	const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
	const mainSection = useRef<HTMLDivElement>(null)
	const aboutSection = useRef<HTMLDivElement>(null)
	const skillsSection = useRef<HTMLDivElement>(null)
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

			case "skills":
				goToSection(skillsSection)
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
				<li><a onClick={() => goToSection(skillsSection)}><Typewriter text="# Skills" delay={340} speed={20} /></a></li>
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
						<h2 className={classNames({ show: isPageLoaded, "intro-done": introDone })}>Full-Stack Engineer (iOS, Node, React, APIs, AWS, etc.) • Systems Architect • Startup Founder • Tech Enthusiast</h2>
					</div>

					<div className="scroll-for-more">
						<DownArrow />
					</div>
				</div>

				<div className="section about" ref={aboutSection}>
					<h3><TypewriterWhenVisible text="About Me" /></h3>

					<AboutSection />
				</div>
				
				<div className="section skills" ref={skillsSection}>
					<h3><TypewriterWhenVisible text="Skills" /></h3>

					<SkillsSection />
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

					<ContactSection />
				</div>
			</div>
		</div>

		<div className={classNames("hamburger-menu-background", { "is-open": hamburgerMenuOpen })} onClick={() => setHamburgerMenuOpen(false)}></div>
		
		<div className={classNames("hamburger-menu", { "is-open": hamburgerMenuOpen })}>
			<ul>
				<li><a onClick={() => goToSection(aboutSection)}><Typewriter text="# About" delay={200} speed={20} /></a></li>
				<li><a onClick={() => goToSection(skillsSection)}><Typewriter text="# Skills" delay={340} speed={20} /></a></li>
				<li><a onClick={() => goToSection(workSection)}><Typewriter text="# Work" delay={560} speed={20} /></a></li>
				<li><a onClick={() => goToSection(experienceSection)}><Typewriter text="# Experience" delay={680} speed={20} /></a></li>
				<li><a onClick={() => goToSection(contactSection)}><Typewriter text="# Contact" delay={920} speed={20} /></a></li>
			</ul>
		</div>
	</>
}
