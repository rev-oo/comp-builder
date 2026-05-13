import type { ChangeEvent } from "react";
import { useConfigStore } from "../state/config";
import Input from "./common/Input";
import LanePlayerTiersConfig from "./LanePlayerTiersConfig";
import PlayerLaneChampionTiersConfig from "./PlayerLaneChampionTiersConfig";

export default function CompConfig () {
  const [{ globalPoints, playerPoints, championPoints }, setState] = useConfigStore();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      [e.currentTarget.name]: e.currentTarget.valueAsNumber,
    }));
  };

  return (
    <form className="space-y-4">
      <div className="flex gap-4">
        <Input
          className="w-16 text-center"
          label="Global $"
          type="number"
          name="globalPoints"
          id="globalPoints"
          value={globalPoints}
          onChange={handleChange}
          step={0}
          min={0}
        />
        <Input
          className="w-16 text-center"
          label="Player $"
          type="number"
          name="playerPoints"
          id="playerPoints"
          value={playerPoints}
          onChange={handleChange}
          step={0}
          min={0}
        />
        <Input
          className="w-16 text-center"
          label="Champion $"
          type="number"
          name="championPoints"
          id="championPoints"
          value={championPoints}
          onChange={handleChange}
          step={0}
          min={0}
        />
      </div>
      <LanePlayerTiersConfig />
      <PlayerLaneChampionTiersConfig />
    </form>
  );
}
