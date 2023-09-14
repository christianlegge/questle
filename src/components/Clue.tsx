import React, { useState } from "react";

const Clue = ({ text }: { text: string }) => {
	const [hidden, setHidden] = useState(true);
	return (
		<div className="inline relative">
			<span className={hidden ? "invisible" : "visible"}>{text}</span>
			<div
				className={`absolute inset-0 bg-black cursor-pointer ${
					hidden ? "visible" : "invisible"
				}`}
				onClick={() => setHidden(false)}
			></div>
		</div>
	);
};

export default Clue;
