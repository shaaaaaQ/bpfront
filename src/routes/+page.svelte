<script lang="ts">
    import { domain } from "$lib/store";
</script>

<div class="text-slate-100">
    <input
        class="bg-slate-600 rounded-md p-1"
        type="text"
        bind:value={$domain}
    /><br />
    <a href="/leaderboard/0/1">std</a><br />
    <a href="/leaderboard/1/1">taiko</a><br />
    <a href="/leaderboard/2/1">ctb</a><br />
    <a href="/leaderboard/3/1">mania</a>
</div>
