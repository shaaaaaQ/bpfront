<script lang="ts" context="module">
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

    const validatePlayer = (v: unknown) => {
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
    const validateStatus = (v: unknown) => {
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
    const validateScores = (v: unknown) => {
        return playerScoresResponse.parse(v);
    };

    export type PlayerInfo = z.infer<typeof playerInfo>;
    export type ModeStats = z.infer<typeof modeStats>;
    export type PlayerStatus = z.infer<typeof playerStatus>;
    export type Score = z.infer<typeof score>;
</script>

<script lang="ts">
    import { z } from "zod";
    import { fetch } from "@tauri-apps/api/http";
    import { domain } from "$lib/store";
    import Head from "./Head.svelte";
    import Stats from "./Stats.svelte";
    import Status from "./Status.svelte";
    import BestScores from "./BestScores.svelte";

    export let data;

    const { playerId, mode } = data;

    const fetchPlayer = async () => {
        console.log("fetch player");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_info?id=${playerId}&scope=all`
        );
        return validatePlayer(resp.data).player;
    };

    const fetchStatus = async () => {
        console.log("fetch status");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_status?id=${playerId}`
        );
        return validateStatus(resp.data)["player_status"];
    };

    const fetchBestScores = async () => {
        console.log("fetch best scores");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_scores?id=${playerId}&scope=best&mode=${mode}&limit=100`
        );
        return validateScores(resp.data).scores;
    };
</script>

<div class="p-3">
    {#await fetchPlayer()}
        Loading
    {:then { info, stats }}
        <Head {info} />
        <Stats {info} stats={stats[mode]} />
    {:catch e}
        {e}
    {/await}

    {#await fetchStatus()}
        Loading
    {:then status}
        <Status {status} />
    {:catch e}
        {e}
    {/await}

    {#await fetchBestScores()}
        Loading
    {:then scores}
        <BestScores {scores} />
    {:catch e}
        {e}
    {/await}
</div>
