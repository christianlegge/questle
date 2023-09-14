import React, { useState } from "react";

const MultiClue = ({ clues }: { clues: string[] }) => {
	const [revealed, setRevealed] = useState(0);

	return (
		<>
			{clues.map((val, idx) => {
				if (idx < revealed) {
					return <span key={val}>{val}</span>;
				}
			})}
			{revealed < clues.length && (
				<button
					onClick={() => setRevealed((curr) => curr + 1)}
					className="border-1 rounded bg-gray-300"
				>
					Reveal next
				</button>
			)}
		</>
	);
};

export default MultiClue;
