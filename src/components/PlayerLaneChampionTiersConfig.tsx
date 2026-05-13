import { PLAYERS } from "../data/seed";
import { LANES } from "../data/constants";
import Section from "./common/Section";
import { PricesTable } from "./PricesTable";
import { H4 } from "./common/Heading";
import { champions } from "../data/champions";
import Select from "./common/Select";
import { useConfigStore } from "../state/config";

const championOptions = champions.map(({ id: value, name: label }) => ({ label, value }));

export default function PlayerLaneChampionTiersConfig () {
  const [{playerLaneChampionTiers}, setState] = useConfigStore();

  const changeValue = (player: string, lane: string, price: string, value: string) => {
    setState((prev) => ({
      ...prev,
      playerLaneChampionTiers: {
        ...prev.playerLaneChampionTiers,
        [player]: {
          ...prev.playerLaneChampionTiers[player],
          [lane]: {
            ...prev.playerLaneChampionTiers?.[player]?.[lane],
            [price]: value,
          },
        },
      }
    }));
  }

  return (
    <Section title="Champions">
      <div className="space-y-4">
        {PLAYERS.map((player) => (
          <div key={player}>
            <H4>{player}</H4>
            <PricesTable
              columns={LANES}
              renderData={(price, lane) => {
                return (
                  <Select
                    name={`playerLaneChampions.${player}.${lane}.${price}`}
                    className="w-full"
                    options={championOptions}
                    onChange={(e) => changeValue(player, lane, price, e.currentTarget.value)}
                    value={playerLaneChampionTiers?.[player]?.[lane]?.[price]}
                  />
                )
              }}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
