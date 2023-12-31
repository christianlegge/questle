import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GuessCell from "./components/GuessCell";
import QuestInput from "./components/QuestInput";
import questsJson from "./quests.json";
import QuestInfo from "./components/QuestInfo";

const allQuests = questsJson;

function App() {
	const [count, setCount] = useState(0);

	const quests = ["Demon Slayer", "Fight Arena", "Throne of Miscellania"];

	return (
		<div>
			<QuestInput quests={Object.keys(allQuests)} guess={() => {}} />
			{quests.map((quest) => (
				<QuestInfo quest={quest} key={quest} guessed={false} />
			))}
		</div>
	);

	return (
		<>
			<QuestInput
				quests={allQuests.map((x) => x.name)}
				guess={() => console.log("guessed")}
			/>
		</>
	);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

export default App;
