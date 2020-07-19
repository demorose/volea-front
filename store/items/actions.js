export default {
  async GET_FOR_USER({ commit }, userId) {
    const { data } = await this.$axios.get(`/items/?owner__id=${userId}`)
    commit('SET', data)
  },
  async REMOVE({ commit }, itemId) {
    await this.$axios
      .delete(`/items/${itemId}`)
      .then((response) => commit('SPLICE', response.data))
  }
}
