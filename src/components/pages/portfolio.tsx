import classNames from "classnames"
import { useEffect, useRef, useState } from "react"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
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
	const expertiseSection = useRef<HTMLDivElement>(null)
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
	}, [])

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
						<h3 className={classNames({ show: isPageLoaded, "intro-done": introDone })}>Startup Founder, Full-Stack Engineer, Systems Architect &amp; more...</h3>
					</div>

					<div className="scroll-for-more">
						<DownArrow />
					</div>
				</div>

				<div className="section about" ref={aboutSection}>About</div>
				<div className="section expertise" ref={expertiseSection}>Expertise</div>
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
