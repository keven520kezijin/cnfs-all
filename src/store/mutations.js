const mutations = {
  SAVE_PARTNERLIST: (state, data) => {
    state.partnerData = data
  },
  SET_DEVICE: (state, device) => {
    state.device = device
  },
  SET_USER: (state, data) => {
    state.loginUser = data
    localStorage.setItem('loginUser', JSON.stringify(data))
  },
  SAVE_MARQUEE: (state, data) => {
    state.marquee = data
  },
  SAVE_NEWSLIST: (state, data) => {
    state.newsData = data
  },
}

export default mutations
