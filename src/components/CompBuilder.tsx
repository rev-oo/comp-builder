import { useState } from "react";
import { useConfigStore } from "../state/config";
import ChampionSelect, { type LaneChampionMapState } from "./ChampionSelect";
import { H3 } from "./common/Heading";
import PlayerSelect, { type LanePlayerMapState } from "./PlayerSelect";
import { LANES } from "../data/constants";
import { Table, TableBody, TableData, TableHead, TableHeader, TableRow } from "./common/Table";
import { calculateAmountSpent } from "../utils/helper";
import RemainingPoints from "./RemaningPoints";

export default function CompBuilder () {
  const [lanePlayerMap, setLanePlayerMap] = useState<LanePlayerMapState>({});
  const [laneChampionMap, setLaneChampionMap] = useState<LaneChampionMapState>({});

  const [{
    lanePlayerTiers,
    playerLaneChampionTiers,
    championPoints,
    globalPoints,
    playerPoints,
  }] = useConfigStore();
  
  const laneChampionTiers = Object.fromEntries(Object.entries(lanePlayerMap).map(
    ([lane, player]) => [lane, playerLaneChampionTiers?.[player]?.[lane]]
  ));

  const hasGlobalPoints = globalPoints > 0;
  let globalRemainingPoints = globalPoints;
  let playerRemainingPoints = playerPoints - calculateAmountSpent(lanePlayerTiers, lanePlayerMap);
  let championRemainingPoints = championPoints - calculateAmountSpent(laneChampionTiers, laneChampionMap);

  if (hasGlobalPoints) {
    if (playerRemainingPoints < 0) {
      globalRemainingPoints -= Math.abs(playerRemainingPoints);
      playerRemainingPoints = 0;
    }
  
    if (championRemainingPoints < 0) {
      globalRemainingPoints -= Math.abs(championRemainingPoints);
      championRemainingPoints = 0;
    }
  }

  return (
    <>
      {hasGlobalPoints ? (
        <p>Remaining global points: <RemainingPoints value={globalRemainingPoints} /></p>
      ) : null}
      <PlayerSelect
        remainingPoints={playerRemainingPoints}
        lanePlayerMap={lanePlayerMap}
        setLanePlayerMap={setLanePlayerMap}
        lanePlayerTiers={lanePlayerTiers}
      />
      <ChampionSelect
        remainingPoints={championRemainingPoints}
        laneChampionMap={laneChampionMap}
        laneChampionTiers={laneChampionTiers}
        setLaneChampionMap={setLaneChampionMap}
      />
      <H3>Your comp</H3>
      <Table className="table-fixed border">
        <TableHead>
          <TableRow className="border-b">
            <TableHeader className="border-r"></TableHeader>
            {LANES.map((lane) => <TableHeader key={lane}>{lane}</TableHeader>)}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableHeader className="border-r" scope="row">Player</TableHeader>
            {LANES.map((lane) => <TableData key={lane} className="text-center">{lanePlayerMap[lane]}</TableData>)}
          </TableRow>
          <TableRow>
            <TableHeader className="border-r" scope="row">Champion</TableHeader>
            {LANES.map((lane) => <TableData key={lane} className="text-center">{laneChampionMap[lane]}</TableData>)}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
