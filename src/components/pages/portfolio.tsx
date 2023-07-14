import classNames from "classnames"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import "./portfolio.scss"

export default function PortfolioPage() {
	const isPageLoaded = useIsPageLoaded()

	const portfolioClassName = classNames(
		"portfolio",
		{
			loaded: isPageLoaded,
		},
	)

	const lightbulbBackgroundClassName = classNames(
		"lightbulb-background",
	)

	return (
		<div className={portfolioClassName}>
			<img
				alt="Let there be light"
				className={lightbulbBackgroundClassName}
				src={lightbulbImage}
			/>

			<div className="content">
			</div>
		</div>
	)
}
