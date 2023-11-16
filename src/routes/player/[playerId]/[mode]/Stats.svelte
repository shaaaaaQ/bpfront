<script lang="ts">
    export let info: any;
    export let stats: any;

    const formatPlayTime = (sec: number) => {
        const day = Math.floor(sec / (60 * 60 * 24));
        const hour = Math.floor((sec / (60 * 60)) % 24);
        const min = Math.floor((sec / 60) % 60);
        return `${day}d ${hour}h ${min}m`;
    };
</script>

<div class="flex justify-between items-end p-2 flex-wrap bg-slate-700 gap-3">
    <div class="flex flex-wrap gap-3 [&>div]:p-1 [&>div]:font-bold">
        <div>
            <div>
                Global: #{stats["rank"]}
            </div>
            <div>
                {info.country.toUpperCase()}: #{stats["country_rank"]}
            </div>
            <div>
                PP: {stats.pp}
            </div>
        </div>
        <div>
            <div>
                ACC: {stats.acc.toFixed(2)}%
            </div>
            <div>
                Play Count: {stats.plays}
            </div>
            <div>
                Play Time: {formatPlayTime(stats.playtime)}
            </div>
        </div>
    </div>

    <div
        class="flex flex-wrap h-fit gap-3 [&>div>div]:p-1 [&>div>div:first-child]:rounded-md [&>div>div:first-child]:w-7 [&>div>div:first-child]:text-center [&>div]:rounded-md [&>div]:flex"
    >
        <!-- TODO xhとかshがわかるように色を変える -->
        <div class="bg-pink-600/30">
            <div class="bg-pink-600">SS</div>
            <div>
                {stats.xh_count}
            </div>
        </div>
        <div class="bg-pink-600/30">
            <div class="bg-pink-600">SS</div>
            <div>
                {stats.x_count}
            </div>
        </div>
        <div class="bg-sky-600/30">
            <div class="bg-sky-600">S</div>
            <div>
                {stats.sh_count}
            </div>
        </div>
        <div class="bg-sky-600/30">
            <div class="bg-sky-600">S</div>
            <div>
                {stats.s_count}
            </div>
        </div>
        <div class="bg-lime-600/30">
            <div class="bg-lime-600">A</div>
            <div>
                {stats.a_count}
            </div>
        </div>
    </div>
</div>
