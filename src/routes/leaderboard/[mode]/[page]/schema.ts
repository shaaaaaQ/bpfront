import { z } from "zod";

const player = z.object({
    player_id: z.number(),
    name: z.string(),
    country: z.string(),
    pp: z.number(),
});
const leaderboardResponse = z.object({
    status: z.string(),
    leaderboard: z.array(player),
});

export const validateLeaderboard = (v: unknown) => {
    return leaderboardResponse.parse(v);
};

export type Player = z.infer<typeof player>;