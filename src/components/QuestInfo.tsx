import React, { useState } from "react";
import Clue from "./Clue";
import _quests from "../quests.json";
import MultiClue from "./MultiClue";

const shortProps = [
	"name",
	"difficulty",
	"start",
	"length",
	"year",
	"series",
] as const;
const longProps = ["requirements", "desc", "kills", "items"] as const;

type QuestProps = {
	[k in (typeof shortProps)[number]]: string;
} & {
	[k in (typeof longProps)[number]]: string[];
};

const quests: Record<string, QuestProps> = _quests;

const QuestInfo = ({ quest }: { quest: string }) => {
	const questData = quests[quest];
	return (
		<div className="border-2 p-8">
			<div className="grid grid-cols-6">
				{shortProps.map((prop) => (
					<span>{questData[prop]}</span>
				))}
			</div>
			<div className="grid grid-cols-4">
				{longProps.map((prop) => (
					<div>
						<h2>{prop}</h2>
						<MultiClue clues={questData[prop]} />
					</div>
				))}
			</div>
			{/* <ul>
				{Object.entries(questData).map(([k, v]) => (
					<li key={k}>
						{k}: <Clue text={stripWikiFormatting(v)} />
					</li>
				))}
			</ul> */}
		</div>
	);
};

const stripWikiFormatting = (str: string): string => {
	return str.replace(/\[\[(?:[^\[\]]+\|)?([^\[\]]+)\]\]/g, "$1");
};

export default QuestInfo;
