import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./main.scss"

const root = ReactDOM.createRoot(document.getElementById("root")!)

const useStrict = true

if (useStrict) {
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	)
}
else {
	root.render(
		<App />
	)
}
