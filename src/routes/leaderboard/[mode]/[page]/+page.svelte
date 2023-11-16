<script lang="ts">
    import { fetch } from "@tauri-apps/api/http";
    import { domain } from "$lib/store.js";
    import List from "./List.svelte";

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
        if (typeof resp.data === "object") return resp.data!.leaderboard;
    };
</script>

<div class="p-3">
    {#key data}
        {#await fetchLeaderboard()}
            Loading
        {:then players}
            {#if page > 1}
                <a class="text-slate-100" href="/leaderboard/{mode}/{page - 1}"
                    >zh</a
                >
            {/if}
            <a class="text-slate-100" href="/leaderboard/{mode}/{page + 1}"
                >zl</a
            >
            <List {players} {mode} {page} />
        {:catch e}
            <span class="text-slate-100">{e}</span>
        {/await}
    {/key}
</div>
