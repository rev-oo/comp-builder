import type { LanePlayerTiers, PlayerLaneChampionTiers } from "../types/config";

export const PLAYERS = ["Lopes", "Lucas", "Ronaldo", "Felipe", "Natan"];

export const LANE_PLAYERS_TIERS: LanePlayerTiers = {
  top: { 5: "Lopes", 4: "Lucas", 3: "Ronaldo", 2: "Felipe", 1: "Natan" },
  jungle: { 5: "Natan", 4: "Ronaldo", 3: "Lucas", 2: "Lopes", 1: "Felipe" },
  middle: { 5: "Felipe", 4: "Natan", 3: "Lopes", 2: "Lucas", 1: "Ronaldo" },
  bottom: { 5: "Lucas", 4: "Felipe", 3: "Natan", 2: "Ronaldo", 1: "Lopes" },
  support: { 5: "Ronaldo", 4: "Lopes", 3: "Felipe", 2: "Natan", 1: "Lucas" },
};

export const PLAYER_LANE_CHAMPIONS_TIERS: PlayerLaneChampionTiers = {
  Lopes: {
    top: { 5: "Teemo", 4: "Heimerdinger", 3: "Malphite", 2: "Yorick", 1: "Kennen" },
    jungle: { 5: "Nocturne", 4: "Warwick", 3: "Karthus", 2: "Ekko", 1: "Briar" },
    middle: { 5: "Malzahar", 4: "Lux", 3: "Veigar", 2: "Xerath", 1: "Ziggs" },
    bottom: { 5: "Caitlyn", 4: "Miss Fortune", 3: "Ezreal", 2: "Smolder", 1: "Sivir" },
    support: { 5: "Morgana", 4: "Milio", 3: "Nautilus", 2: "Zyra", 1: "Braum" },
  },
  Natan: {
    top: { 5: "Quinn", 4: "Garen", 3: "Tryndamere", 2: "Singed", 1: "Gnar" },
    jungle: { 5: "Viego", 4: "Master Yi", 3: "Kayn", 2: "Xin Zhao", 1: "Wukong" },
    middle: { 5: "Talon", 4: "Taliyah", 3: "Naafiri", 2: "Fizz", 1: "Zed" },
    bottom: { 5: "Nilah", 4: "Corki", 3: "Lucian", 2: "Twitch", 1: "Jhin" },
    support: { 5: "Pyke", 4: "Pantheon", 3: "Camille", 2: "Lux", 1: "Blitzcrank" },
  },
  Felipe: {
    top: { 5: "Gwen", 4: "Fiora", 3: "Gnar", 2: "Gragas", 1: "Gangplank" },
    jungle: { 5: "Lillia", 4: "Kindred", 3: "Lee Sin", 2: "Evelynn", 1: "Kayn" },
    middle: { 5: "Zoe", 4: "Qiyana", 3: "Viktor", 2: "Hwei", 1: "Azir" },
    bottom: { 5: "Ezreal", 4: "Zeri", 3: "Xayah", 2: "Kai'Sa", 1: "Corki" },
    support: { 5: "Nami", 4: "Milio", 3: "Seraphine", 2: "Nautilus", 1: "Rakan" },
  },
  Lucas: {
    top: { 5: "Ornn", 4: "Sion", 3: "Shen", 2: "Sett", 1: "Dr. Mundo" },
    jungle: { 5: "Sejuani", 4: "Ivern", 3: "Warwick", 2: "Nocturne", 1: "Rammus" },
    middle: { 5: "Galio", 4: "Veigar", 3: "Vex", 2: "Viktor", 1: "Anivia" },
    bottom: { 5: "Xayah", 4: "Zeri", 3: "Smolder", 2: "Jinx", 1: "Jhin" },
    support: { 5: "Seraphine", 4: "Thresh", 3: "Nautilus", 2: "Yuumi", 1: "Nami" },
  },
  Ronaldo: {
    top: { 5: "Jax", 4: "Mordekaiser", 3: "Kled", 2: "Teemo", 1: "Trundle" },
    jungle: { 5: "Rammus", 4: "Nocturne", 3: "Sejuani", 2: "Warwick", 1: "Bel'Veth" },
    middle: { 5: "Ahri", 4: "Veigar", 3: "Lux", 2: "Ryze", 1: "Sylas" },
    bottom: { 5: "Tristana", 4: "Kai'Sa", 3: "Xayah", 2: "Smolder", 1: "Ezreal" },
    support: { 5: "Milio", 4: "Thresh", 3: "Braum", 2: "Brand", 1: "Blitzcrank" },
  },
};
