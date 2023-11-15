<script lang="ts">
    export let players: any;
    export let mode: string;
</script>

{#each players as player}
    <a class="block text-slate-100" href="/player/{player['player_id']}/{mode}"
        >{player.name}</a
    >
{/each}
