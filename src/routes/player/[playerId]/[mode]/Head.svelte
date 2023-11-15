<script lang="ts">
    import { domain } from "$lib/store.js";
    export let info: any;
</script>

<div class="flex text-slate-100 bg-slate-600 gap-3 rounded-t-md">
    <img
        class="rounded-tl-md"
        width="50"
        height="50"
        src="https://a.{$domain}/{info.id}"
        alt=""
    />
    <span class="leading-[50px] text-2xl">{info.name}</span>
</div>
