<template>
  <div class="department-nav-wrapper">
    <div class="nav-main" ref="navMain">
      <div class="nav-main-item" v-for="(item, index) in department" :key="index" @click="chooseDep(index)">
        <text :style="styles[index]" class="nav-main-text">{{item}}</text>
      </div>
    </div>
    <div class="nav-detail">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const dom = weex.requireModule('dom')
export default {
  props: {
    department: {
      type: Array
    }
  },
  data () {
    return {
      styles: [{
        backgroundColor: '#f6f6f6',
        color: '#2ACC89'
      }],
      activeStyle: {
        backgroundColor: '#f6f6f6',
        color: '#2ACC89'
      }
    }
  },
  methods: {
    chooseDep (index) {
      this.styles = []
      this.styles[index] = this.activeStyle
      this.$emit('departmentChoose', this.department[index])
    }
  }
}
</script>
<style scoped>
.department-nav-wrapper{
  flex-direction: row;
  margin-top: 1px;
}
.nav-main-item{
  width: 220px;
  background-color: #fff;
  height: 84px;
}
.nav-main-text{
  color: #666666;
  font-size: 28px;
  padding-left: 42px;
  flex: 1;
  justify-content: center;
  line-height: 84px;
}
.nav-detail{
  flex: 1;
  padding-left: 21px;
  padding-right: 15px;
}

</style>


