<script>
    import { domain } from "$lib/store";
    import "../app.css";
</script>

<div class="max-w-[50rem] ml-auto mr-auto">
    <div class="flex mb-3 bg-slate-700/50 rounded-b-md">
        <a class="block p-2 text-slate-300" href="/"> Home </a>
        <div class="p-2 text-slate-400">
            {$domain}
        </div>
    </div>

    <slot />
</div>
