import { usePageScroll } from "./usePageScroll"

export function useScrollVar(): number {
	const scroll = usePageScroll()

	document.documentElement.style.setProperty("--scroll", `${scroll * 100}`)

	return scroll
}
