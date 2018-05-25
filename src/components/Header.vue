<template>
  <div class="header-wrapper">
    <image class="home-text" :src="src('home-text.png')" v-if="home"></image>
    <!-- <image class="back" :src="src('home-text.png')" v-if="home"></image> -->
    <div class="search-area">
      <image class="magnifier" :src="src('magnifier.png')"></image>
      <text class="place-holder">请输入病症描述  如：腰疼</text>
    </div>
    <image class="exit" :src="src('exit.png')"></image>
  </div>
</template>
<script>

import {imagePath} from '@/config'

export default {
  props: {
    home: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    src (path) {
      return imagePath + path
    },
    back () {
      this.$router.go(-1)
    }
  } 
}
</script>
<style scoped>
.header-wrapper{
  width: 750px;
  height: 128px;
  background-color: #2ACC89;
  flex-direction: row;
  padding: 0 22px;
  align-items: center;
}
.home-text{
  width: 156px;
  height: 37px;
  margin-right: 13px;
}
.search-area{
  flex: 1;
  height: 58px;
  background-color: rgba(255,255,255,.4);
  border-radius: 45px;
  flex-direction: row;
  align-items: center;
}
.magnifier{
  width: 27px;
  height: 27px;
  margin: 0 15px 0 28px;
}
.place-holder{
  font-size: 28px;
  color: #FFFFFF;
  text-align: left;
}
.exit{
  width: 31px;
  height: 31px;
  margin-left: 30px;
}
.back{
  width: 30px;
  height: 30px;
  margin-right: 13px;
  color: #fff;
}
</style>


