import { LANE_PLAYERS_TIERS, PLAYER_LANE_CHAMPIONS_TIERS } from "../data/seed";
import useLocalStorage from "../hooks/useLocalStorage";
import type { ConfigState } from "../types/config";

export function useConfigStore () {
  return useLocalStorage<ConfigState>('comp-build/config', {
    championPoints: 15,
    globalPoints: 0,
    playerPoints: 15,
    lanePlayerTiers: LANE_PLAYERS_TIERS,
    playerLaneChampionTiers: PLAYER_LANE_CHAMPIONS_TIERS,
  });
}
