export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },

  loggedInUser(state) {
    const user = state.auth.user
    user.name = user.first_name + ' ' + user.last_name
    return user
  }
}
