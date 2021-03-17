// import { getToken } from '@/utils/auth'

const state = {
  loginUser: JSON.parse(localStorage.getItem('loginUser')) || null,
  device: 'desktop',
  partnerData: [],
  marquee: null,
  newsData: null,
}

export default state