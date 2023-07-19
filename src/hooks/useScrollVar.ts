import { useEffect } from "react"
import { usePageScroll } from "./usePageScroll"

export function useScrollVar(): number {
	const scroll = usePageScroll()

	useEffect(() => {
		document.documentElement.style.setProperty("--scroll", `${scroll * 100}`)
	}, [scroll])

	return scroll
}
