import { 
    getApiRepo
} from "../api";
export default{
    async getRepo ({ commit, dispatch }, userId) {
        try {
            const res = await getApiRepo({userId});

            commit('getRepo', res.data);
            dispatch('setUpdateFlag', false);
        } catch (error) {
            console.error('[Error] getRepo', error)
        }
    },
    setUpdateFlag ({ commit }, bool) {
        console.log(2222)
        commit('setUpdateFlag', bool);
    },
}