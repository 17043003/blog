export const state = () => ({
  authToken: '',
})

export const mutations = {
  setToken(state, token) {
    state.authToken = token
  },
}

export const actions = {
  setTokenAction(context, token) {
    context.commit('setToken', token)
  },
}

export const getters = {
  token: (state) => {
    return state.authToken
  },
}
