<script lang="ts">
    import type { Player } from "./+page.svelte";

    export let players: Player[];
    export let mode: string;
    export let page: number;
</script>

<div
    class="[&>a:first-child]:rounded-t-md [&>a:first-child>div:first-child]:rounded-tl-md [&>a:last-child]:rounded-b-md [&>a:last-child>div:first-child]:rounded-bl-md"
>
    {#each players as player, index}
        <a
            class="flex bg-slate-600 border-b border-slate-800 border-solid text-slate-100"
            href="/player/{player['player_id']}/{mode}"
        >
            <div class="bg-slate-700 p-2 min-w-[3.5rem] text-center">
                #{index + 1 + (page - 1) * 50}
            </div>
            <div class="p-2">
                {player.name}
            </div>
            <div class="p-2 ml-auto">
                {player.pp} PP
            </div>
        </a>
    {/each}
</div>
