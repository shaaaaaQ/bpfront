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
</script>

<div class="bg-slate-700 border-t-2 border-solid border-slate-800">
    <div
        class="font-bold text-3xl p-3 text-center border-b border-solid border-slate-800"
    >
        Best scores
    </div>
    {#each scores as score}
        <div class="flex border-b border-solid border-slate-800">
            <div
                class="flex items-center justify-center min-w-[2rem] {rankBgColor[
                    score.grade
                ]}"
            >
                {score.grade}
            </div>
            <div class="p-2">
                <div>
                    <strong>
                        {score.beatmap.title}
                    </strong>
                </div>
                <div class="text-slate-300">
                    {score.beatmap.version}
                </div>
            </div>
            <div class="flex items-center text-end p-2 ml-auto">
                {Math.round(score.pp)} PP
            </div>
        </div>
    {/each}
    <!-- TODO 折り畳み tableにする -->
</div>
