import { useEffect, useState } from "react"

export function usePageScroll(): number {
	const [pageScrollPct, setPageScrollPct] = useState(0)

	useEffect(() => {
		function loadScroll() {
			const htmlElement = document.documentElement
			const totalHeightValue = getComputedStyle(htmlElement).height
			const totalHeight = parseInt(totalHeightValue.substring(0, totalHeightValue.length - 2))
			const percentOfScreenHeightScrolled = htmlElement.scrollTop / (totalHeight - window.innerHeight)

			setPageScrollPct(Math.max(Math.min(percentOfScreenHeightScrolled, 1.0), 0.0))
		}

		window.addEventListener("scroll", loadScroll)
		window.addEventListener("resize", loadScroll)

		loadScroll()

		return () => {
			window.removeEventListener("scroll", loadScroll)
			window.removeEventListener("resize", loadScroll)
		}
	}, [])

	return pageScrollPct
}
