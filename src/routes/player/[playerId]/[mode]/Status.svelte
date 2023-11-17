<script lang="ts">
    import type { PlayerStatus } from "./+page.svelte";

    export let status: PlayerStatus;
</script>

<div
    class="bg-slate-700 border-t-2 border-solid border-slate-800 p-3 flex gap-4 items-center"
>
    {#if status.status}
        {@const infoText = status["status"]["info_text"]}
        <span class="font-bold text-xl">Online</span>
        {infoText || "Idle"}
    {:else if status.last_seen}
        {@const lastSeen = new Date(status["last_seen"] * 1000)}
        <strong>Offline</strong>
        Last seen: {lastSeen.toLocaleString()}
    {/if}
</div>
