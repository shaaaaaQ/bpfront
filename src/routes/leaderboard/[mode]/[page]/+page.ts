import type { PageLoad } from "./$types"

export const load: PageLoad = ({ params }) => {
    return {
        page: parseInt(params.page),
        mode: params.mode
    }
}