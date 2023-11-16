<script lang="ts">
    export let page: number;
    export let mode: string;
</script>

<div
    class="flex gap-2 justify-center text-slate-100 font-bold text-2xl select-none my-1"
>
    <a
        class:pointer-events-none={page <= 1}
        class:text-slate-500={page <= 1}
        href="/leaderboard/{mode}/{page - 1}"
    >
        &lt;
    </a>
    <span>
        {page}
    </span>
    <a href="/leaderboard/{mode}/{page + 1}"> &gt; </a>
</div>
