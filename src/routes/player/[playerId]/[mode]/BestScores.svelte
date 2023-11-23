<script lang="ts">
    import type { Score } from "./+page.svelte";
    import { formatElapsedTime, formatMods } from "./utils";

    export let scores: Score[];

    const rankBgColor = {
        XH: "bg-pink-600",
        X: "bg-pink-600",
        SH: "bg-sky-600",
        S: "bg-sky-600",
        A: "bg-lime-600",
        B: "bg-yellow-600",
        C: "bg-orange-600",
        D: "bg-rose-600",
        F: "bg-red-600",
    };

    let show = 7;
</script>

<div class="bg-slate-700 mt-2 rounded-md p-2">
    <div class="font-bold text-2xl text-center">Best Performance</div>
    <table class="border-spacing-y-1 border-separate">
        {#each scores.slice(0, show) as score}
            <tr class="bg-slate-600/40">
                <td
                    class="min-w-[2rem] text-center rounded-l-md {rankBgColor[
                        score.grade
                    ]}"
                >
                    {score.grade}
                </td>
                <td class="p-2 w-full">
                    <div>
                        <strong>
                            {score.beatmap.title}
                        </strong>
                    </div>
                    <div class="text-slate-300">
                        {score.beatmap.version}
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap text-end">
                    {formatMods(score.mods)}
                </td>
                <td class="p-2 whitespace-nowrap text-end text-slate-300">
                    <!-- TODO timezone -->
                    {formatElapsedTime(
                        (Date.now() - new Date(score.play_time).getTime()) /
                            1000
                    )} ago
                </td>
                <td class="p-2 whitespace-nowrap text-end text-yellow-300">
                    {score.acc.toFixed(2)}%
                </td>
                <td
                    class="bg-slate-800/60 rounded-r-md p-2 pl-3 whitespace-nowrap text-end text-red-300 font-black"
                >
                    {score.pp.toFixed(0)}pp
                </td>
            </tr>
        {/each}
    </table>
    <div class="p-1 text-center">
        {#if show < scores.length}
            <button
                class="text-xl mx-auto rounded-full px-6 py-2 hover:bg-slate-600"
                on:click={() => (show += 25)}
            >
                Show more
            </button>
        {:else}
            <button
                class="text-xl mx-auto rounded-full px-6 py-2 hover:bg-slate-600"
                on:click={() => (show = 7)}
            >
                Hide
            </button>
        {/if}
    </div>
</div>
