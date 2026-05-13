import { PLAYERS } from "../data/seed";
import { LANES } from "../data/constants";
import Section from "./common/Section";
import { PricesTable } from "./PricesTable";
import Select from "./common/Select";
import { useConfigStore } from "../state/config";

const playerOptions = PLAYERS.map(player => ({ label: player, value: player }));

export default function LanePlayerTiersConfig () {
  const [{lanePlayerTiers}, setState] = useConfigStore();

  const changeValue = (lane: string, price: string, value: string) => {
    setState((prev) => ({
      ...prev,
      lanePlayerTiers: {
        ...prev.lanePlayerTiers,
        [lane]: { ...prev.lanePlayerTiers[lane], [price]: value },
      },
    }));
  }

  return (
    <Section title="Players">
      <PricesTable
        columns={LANES}
        renderData={(price, lane) => {
          return (
            <Select
              className="w-full"
              name={`lanePlayers.${lane}.${price}`}
              onChange={(e) => changeValue(lane, price, e.currentTarget.value)}
              options={playerOptions}
              value={lanePlayerTiers?.[lane]?.[price]}
            />
          )
        }}
      />
    </Section>
  );
}
