<script lang="ts">
    import { domain } from "$lib/store.js";
    import type { PlayerInfo } from "./+page.svelte";
    export let info: PlayerInfo;
</script>

<div class="flex bg-slate-600 gap-3 rounded-t-md">
    <img
        class="rounded-tl-md"
        width="50"
        height="50"
        src="https://a.{$domain}/{info.id}"
        alt=""
    />
    <span class="leading-[50px] text-2xl">{info.name}</span>
</div>
