import { useEffect } from "react"
import { usePageScroll } from "./usePageScroll"

export function useScrollVar(): number {
	const scroll = usePageScroll()

	function setScrollProperty(scroll: number) {
		document.documentElement.style.setProperty("--scroll", `${scroll * 100}`)
	}

	useEffect(() => {
		setScrollProperty(scroll)
	}, [scroll])

	useEffect(() => {
		setScrollProperty(scroll)
	}, [])

	return scroll
}
