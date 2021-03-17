import { removeToken } from '@/utils/auth'

const actions = {
    // remove token
    // resetToken({ commit }) {
    //   return new Promise(resolve => {
    //     removeToken() // must remove  token  first
    //     commit('RESET_STATE')
    //     resolve()
    //   })
    // },
    
    setDevice({ commit }, device) {
      commit('SET_DEVICE', device)
    },
  }

  export default actions;