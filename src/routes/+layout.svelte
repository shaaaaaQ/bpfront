<script>
    import { domain } from "$lib/store";
    import "../app.css";
</script>

<div class="max-w-[60rem] ml-auto mr-auto text-slate-100">
    <div class="flex mb-3 bg-slate-700/50 rounded-b-md">
        <a class="block p-2 text-slate-300" href="/"> Home </a>
        <div class="p-2 text-slate-400">
            {$domain}
        </div>
    </div>

    <slot />
</div>
