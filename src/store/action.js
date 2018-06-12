export const getUser = ({commit}) => {
    setTimeout(() => {
        commit('getUser', {
            username: 'Fick',
            warename: 'git-fee'
        })
    }, 2000);
}

export const setUser = ({commit}, obj) => {
    setTimeout(() => {
        commit('setUser', obj)
    }, 2000);
}