import React, { useState } from "react";

const Clue = ({ text }: { text: string }) => {
	const [hidden, setHidden] = useState(true);
	return (
		<div className="inline relative">
			<span
				onClick={() => setHidden(false)}
				className={hidden ? "cursor-pointer" : "cursor-default"}
			>
				{hidden ? redactString(text) : text}
			</span>
			{/* <span className={hidden ? "invisible" : "visible"}>{text}</span>
			<div
				className={`absolute inset-0 bg-black cursor-pointer ${
					hidden ? "visible" : "invisible"
				}`}
				onClick={() => setHidden(false)}
			></div> */}
		</div>
	);
};

const redactString = (str: string): string => {
	return str.replace(/\S\S/g, "█").replace(/[^█\s]/g, "█");
};

export default Clue;
