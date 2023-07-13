import { useEffect } from "react"

export function usePageLoad(onPageLoad: () => unknown): void {
	useEffect(() => {
		if (document.readyState === "complete") {
			onPageLoad()
		}
		else {
			window.addEventListener("load", onPageLoad, false)

			return () => window.removeEventListener("load", onPageLoad)
		}
	})
}
