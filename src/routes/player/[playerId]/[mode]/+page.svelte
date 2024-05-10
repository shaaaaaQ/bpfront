<script lang="ts">
    import { fetch } from "@tauri-apps/api/http";
    import { domain } from "$lib/store";
    import Head from "./Head.svelte";
    import Stats from "./Stats.svelte";
    import Status from "./Status.svelte";
    import BestScores from "./BestScores.svelte";
    import RecentScores from "./RecentScores.svelte";
    import { validatePlayer, validateScores, validateStatus } from "./schema";

    export let data;

    const { playerId, mode } = data;

    const fetchPlayer = async () => {
        console.log("fetch player");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_info?id=${playerId}&scope=all`,
        );
        return validatePlayer(resp.data).player;
    };

    const fetchStatus = async () => {
        console.log("fetch status");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_status?id=${playerId}`,
        );
        return validateStatus(resp.data)["player_status"];
    };

    const fetchBestScores = async () => {
        console.log("fetch best scores");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_scores?id=${playerId}&scope=best&mode=${mode}&limit=100`,
        );
        return validateScores(resp.data).scores;
    };

    const fetchRecentScores = async () => {
        console.log("fetch recent scores");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_scores?id=${playerId}&scope=recent&mode=${mode}&limit=100`,
        );
        return validateScores(resp.data).scores;
    };
</script>

<div class="p-3">
    {#await fetchPlayer()}
        <div>Loading Player</div>
    {:then { info, stats }}
        <Head {info} />
        <Stats {info} stats={stats[mode]} />
    {:catch e}
        {e}
    {/await}

    {#await fetchStatus()}
        <div>Loading Status</div>
    {:then status}
        <Status {status} />
    {:catch e}
        {e}
    {/await}

    {#await fetchBestScores()}
        <div>Loading Best Scores</div>
    {:then scores}
        <BestScores {scores} />
    {:catch e}
        {e}
    {/await}

    {#await fetchRecentScores()}
        <div>Loading Recent Scores</div>
    {:then scores}
        <RecentScores {scores} />
    {:catch e}
        {e}
    {/await}
</div>
