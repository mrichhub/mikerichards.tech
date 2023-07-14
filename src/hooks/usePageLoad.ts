import { useEffect } from "react"

export function usePageLoad(onPageLoad: () => unknown): void {
	useEffect(() => {
		if (document.readyState === "complete") {
			const timer = setTimeout(() => onPageLoad(), 5)
			
			return () => clearTimeout(timer)
		}

		window.addEventListener("load", onPageLoad, false)

		return () => window.removeEventListener("load", onPageLoad)
	}, [])
}
