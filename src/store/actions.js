import { 
    getApiRepo
} from "../api";
export default{
    async getRepo ({ commit }, userId) {
        try {
            const res = await getApiRepo({userId});

            commit('getRepo', res.data);
        } catch (error) {
            console.error('[Error] getRepo', error)
        }
    },
}