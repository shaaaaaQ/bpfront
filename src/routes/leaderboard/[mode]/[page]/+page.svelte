<script lang="ts" context="module">
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

    const validateLeaderboard = (v: unknown) => {
        return leaderboardResponse.parse(v);
    };

    export type Player = z.infer<typeof player>;
</script>

<script lang="ts">
    import { fetch } from "@tauri-apps/api/http";
    import { z } from "zod";
    import { domain } from "$lib/store";
    import List from "./List.svelte";
    import Pagination from "./Pagination.svelte";

    export let data;

    $: page = data.page;
    $: mode = data.mode;

    const fetchLeaderboard = async () => {
        console.log("fetch leaderboard");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_leaderboard?mode=${mode}&offset=${
                (page - 1) * 50
            }`
        );
        // ts wakaran
        return validateLeaderboard(resp.data).leaderboard;
    };
</script>

<div class="p-3">
    {#key data}
        {#await fetchLeaderboard()}
            Loading
        {:then players}
            <Pagination {page} {mode} />
            <List {players} {mode} {page} />
            <Pagination {page} {mode} />
        {:catch e}
            <span class="text-slate-100">{e}</span>
        {/await}
    {/key}
</div>
