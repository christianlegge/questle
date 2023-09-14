import React from "react";

const GuessCell = () => {
	const sharedClass = "h-16 w-16 rounded-lg";
	const correctClass = "bg-green-500";

	return <div className={`${sharedClass} ${correctClass}`}>GuessCell</div>;
};

export default GuessCell;
