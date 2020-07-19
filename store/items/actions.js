export default {
  async GET_FOR_USER({ commit }, userId) {
    const { data } = await this.$axios.get(`/items/?owner__id=${userId}`)
    commit('SET', data)
  }
}
