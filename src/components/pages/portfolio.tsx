import classNames from "classnames"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { useScrollVar } from "../../hooks/useScrollVar"
import { useTimedFlag } from "../../hooks/useTimedFlag"
import { Typewriter } from "../typewriter/typewriter"
import "./portfolio.scss"

export default function PortfolioPage() {
	const isPageLoaded = useIsPageLoaded()
	const introDone = useTimedFlag(2000)
	useScrollVar()

	function goToHome() {
		console.log("goto home")
	}

	function goToAboutSection() {
		console.log("goto about section")
	}

	function goToExpertiseSection() {
		console.log("goto expertise section")
	}

	function goToWorkSection() {
		console.log("goto work section")
	}

	function goToExperienceSection() {
		console.log("goto experience section")
	}

	function goToContactSection() {
		console.log("goto contact section")
	}

	return <>
		<img
			alt="Let there be light"
			className="lightbulb-background"
			src={lightbulbImage}
		/>

		<nav className="nav">
			<a className="home" onClick={() => goToHome()}>
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
				<div className="section">
					<div className="headline">
						<h1 className={classNames({ show: isPageLoaded, "intro-done": introDone })}>MIKE RICHARDS</h1>
						<h3 className={classNames({ show: isPageLoaded, "intro-done": introDone })}>Startup Founder, Full-Stack Engineer, Systems Architect &amp; more...</h3>
					</div>
				</div>

				<div className="section">About</div>
				<div className="section">Expertise</div>
				<div className="section">Work</div>
				<div className="section">Experience</div>
				<div className="section">Contact</div>
			</div>
		</div>
	</>
}
