import classNames from "classnames"
import { useEffect, useState } from "react"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { Typewriter } from "../typewriter/typewriter"
import "./portfolio.scss"

export default function PortfolioPage() {
	const isPageLoaded = useIsPageLoaded()
	const [typewriterText, setTypewriterText] = useState("")

	const portfolioClassName = classNames(
		"portfolio",
		{
			loaded: isPageLoaded,
		},
	)

	const lightbulbBackgroundClassName = classNames(
		"lightbulb-background",
	)

	useEffect(() => {
		if (isPageLoaded) {
			setTypewriterText("Mike Richards")
		}
	}, [isPageLoaded])

	function onHomeClick() {
		console.log("home")
	}

	return (
		<div className={portfolioClassName}>
			<img
				alt="Let there be light"
				className={lightbulbBackgroundClassName}
				src={lightbulbImage}
			/>

			<div className="mike-richards">
				<a onClick={() => onHomeClick()}>
					<Typewriter text={typewriterText} />
				</a>
			</div>

			<div className="content">
			</div>
		</div>
	)
}
