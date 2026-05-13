import { type Dispatch, type SetStateAction } from "react";
import { LANES } from "../data/constants";
import Section from "./common/Section";
import { PricesTable } from "./PricesTable";
import { RadioInput } from "./common/RadioInput";
import type { LanePlayerTiers } from "../types/config";
import RemainingPoints from "./RemaningPoints";

export type LanePlayerMapState = { [lane: string]: string };

export default function PlayerSelect ({
  remainingPoints,
  lanePlayerMap,
  setLanePlayerMap,
  lanePlayerTiers,
}: {
  remainingPoints: number,
  lanePlayerTiers: LanePlayerTiers,
  lanePlayerMap: LanePlayerMapState,
  setLanePlayerMap: Dispatch<SetStateAction<LanePlayerMapState>>,
}) {
  const changePlayerLane = (lane: string, player: string) => {
    setLanePlayerMap((prev) => {
      const newState = Object.fromEntries(
        Object.entries(prev).filter(([, p]) => p !== player)
      );

      return { ...newState, [lane]: player };
    });
  };

  return (
    <Section title="Select the players">
      <p className="mb-2">Remaining points: <RemainingPoints value={remainingPoints} /></p>
      <PricesTable
        columns={LANES}
        renderData={(price, lane) => {
          const player = lanePlayerTiers?.[lane]?.[price];

          if (!player) return;

          const id = `${lane}_${player}`;
          const name = `player_${lane}`;
          const checked = lanePlayerMap[lane] === player;
          return (
            <RadioInput
              label={player}
              name={name}
              id={id}
              checked={checked}
              onChange={() => changePlayerLane(lane, player)}
            />
          );
        }}
      />
    </Section>
  );
}
