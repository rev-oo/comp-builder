type Champion = string;

type Player = string;

export type PlayerLaneChampionTiers = {
  [player: string]: {
    [lane: string]: {
      [price: string]: Champion | undefined,
    } | undefined
  } | undefined
};

export type LanePlayerTiers = {
  [lane: string]: {
    [price: string]: Player | undefined,
  } | undefined,
};

export type ConfigState = {
  globalPoints: number,
  playerPoints: number,
  championPoints: number,
  lanePlayerTiers: LanePlayerTiers,
  playerLaneChampionTiers: PlayerLaneChampionTiers,
};
