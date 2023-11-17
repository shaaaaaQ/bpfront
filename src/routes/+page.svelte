<script lang="ts">
    import { domain } from "$lib/store";
</script>

<div class="flex flex-col gap-5 p-3 text-slate-100">
    <div class="text-center">
        <input
            class="bg-slate-600 rounded-md p-1"
            type="text"
            placeholder="example.com"
            bind:value={$domain}
        />
    </div>
    <div>
        <div
            class="text-3xl font-bold mb-3 border-b-2 border-solid border-slate-400 p-3 w-fit mx-auto"
        >
            Leaderboard
        </div>
        <div
            class="flex flex-wrap gap-4 justify-center [&>div]:flex [&>div]:flex-col"
        >
            <div>
                <a href="/leaderboard/0/1">std</a>
                <a href="/leaderboard/4/1">std (Relax)</a>
                <a href="/leaderboard/8/1">std (Autopilot)</a>
            </div>
            <div>
                <a href="/leaderboard/1/1">taiko</a>
                <a href="/leaderboard/5/1">taiko (Relax)</a>
            </div>
            <div>
                <a href="/leaderboard/2/1">ctb</a>
                <a href="/leaderboard/6/1">ctb (Relax)</a>
            </div>
            <div>
                <a href="/leaderboard/3/1">mania</a>
            </div>
        </div>
    </div>
</div>
