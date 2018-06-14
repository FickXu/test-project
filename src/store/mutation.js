const mutations = {
    // ...Login,
    getUser(state, user) {
        console.log('root mumation:',state);
        state.loginUser = user;
    },
    setUser(state, user) {
        state.loginUser = user;
    }
}
console.log('mutation.js:', mutations)

export default mutations;