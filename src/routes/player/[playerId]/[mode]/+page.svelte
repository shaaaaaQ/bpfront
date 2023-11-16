<script lang="ts">
    import { fetch } from "@tauri-apps/api/http";
    import { domain } from "$lib/store.js";
    import Head from "./Head.svelte";
    import Stats from "./Stats.svelte";
    import Status from "./Status.svelte";

    export let data;

    const { playerId, mode } = data;

    const fetchPlayer = async () => {
        console.log("fetch player");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_info?id=${playerId}&scope=all`
        );
        // ts wakaran
        if (typeof resp.data === "object") return resp.data!.player;
    };

    const fetchStatus = async () => {
        console.log("fetch status");
        const resp = await fetch(
            `https://api.${$domain}/v1/get_player_status?id=${playerId}`
        );
        // ts wakaran
        if (typeof resp.data === "object") return resp.data!["player_status"];
    };
</script>

<div class="max-w-[50rem] ml-auto mr-auto p-3 text-slate-100">
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
</div>
