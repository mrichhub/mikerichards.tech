import classNames from "classnames"
import lightbulbImage from "../../assets/images/lightbulb2.jpg"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import "./portfolio.main.scss"

export function PortfolioMainPage() {
	const isPageLoaded = useIsPageLoaded()

	const portfolioClassName = classNames(
		"portfolio",
		{
			loaded: isPageLoaded,
		},
	)

	const lightbulbBackgroundClassName = classNames(
		"lightbulb-background",
		{
			show: isPageLoaded, 
		},
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
