import Section from "./common/Section";
import { type Dispatch, type SetStateAction } from "react";
import { PricesTable } from "./PricesTable";
import { RadioInput } from "./common/RadioInput";
import { LANES } from "../data/constants";
import RemainingPoints from "./RemaningPoints";

export type LaneChampionMapState = { [lane: string]: string };

type LaneChampionTiers = {
  [player: string]: {
    [price: string]: string | undefined;
  } | undefined;
};

export default function ChampionSelect ({
  remainingPoints,
  laneChampionTiers,
  laneChampionMap,
  setLaneChampionMap,
}: {
  remainingPoints: number,
  laneChampionTiers: LaneChampionTiers,
  laneChampionMap: LaneChampionMapState,
  setLaneChampionMap: Dispatch<SetStateAction<LaneChampionMapState>>,
}) {
  const changeChampionLane = (lane: string, champion: string) => {
    setLaneChampionMap((prev) => {
      const newState = Object.fromEntries(
        Object.entries(prev).filter(([, p]) => p !== champion)
      );

      return { ...newState, [lane]: champion };
    });
  };

  return (
    <Section title="Select the champions">
      <p className="mb-2">Remaining points: <RemainingPoints value={remainingPoints} /></p>
      <PricesTable
        columns={LANES}
        renderData={(price, lane) => {
          const champion = laneChampionTiers?.[lane]?.[price];

          if (!champion) return;

          const id = `${lane}_${champion}`;
          const name = `champion_${lane}`;
          const checked = laneChampionMap[lane] === champion;
          return (
            <RadioInput
              checked={checked}
              id={id}
              label={champion}
              name={name}
              onChange={() => changeChampionLane(lane, champion)}
            />
          );
        }}
      />
    </Section>
  );
}
