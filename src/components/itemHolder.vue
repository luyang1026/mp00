<template>
  <div class="item-holder-wrapper">
    <text class="item" v-for="(item, index) in _src" :key="index" :style="item ? null : styleHide">{{item}}</text>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: Array
    },
    rowCount:{
      type: Number,
      default: 3
    }
  },
  data () {
    return {
      styleHide: {
        opacity: 0
      }
    }
  },
  computed: {
    _src () {
      let item = this.src
      for (let i = 0; i < item.length % this.rowCount; i ++) {
        item.push(null)
      }
      return item
    }
  }
}
</script>

<style scoped>
.item-holder-wrapper{
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 21px;
}
.item{
  width: 156px;
  height: 57px;
  border-radius: 45px;
  border-width: 1px;
  border-style: solid;
  border-color: #DADADA;
  line-height: 57px;
  text-align: center;
  margin-bottom: 13px;
  font-size: 24px;
  color: #333333
}
</style>

