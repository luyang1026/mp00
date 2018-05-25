<template>
  <div class="nav-bar-wrapper">
    <div class="nav-bar-left">
      <div class="vertical-line"></div>
      <text class="main-text">{{title}}</text>
      <text class="sub-text" v-if="subText">{{subText}}</text>
    </div>
    <text class="nav-bar-more" v-if="hasMore">更多 ></text>
  </div>
</template>
<script>
export default {
  props: {
    subText: {
      type: String
    },
    title: {
      type: String
    },
    hasMore: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.nav-bar-wrapper{
  height: 80px;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  margin-top: 28px;
  align-items: center;
  padding: 0 21px;
  justify-content: space-between;
}
.nav-bar-left{
  flex-direction: row;
  align-items: center;
}
.nav-bar-more,
.sub-text{
  font-size: 24px;
  color: #999999;
}
.vertical-line{
  width: 6px;
  height: 26px;
  background-color: #2ACC89;
}
.main-text{
  font-size: 30px;
  color: #333333;
  width: 270px;
  margin-left: 13px;
}
</style>

