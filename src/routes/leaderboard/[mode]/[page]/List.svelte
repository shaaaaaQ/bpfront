<script lang="ts">
    import type { Player } from "./schema";

    export let players: Player[];
    export let mode: string;
    export let page: number;
</script>

<table
    class="border-spacing-y-[1px] border-separate [&>tr:nth-child(2)>td:first-child]:rounded-tl-md [&>tr:nth-child(2)>td:last-child]:rounded-tr-md [&>tr:last-child>td:first-child]:rounded-bl-md [&>tr:last-child>td:last-child]:rounded-br-md"
>
    <tr class="text-slate-300">
        <th class="min-w-[2rem]" />
        <th class="w-full" />
        <th class=" text-center whitespace-nowrap"> Performance </th>
    </tr>
    {#each players as player, index}
        <tr
            class="bg-slate-600"
            on:click={() =>
                (window.location.href = `/player/${player["player_id"]}/${mode}`)}
        >
            <td class="bg-slate-700 p-2 min-w-[3.5rem] text-center">
                #{index + 1 + (page - 1) * 50}
            </td>
            <td class="p-2">
                {player.name}
            </td>
            <td class="p-2 text-center whitespace-nowrap">
                {player.pp}
            </td>
        </tr>
    {/each}
</table>
