import * as types from './mutations_type.js'

// state
export const state = {
  count: 0,
  position: [1, 2, 3]
}

// mutations
export const mutations = {
  // action 發出 commit 會對應到 mutation 使用的是 Object key 方式
  [types.INCREASE] (state) {
    // 在 mutation 改變 state（只有 mutation 可以改變！）
    state.count += 1
  },
  [types.DECREASE] (state) {
    state.count -= 1
  },
  [types.ANCHOR] (state, anchor) {
    state.position = anchor
  }
}
