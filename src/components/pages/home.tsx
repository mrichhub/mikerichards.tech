import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { localData } from "../../data/localData"

export default function MainPage() {
	const navigate = useNavigate()

	useEffect(() => {
		if (localData.didViewIntro) {
			navigate("/portfolio")
		}
		else {
			navigate("/intro")
		}
	}, [])

	return <></>
}
