import { IconName } from '@element-plus/icons-vue'

export default {
    name: 'App',
    components: {
      IconName
    },
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
      },
      goBack() {
        
      },
    }
  }