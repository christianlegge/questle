import React, { useState } from "react";
import Clue from "./Clue";
import _quests from "../quests.json";

const quests: Record<
	string,
	{
		requirements: string;
		desc: string;
		difficulty: string;
		kills: string;
		name: string;
		start: string;
		length: string;
		items: string;
		year: string;
		series: string;
	}
> = _quests;

const QuestInfo = ({ quest }: { quest: string }) => {
	const questData = quests[quest];
	return (
		<div className="border-2 p-8">
			<ul>
				{Object.entries(questData).map(([k, v]) => (
					<li key={k}>
						{k}: <Clue text={stripWikiFormatting(v)} />
					</li>
				))}
			</ul>
		</div>
	);
};

const stripWikiFormatting = (str: string): string => {
	return str.replace(/\[\[(?:[^\[\]]+\|)?([^\[\]]+)\]\]/g, "$1");
};

export default QuestInfo;
