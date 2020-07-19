export default {
  ADD(state, item) {
    state.list.push(item)
  },
  SET(state, items) {
    state.list = items
  },
  SPLICE(state, item) {
    const index = state.list.findIndex((e) => e.id === item.id)
    state.list.splice(index, 1)
  }
}
