import { z } from "zod";

const playerInfo = z.object({
    id: z.number(),
    name: z.string(),
    country: z.string(),
});
const modeStats = z.object({
    id: z.number(),
    pp: z.number(),
    plays: z.number(),
    playtime: z.number(),
    acc: z.number(),
    xh_count: z.number(),
    x_count: z.number(),
    sh_count: z.number(),
    s_count: z.number(),
    a_count: z.number(),
    rank: z.number(),
    country_rank: z.number(),
});
const playerResponse = z.object({
    status: z.string(),
    player: z.object({
        info: playerInfo,
        stats: z.record(z.string(), modeStats),
    }),
});

export const validatePlayer = (v: unknown) => {
    return playerResponse.parse(v);
};

const playerStatus = z.object({
    online: z.boolean(),
    last_seen: z.number().optional(),
    status: z
        .object({
            info_text: z.string(),
        })
        .optional(),
});
const statusResponse = z.object({
    status: z.string(),
    player_status: playerStatus,
});
export const validateStatus = (v: unknown) => {
    return statusResponse.parse(v);
};

const score = z.object({
    id: z.number(),
    score: z.number(),
    pp: z.number(),
    acc: z.number(),
    mods: z.number(),
    grade: z.enum(["XH", "X", "SH", "S", "A", "B", "C", "D", "F"]),
    play_time: z.string(),
    time_elapsed: z.number(),
    beatmap: z.object({
        id: z.number(),
        artist: z.string(),
        title: z.string(),
        version: z.string(),
    }),
});
const playerScoresResponse = z.object({
    status: z.string(),
    scores: z.array(score),
});
export const validateScores = (v: unknown) => {
    return playerScoresResponse.parse(v);
};

export type PlayerInfo = z.infer<typeof playerInfo>;
export type ModeStats = z.infer<typeof modeStats>;
export type PlayerStatus = z.infer<typeof playerStatus>;
export type Score = z.infer<typeof score>;