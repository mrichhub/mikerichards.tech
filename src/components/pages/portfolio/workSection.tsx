import attScreenshot1 from "../../../assets/images/work/att-1.png"
import attScreenshot2 from "../../../assets/images/work/att-2.png"
import attScreenshot3 from "../../../assets/images/work/att-3.png"
import attScreenshot4 from "../../../assets/images/work/att-4.png"
import fanbeatScreenshot1 from "../../../assets/images/work/fanbeat-1.png"
import fanbeatScreenshot2 from "../../../assets/images/work/fanbeat-2.png"
import fanbeatScreenshot3 from "../../../assets/images/work/fanbeat-3.png"
import fanbeatDailyScreenshot1 from "../../../assets/images/work/fanbeat-daily1.png"
import fanbeatDailyScreenshot2 from "../../../assets/images/work/fanbeat-daily2.png"
import fanbeatDailyScreenshot3 from "../../../assets/images/work/fanbeat-daily3.png"
import homeDepot1 from "../../../assets/images/work/home-depot-1.png"
// import roundupScreenshot1 from "../../../assets/images/work/roundup-1.png"
// import roundupScreenshot2 from "../../../assets/images/work/roundup-2.png"
// import roundupScreenshot3 from "../../../assets/images/work/roundup-3.png"
// import roundupScreenshot4 from "../../../assets/images/work/roundup-4.png"
import senditScreenshot1 from "../../../assets/images/work/sendit-1.png"
import senditScreenshot2 from "../../../assets/images/work/sendit-2.png"
import senditScreenshot3 from "../../../assets/images/work/sendit-3.png"
import { AnimateInWhenVisible } from "../../animateInWhenVisible/animateInWhenVisible"
import "./workSection.scss"

export function WorkSection() {
	return (
		<div className="work-section">
			<AnimateInWhenVisible>
				<div className="item">
					<img src={fanbeatScreenshot1} alt="FanBeat" />
					<img src={fanbeatScreenshot2} alt="FanBeat" />
					<img src={fanbeatScreenshot3} alt="FanBeat" />

					<h4>FanBeat</h4>
					
					<div className="description">
						I co-founded the startup and architected the full-stack solution that allows
						hundreds of thousands of users to play simultaneously.
					</div>
				</div>
			</AnimateInWhenVisible>

			<AnimateInWhenVisible>
				<div className="item">
					<img src={fanbeatDailyScreenshot1} alt="FanBeat Daily" />
					<img src={fanbeatDailyScreenshot2} alt="FanBeat Daily" />
					<img src={fanbeatDailyScreenshot3} alt="FanBeat Daily" />

					<h4>FanBeat Daily</h4>
					
					<div className="description">
						Another game in the FanBeat portfolio, a DFS (Daily Fantasy Sports) game where
						users can choose over/unders for players for a chance to win money. I developed
						the API and React app.
					</div>
				</div>
			</AnimateInWhenVisible>

			<AnimateInWhenVisible>
				<div className="item">
					<img src={senditScreenshot1} alt="sendit" />
					<img src={senditScreenshot2} alt="sendit" />
					<img src={senditScreenshot3} alt="sendit" />

					<h4>sendit</h4>
					
					<div className="description">
						SendIt is a fun app for creating Snap stickers and posing questions on SnapChat
						withanonymous replies. I helped create the MVP of the iOS app, and worked on
						iterations of it as its user base rapidly grew.
					</div>
				</div>
			</AnimateInWhenVisible>
			
			{/* <AnimateInWhenVisible>
				<div className="item">
					<img src={roundupScreenshot1} alt="RoundUp" />
					<img src={roundupScreenshot2} alt="RoundUp" />
					<img src={roundupScreenshot3} alt="RoundUp" />
					<img src={roundupScreenshot4} alt="RoundUp" />

					<h4>RoundUp</h4>
					
					<div className="description">
						The RoundUp app (now defunct) made its way onto college campuses as a way to
						entice students to attend certain events by awarding points they could redeem.
						I helped create the MVP and create the iOS architecture.
					</div>
				</div>
			</AnimateInWhenVisible> */}

			<AnimateInWhenVisible>
				<div className="item">
					<img src={attScreenshot1} alt="AT&T Digital Life" />
					<img src={attScreenshot2} alt="AT&T Digital Life" />
					<img src={attScreenshot3} alt="AT&T Digital Life" />
					<img src={attScreenshot4} alt="AT&T Digital Life" />

					<h4>AT&amp;T Digital Life</h4>
					
					<div className="description">
						Digital Life is AT&T's IoT and home security solution. I worked with teams of
						developers to create a v2.0 of their service. I worked on UI and integration
						points with a variety of automated lights, door locks, keypads and video feeds.
					</div>
				</div>
			</AnimateInWhenVisible>

			<AnimateInWhenVisible>
				<div className="item">
					<img src={homeDepot1} alt="Home Depot - Countertop Estimator" />

					<h4>Home Depot - Countertop Estimator</h4>
					
					<div className="description">
						The Countertop Estimator is a tool for customers to create estimates at home for
						the purchase and installation of countertops offered by Home Depot. The estimator
						gives an array of options the user can sort through and choose, like surface type,
						surface color, edging, cutouts, sinks, etc. I lead and developed the app.
					</div>
				</div>
			</AnimateInWhenVisible>
		</div>
	)
}
