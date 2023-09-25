import React, { useState } from "react";

const MultiClue = ({
	clues,
	cost,
	deductPoints,
}: {
	clues: string[];
	cost: number;
	deductPoints: (cost: number) => void;
}) => {
	const [revealed, setRevealed] = useState(0);

	return (
		<div className="flex flex-col">
			{clues.map((val, idx) => {
				if (idx < revealed) {
					return <span key={val}>{val}</span>;
				}
			})}
			{revealed < clues.length && (
				<button
					onClick={() => {
						setRevealed((curr) => curr + 1);
						deductPoints(cost);
					}}
					className="border-1 rounded bg-gray-300"
				>
					Reveal next (-{cost})
				</button>
			)}
		</div>
	);
};

export default MultiClue;
