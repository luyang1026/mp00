<template>
  <div>
    <div class="nav-detail-title-wrapper">
      <div class="nav-detail-title">
        <div class="nav-detail-title-line-l"></div>
        <text class="nav-detail-title-text">内科常见病</text>
        <div class="nav-detail-title-line-r"></div>
      </div>
    </div>
    <div class="nav-detail-item-list">
      <div class="nav-detail-item" v-for="(item, key) in _disease" :key="key" :style="(item?null:styleHide)"><text class="nav-detail-item-text">{{item}}</text></div>
    </div>
  </div>
</template>

<script>
export default {
 props: {
   department: {
     type: String
   },
   disease: {
     type: Array
   }
 },
 data() {
    return {
      styleHide: {
        opacity: 0
      }
    }
 },
 computed:{
    _disease () {
      let item = this.disease
      if (item.length%3 !== 0) {
        for (var i = 0; i <= item.length%3; i ++) {
          item.push('')
        }
      }
      return this.disease
    }
  },
}
</script>

<style scoped>
.nav-detail-title-wrapper{
  padding: 33px 0 28px;
}
.nav-detail-title{
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.nav-detail-title-text{
  font-size: 24px;
  color: #333333;
}
.nav-detail-title-line-l{
  width: 65px;
  height: 2px;
  background-color: #979797;
  margin-right: 26px;
}
.nav-detail-title-line-r{
  width: 65px;
  height: 2px;
  margin-left: 26px;
  background-color: #979797;
}
.nav-detail-more{
  position: absolute;
  right: 0;
  color: #999;
  font-size: 24px;
}
.nav-detail-item-list{
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.nav-detail-item{
  width: 156px;
  height: 57px;
  background-color: #fff;
  border-radius: 45px;
  margin-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-detail-item-text{
  font-size: 24px;
  color: #333333;
}
</style>
