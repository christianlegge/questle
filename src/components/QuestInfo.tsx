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
	name: string;
	difficulty: string;
	start: string;
	length: string;
	year: string;
	series: string;
	requirements: string[];
	desc: string[];
	kills: string[];
	items: string[];
};

const quests: Record<string, QuestProps> = _quests;

const QuestInfo = ({ quest, guessed }: { quest: string; guessed: boolean }) => {
	const questData = quests[quest];
	return (
		<div className="border-2 p-8">
			<div className="grid grid-cols-3">
				<span className="font-bold text-4xl">
					{guessed ? quest : "??????????"}
				</span>
				<div className="col-span-2">
					<span className="font-semibold">Start: </span>
					<Clue text={questData["start"]} />
				</div>
			</div>
			<div className="grid grid-cols-4">
				{(["difficulty", "length", "year", "series"] as const).map(
					(prop) => (
						<div>
							<h2>{prop}</h2>
							<Clue text={questData[prop]} />
						</div>
					)
				)}
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

export default QuestInfo;
