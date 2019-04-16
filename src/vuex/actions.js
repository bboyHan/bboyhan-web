export const changeUser = ({commit}, user) => {
  commit('username', user.username)
  commit('userToken', user.token)
}



