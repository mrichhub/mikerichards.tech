import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { localData } from "../../data/localData"

export default function MainPage() {
	const navigate = useNavigate()

	useEffect(() => {
		navigate(localData.didViewIntro ? "/portfolio" : "/intro")
	}, [])

	return <></>
}
