<template>
  <div class="switch-btn">
    <text class="btn" :style="styleArray[index]" v-for="(item, index) in options" :key="index" @click="tabHandler(item, index)">{{item.text}}</text>
  </div>
</template>
<script>
export default {
  props: {
    options: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      index: this.on,
      style: {
        backgroundColor: '#2ACC89',
        color: '#fff'
      },
      styleArray:[{
        backgroundColor: '#2ACC89',
        color: '#fff'
      }]
    }
  },
  methods: {
    tabHandler (item, index) {
      this.styleArray = []
      this.styleArray[index] = this.style
      this.$emit('tap', item)
    },
    dynamicStyle (index) {
      if (index === this.on) {
        return 'active'
      }
    }
  }
}
</script>

<style scoped>
.switch-btn{
  width: 175px;
  height: 58px;
  flex-direction: row;
  border-radius: 100px;
  border-style: solid;
  border-width: 1px;
  border-color:  #2ACC89;
  overflow: hidden;
}
.btn{
  flex: 1;
  line-height: 58px;
  font-size: 24px;
  text-align: center;
  color: #2ACC89;
}
.btn.active{
  background-color: #2ACC89;
  color: #fff;
}
</style>
