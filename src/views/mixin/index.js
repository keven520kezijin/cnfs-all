import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      device: state => state.user.device,
    })
  }
}