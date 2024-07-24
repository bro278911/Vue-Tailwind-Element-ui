export default {
    name: 'App',
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      navigateTo(path) {
        this.$router.push(path)
      },
      handleSelect(index) {
        this.activeIndex = index;
      }
    }
  }