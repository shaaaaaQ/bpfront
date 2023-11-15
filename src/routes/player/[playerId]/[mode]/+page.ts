import type { PageLoad } from "./$types"

export const load: PageLoad = ({ params }) => {
    return {
        playerId: params.playerId,
        mode: params.mode
    }
}