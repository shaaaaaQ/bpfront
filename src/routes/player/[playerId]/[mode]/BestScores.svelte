<script lang="ts">
    import type { Score } from "./+page.svelte";

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

    const formatElapsedTime = (sec: number) => {
        const year = Math.floor(sec / (60 * 60 * 24 * 365));
        const month = Math.floor(sec / (60 * 60 * 24 * (365 / 12))); // koko wakaran
        const day = Math.floor(sec / (60 * 60 * 24));
        const hour = Math.floor(sec / (60 * 60));
        const min = Math.floor(sec / 60);
        return (
            (year && `${year}y`) ||
            (month && `${month}m`) ||
            (day && `${day}d`) ||
            (hour && `${hour}h`) ||
            (min && `${min}m`)
        );
    };
</script>

<div class="bg-slate-700 mt-2 rounded-md p-2">
    <div class="font-bold text-2xl text-center">Best Performance</div>
    <table class="border-spacing-y-1 border-separate">
        <!-- <tr class="text-slate-300">
            <td class="min-w-[2rem]" />
            <td class="w-full" />
            <td />
            <td class=" text-center whitespace-nowrap"> ACC </td>
            <td class=" text-center whitespace-nowrap"> PP </td>
        </tr> -->
        {#each scores as score}
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
                    class="bg-slate-800/60 rounded-r-md p-2 min-w-[4.5rem] whitespace-nowrap text-end text-red-300"
                >
                    {score.pp.toFixed(0)} PP
                </td>
            </tr>
        {/each}
    </table>
</div>
