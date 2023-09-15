import React, { useState } from "react";

const QuestInput = ({
	quests,
	guess,
}: {
	quests: string[];
	guess: (quest: string) => void;
}) => {
	const [quest, setQuest] = useState("");
	const [showList, setShowList] = useState(false);

	const filteredQuests = quests.filter(
		(x) =>
			x.toLowerCase().startsWith(quest.toLowerCase()) ||
			(x.startsWith("The ") &&
				x.slice(4).toLowerCase().startsWith(quest.toLowerCase()))
	);

	return (
		<div className="relative flex flex-col">
			<input
				type="text"
				name="quest"
				id="quest"
				placeholder="Enter quest here..."
				onChange={(e) => setQuest(e.target.value)}
				onFocus={() => setShowList(true)}
				onBlur={() => setShowList(false)}
				className="relative p-2 rounded border-black border"
				onSubmit={() => guess(quest)}
			/>
			{showList && (
				<div className="max-h-32 overflow-auto flex flex-col absolute top-full bg-white border-black border p-2">
					{quest.length >= 3 &&
						filteredQuests.map((x) => <span>{x}</span>)}
				</div>
			)}
		</div>
	);
};

export default QuestInput;
