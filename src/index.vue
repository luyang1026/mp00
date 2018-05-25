<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
// 后加的
var globalEvent = weex.requireModule('globalEvent');

export default {
  name: 'App',
  created(){
    globalEvent.addEventListener("androidback",()=>{
      this.$router.go(-1)
    });
  }
}
</script>

