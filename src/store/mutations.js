export default{
    getRepo (state, res) {
        state.repo = [...state.repo, ...res];
    },
    setUpdateFlag (state, bool) {
        state.updateFlag = bool;
    },
}