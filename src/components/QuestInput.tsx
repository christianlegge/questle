import React, { useState } from "react";

const QuestInput = ({
	quests,
	guess,
}: {
	quests: string[];
	guess: (quest: string) => void;
}) => {
	const [quest, setQuest] = useState("");

	const filteredQuests = quests.filter(
		(x) =>
			x.toLowerCase().startsWith(quest.toLowerCase()) ||
			(x.startsWith("The ") &&
				x.slice(4).toLowerCase().startsWith(quest.toLowerCase()))
	);

	return (
		<>
			<input
				type="text"
				name="quest"
				id="quest"
				placeholder="Enter quest here..."
				onChange={(e) => setQuest(e.target.value)}
				className="relative"
				onSubmit={() => guess(quest)}
			/>
			<div className="flex flex-col absolute">
				{quest.length >= 3 &&
					filteredQuests.map((x) => <span>{x}</span>)}
			</div>
		</>
	);
};

export default QuestInput;
