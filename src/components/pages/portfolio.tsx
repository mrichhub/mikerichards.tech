import { useEffect, useState } from "react"
import avatarImage from "../../assets/images/mike-richards-avatar.png"
import fanbeatImage from "../../assets/images/work/fanbeat-1.png"
import fanbeatDailyImage from "../../assets/images/work/fanbeat-daily1.png"
import homeDepotImage from "../../assets/images/work/home-depot-1.png"
import "./portfolio.scss"

const capabilities = [
	{
		number: "01",
		title: "AI & agent systems",
		description: "Turn capable models into dependable products: agents, tool use, retrieval, evaluation, orchestration, and the software around them.",
	},
	{
		number: "02",
		title: "Complex product engineering",
		description: "Take an ambitious, ambiguous idea from whiteboard to production—with the architecture, interfaces, and judgment to make it real.",
	},
	{
		number: "03",
		title: "Scale & systems design",
		description: "Design for real-world load, failure, security, and change. I’m comfortable where APIs, data, infrastructure, and users collide.",
	},
	{
		number: "04",
		title: "Technical leadership",
		description: "Create clarity across product, engineering, and business. I can lead the room, shape the plan, and still get deep into the code.",
	},
]

const work = [
	{
		kicker: "Real-time systems · Startup",
		title: "A live sports platform built for stadium-scale moments.",
		description: "As technical co-founder of FanBeat, I designed and built a real-time game platform that ran alongside live sporting events. The system was load-tested for millions of simultaneous requests and kept devices synchronized under intense, bursty traffic.",
		outcomes: ["Zero-to-one product and architecture", "Low-latency, synchronized gameplay", "Led product and engineering delivery"],
		image: fanbeatImage,
		imageAlt: "FanBeat live-action sports game on a mobile phone",
	},
	{
		kicker: "Product engineering · Regulated workflows",
		title: "From product concept to a working daily fantasy business.",
		description: "I led the product design and engineering of FanBeat Daily, including a scalable API, responsive web application, and money movement integrations. The work crossed product strategy, UX, infrastructure, and hands-on implementation.",
		outcomes: ["Full-stack product delivery", "Payments and withdrawal workflows", "Cross-functional technical leadership"],
		image: fanbeatDailyImage,
		imageAlt: "FanBeat Daily fantasy sports application",
	},
	{
		kicker: "Enterprise · Data architecture",
		title: "Making a complicated purchase feel understandable.",
		description: "For The Home Depot, I architected and led engineering of a countertop estimator that translated complex product, pricing, and installation data into a useful customer experience—working from early concept through production.",
		outcomes: ["Architecture and hands-on build", "Complex pricing data made usable", "Agency, client, UX, and business alignment"],
		image: homeDepotImage,
		imageAlt: "The Home Depot countertop estimator interface",
	},
]

const experience = [
	["Warner Bros. Discovery", "Agentic AI Engineering · Current"],
	["FanBeat", "Technical Co-Founder"],
	["sendit", "Product Engineer"],
	["BLOCKv", "iOS Engineer"],
	["AT&T Digital Life", "Senior Engineer"],
	["Engauge / Moxie", "Innovation Architect"],
]

function ArrowIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24">
			<path d="M5 12h14M13 6l6 6-6 6" />
		</svg>
	)
}

export default function PortfolioPage() {
	const [menuOpen, setMenuOpen] = useState(false)
	const [portraitInColor, setPortraitInColor] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 24)
		onScroll()
		window.addEventListener("scroll", onScroll, { passive: true })
		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	function closeMenu() {
		setMenuOpen(false)
	}

	return (
		<>
			<a className="skip-link" href="#main">Skip to content</a>

			<header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
				<a className="wordmark" href="#top" onClick={closeMenu} aria-label="Mike Richards, home">
					<span>MR</span>
					<span className="wordmark__name accent-rollover">Mike Richards</span>
				</a>

				<button
					className="menu-button"
					type="button"
					aria-expanded={menuOpen}
					aria-controls="site-navigation"
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<span>{menuOpen ? "Close" : "Menu"}</span>
				</button>

				<nav id="site-navigation" className={menuOpen ? "nav-open" : ""} aria-label="Primary navigation">
					<a className="accent-rollover" href="#capabilities" onClick={closeMenu}>Capabilities</a>
					<a className="accent-rollover" href="#work" onClick={closeMenu}>Selected work</a>
					<a className="accent-rollover" href="#about" onClick={closeMenu}>About</a>
					<a className="nav-cta" href="mailto:hi@mikerichards.tech" onClick={closeMenu}>Start a conversation</a>
				</nav>
			</header>

			<main id="main">
				<section className="hero" id="top">
					<div className="hero__eyebrow">
						<span className="status-dot" aria-hidden="true"></span>
						Available for select projects and roles
					</div>

					<h1>I build what’s next—<em className="accent-rollover">and make it work.</em></h1>

					<div className="hero__lower">
						<p className="hero__intro">
							I’m <strong className="accent-rollover hero__name">Mike Richards</strong>, a technical founder and engineer who turns hard, fuzzy problems into useful products and resilient systems—especially with AI, agents, and emerging technology.
						</p>

						<a className="text-link" href="#work">
							See how I work <ArrowIcon />
						</a>
					</div>

					<div className="hero__signal" aria-hidden="true">
						<span>Think</span><i></i><span>Shape</span><i></i><span>Ship</span><i></i><span>Scale</span>
					</div>
				</section>

				<section className="manifesto" aria-label="Approach">
					<p>
						The tools change. The job doesn’t: understand the problem, find the leverage, and build the right thing.
					</p>
				</section>

				<section className="section capabilities" id="capabilities">
					<div className="section-heading">
						<p className="section-label">What I help with</p>
						<h2 className="accent-rollover">Bring me the complicated part.</h2>
						<p>I work across the whole system—from the idea and business model to the models, data, code, and infrastructure that make it possible.</p>
					</div>

					<div className="capability-grid">
						{capabilities.map((capability) => (
							<article className="capability-card" key={capability.number}>
								<span className="capability-card__number">{capability.number}</span>
								<h3 className="accent-rollover">{capability.title}</h3>
								<p>{capability.description}</p>
							</article>
						))}
					</div>
				</section>

				<section className="section work" id="work">
					<div className="section-heading section-heading--work">
						<p className="section-label">Selected work</p>
						<h2 className="accent-rollover">Evidence, not a tool list.</h2>
						<p>A few examples of products where the hard part wasn’t one language or framework. It was seeing the whole problem and carrying it through.</p>
					</div>

					<div className="work-list">
						{work.map((project, index) => (
							<article className="case-study" key={project.title}>
								<div className="case-study__index">0{index + 1}</div>
								<div className="case-study__content">
									<p className="case-study__kicker">{project.kicker}</p>
									<h3>{project.title}</h3>
									<p className="case-study__description">{project.description}</p>
									<ul>
										{project.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
									</ul>
								</div>
								<div className={`case-study__visual case-study__visual--${index + 1}`}>
									<img src={project.image} alt={project.imageAlt} loading="lazy" />
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="section about" id="about">
					<div className="about__portrait">
						<button
							className={`portrait-frame${portraitInColor ? " portrait-frame--color" : ""}`}
							type="button"
							aria-label="Toggle Mike Richards portrait color"
							aria-pressed={portraitInColor}
							onClick={() => setPortraitInColor(!portraitInColor)}
						>
							<img src={avatarImage} alt="Mike Richards" loading="lazy" />
						</button>
						<p>Atlanta, Georgia · Working everywhere</p>
					</div>

					<div className="about__content">
						<p className="section-label">A little context</p>
						<h2 className="accent-rollover">Builder first. Titles second.</h2>
						<p className="about__lead">
							For 15+ years, I’ve moved between founder, architect, lead, and hands-on engineer—often in the same week.
						</p>
						<p>
							I’ve built consumer products for startups and Fortune 500 companies, designed systems for extreme traffic, led teams through ambiguity, and learned new domains whenever the problem demanded it. Today, I’m especially interested in the new class of software made possible by language models, neural networks, and autonomous agents.
						</p>
						<p>
							My useful edge is range: I can reason about the business, sweat the user experience, design the architecture, and open the editor to make the thing work.
						</p>
					</div>
				</section>

				<section className="experience" aria-labelledby="experience-title">
					<div className="experience__heading">
						<p className="section-label">Along the way</p>
						<h2 className="accent-rollover" id="experience-title">A career spent making ambitious things less hypothetical.</h2>
					</div>
					<div className="experience__list">
						<p className="experience__current">
							Currently helping Warner Bros. Discovery build agentic systems—designing iterative model-and-tool loops that can reason through complex work and produce dependable outcomes.
						</p>
						{experience.map(([company, role]) => (
							<div className="experience__item" key={company}>
								<strong>{company}</strong>
								<span>{role}</span>
							</div>
						))}
					</div>
				</section>

				<section className="contact" id="contact">
					<p className="section-label">Have a hard problem?</p>
					<h2 className="accent-rollover">Let’s make it<br /><em>less hypothetical.</em></h2>
					<p>Startup idea, AI initiative, complex system, technical leadership, or something that doesn’t fit neatly in a box—I’m happy to hear about it.</p>
					<a className="contact-button accent-rollover" href="mailto:hi@mikerichards.tech">
						<span>hi@mikerichards.tech</span>
						<ArrowIcon />
					</a>
				</section>
			</main>

			<footer>
				<p>© {new Date().getFullYear()} Mike Richards</p>
				<p>Designed and built from scratch. Still the best way to know a system.</p>
				<a href="#top">Back to top ↑</a>
			</footer>
		</>
	)
}
