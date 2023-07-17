import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import avatarImage from "../../assets/images/mike-richards-avatar.png"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { useIsVisible } from "../../hooks/useIsVisible"
import { useScrollVar } from "../../hooks/useScrollVar"
import { useTimedFlag } from "../../hooks/useTimedFlag"
import { DownArrow } from "../downarrow/downarrow"
import { HamburgerIcon } from "../hamburgerIcon/hamburgerIcon"
import { Typewriter } from "../typewriter/typewriter"
import "./portfolio.scss"

export default function PortfolioPage() {
	useScrollVar()
	
	const isPageLoaded = useIsPageLoaded()
	const introDone = useTimedFlag(2000)
	const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)
	const mainSection = useRef<HTMLDivElement>(null)
	const aboutSection = useRef<HTMLDivElement>(null)
	const aboutSectionHeader = useRef(null)
	const aboutSectionHeaderVisible = useIsVisible(aboutSectionHeader)
	const expertiseSection = useRef<HTMLDivElement>(null)
	const expertiseSectionHeader = useRef(null)
	const expertiseSectionHeaderVisible = useIsVisible(expertiseSectionHeader)
	const workSection = useRef<HTMLDivElement>(null)
	const experienceSection = useRef<HTMLDivElement>(null)
	const contactSection = useRef<HTMLDivElement>(null)

	function goToMain() {
		setHamburgerMenuOpen(false)
		mainSection.current?.scrollIntoView({
			behavior: "smooth",
		})
	}

	function goToAboutSection() {
		setHamburgerMenuOpen(false)
		aboutSection.current?.scrollIntoView({
			behavior: "smooth",
		})
	}

	function goToExpertiseSection() {
		setHamburgerMenuOpen(false)
		expertiseSection.current?.scrollIntoView({
			behavior: "smooth",
		})
	}

	function goToWorkSection() {
		setHamburgerMenuOpen(false)
		workSection.current?.scrollIntoView({
			behavior: "smooth",
		})
	}

	function goToExperienceSection() {
		setHamburgerMenuOpen(false)
		experienceSection.current?.scrollIntoView({
			behavior: "smooth",
		})
	}

	function goToContactSection() {
		setHamburgerMenuOpen(false)
		contactSection.current?.scrollIntoView({
			behavior: "smooth",
		})
	}

	useEffect(() => {
		if (!isPageLoaded) { return }

		switch (window.location.hash) {
			case "#about":
				goToAboutSection()
				break

			case "#expertise":
				goToExpertiseSection()
				break

			case "#work":
				goToWorkSection()
				break

			case "#experience":
				goToExperienceSection()
				break

			case "contact":
				goToContactSection()
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

			<a className="home" onClick={() => goToMain()}>
				<Typewriter text="Mike Richards" />
			</a>

			<ul>
				<li><a onClick={() => goToAboutSection()}><Typewriter text="# About" delay={200} speed={20} /></a></li>
				<li><a onClick={() => goToExpertiseSection()}><Typewriter text="# Expertise" delay={340} speed={20} /></a></li>
				<li><a onClick={() => goToWorkSection()}><Typewriter text="# Work" delay={560} speed={20} /></a></li>
				<li><a onClick={() => goToExperienceSection()}><Typewriter text="# Experience" delay={680} speed={20} /></a></li>
				<li><a onClick={() => goToContactSection()}><Typewriter text="# Contact" delay={920} speed={20} /></a></li>
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
					<h3 ref={aboutSectionHeader}><Typewriter text={aboutSectionHeaderVisible ? "About Me" : ""} /></h3>

					<div className="about-table">
						<div className="image">
							<img src={avatarImage} />
						</div>
						<div className="about-content">
							<p>
								With 15+ years of industry experience, I've architected, lead and developed many projects across the technology spectrum. I have
								lead development efforts on large-scale consumer-focused websites for Fortune 500 companies and I've established tech startups
								delivering apps that have highly dynamic UIs and extreme scalability.
							</p>
							<p>
								I'm passionate about tech and fueled by innovative ideas. I am driven to bring concepts into reality. I love getting into the
								weeds with ideas, solving problems by finding solutions balanced with business needs, and building something that people love.
							</p>
							<p>
								I am always open to hearing ideas and finding how I can help. Please <a onClick={() => goToContactSection()}>contact me</a> to
								see how I can help!
							</p>
						</div>
					</div>
				</div>
				
				<div className="section expertise" ref={expertiseSection}>
					<h3 ref={expertiseSectionHeader}><Typewriter text={expertiseSectionHeaderVisible ? "My Expertise" : ""} /></h3>
				</div>
				
				<div className="section work" ref={workSection}>Work</div>
				
				<div className="section experience" ref={experienceSection}>Experience</div>
				
				<div className="section contact" ref={contactSection}>Contact</div>
			</div>
		</div>

		<div className={classNames("hamburger-menu-background", { "is-open": hamburgerMenuOpen })} onClick={() => setHamburgerMenuOpen(false)}></div>
		
		<div className={classNames("hamburger-menu", { "is-open": hamburgerMenuOpen })}>
			<ul>
				<li><a onClick={() => goToAboutSection()}><Typewriter text="# About" delay={200} speed={20} /></a></li>
				<li><a onClick={() => goToExpertiseSection()}><Typewriter text="# Expertise" delay={340} speed={20} /></a></li>
				<li><a onClick={() => goToWorkSection()}><Typewriter text="# Work" delay={560} speed={20} /></a></li>
				<li><a onClick={() => goToExperienceSection()}><Typewriter text="# Experience" delay={680} speed={20} /></a></li>
				<li><a onClick={() => goToContactSection()}><Typewriter text="# Contact" delay={920} speed={20} /></a></li>
			</ul>
		</div>
	</>
}
