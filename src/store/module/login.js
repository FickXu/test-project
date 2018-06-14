const Login = {
    state: {
        account: {
            username: 'a',
            password: '******'
        }
    },
    mutations: {
        logining(state, obj) {
            state.account = obj;
        }
    },
    actions: {
        logining(context) {
            setTimeout(() => {
                context.commit('logining')
            }, 2000);
        }
    }
}

export default Login;