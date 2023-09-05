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

					<h4>FanBeat Live-Action</h4>
					
					<div className="description">
						This is FanBeat's core product, providing a real-time game that runs alongside
						sporting events, producing prediction-the-action and trivia questions to enhance the experience.
						
						<ul>
							<li>Architected and developed backend infrastructure on AWS. Designed and load tested to handle millions of simultaneous requests across the US.</li>
							<li>Implemented a socket service to synchronize data on devices with low latency even over the same heavy volume.</li>
							<li>Built iOS app using Swift. Heavy use of UIKit, async/await, and network communication.</li>
							<li>Led development of web app, held stand-ups and organized sprint demos.</li>
						</ul>
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
						FanBeat Daily is a DFS (Daily Fantasy Sports) app where users can predict over/under for sports players for a chance to win money.

						<ul>
							<li>Led and organized product design. I strategized with business, searched for contract designers and html developers, and organized sprints for development.</li>
							<li>Developed scalable API using Node.js and TypeScript on AWS infrastructure.</li>
							<li>Implemented web app using React and TypeScript.</li>
							<li>Integrated PayPal for deposits and withdrawals.</li>
						</ul>
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
						<ul>
							<li>Worked on agile team of 2-3 iOS developers to create a MVP of the iOS app based on designs from the founder.</li>
							<li>I owned the data handling; implementing structure and calls to the API and saving data to Core Data.</li>
							<li>Implemented SnapChat's OAuth login.</li>
							<li>Worked on a number of visual elements that were heavy on animation using UIKit.</li>
						</ul>
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
						Worked in teams to create v2 of their Digital Life product, AT&T's version of IoT where users can control lights, monitor cameras and setup smart actions.

						<ul>
							<li>Worked on team in agile environment with sprint planning, sprint demos and standups.</li>
							<li>Implemented cameras feature, allowing user to view snapshots, play recordings and stream live video from their cameras.</li>
							<li>On Windows Phone, I implemented a Tiles UI that mimicked the Windows Phone Home UI, allowing users to quickly see their devices, turn on/off lights, or go deeper into their devices.</li>
						</ul>
					</div>
				</div>
			</AnimateInWhenVisible>

			<AnimateInWhenVisible>
				<div className="item">
					<img src={homeDepot1} alt="Home Depot - Countertop Estimator" />

					<h4>Home Depot - Countertop Estimator</h4>
					
					<div className="description">
						The Countertop Estimator was a tool for customers to create estimates at home for
						the purchase and installation of countertops offered by Home Depot.

						<ul>
							<li>Architected, built and led development.</li>
							<li>Worked with UX, design and business teams from concept through production.</li>
							<li>Worked closely with Home Depot's team to define a database structure and data transfer that would ensure pricing data reliability.</li>
							<li>Maintained and added features and products.</li>
						</ul>
					</div>
				</div>
			</AnimateInWhenVisible>
		</div>
	)
}
