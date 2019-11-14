export default{
    getRepo (state, res) {
        state.repo = [...state.repo, ...res];
    },
}