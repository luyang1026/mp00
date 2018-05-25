<template>
  <scroller :show-scrollbar="false">
    <div class="home-wrapper">
      <home-header></home-header>
      <nav-bar title="不太清楚怎么回事？" sub-text="请点击与您症状相应的身体部位"></nav-bar>
      <div class="main-pic">
        <div class="options">
          <switch-btn :options="[{name:'gender',text:'男',value: 0},{name:'gender',text:'女',value: 1}]" @tap="tap"></switch-btn>
          <switch-btn :options="[{name:'part',text:'正',value: 0},{name:'part',text:'背',value: 1}]" @tap="tap"></switch-btn>
        </div>
        <div class="body-wrapper">
          <!-- <image class="body" :src="src('female_front.png')" v-if="gender === 0 && part === 0"></image> -->
          <!-- <image class="body" :src="src('female_front.png')" v-if="gender === 0 && part === 0"></image> -->
          <image class="body" :src="src('female_front.png')" v-if="gender === 1 && part === 0"></image>
          <!-- <image class="body" :src="src('female_front.png')" v-if="gender === 0 && part === 0"></image> -->
          <div class="body-parts" @click="choosePart">
            <div class="breast"></div>
          </div>
        </div>
      </div>
      <nav-bar title="按科室找"></nav-bar>
      <department-nav :department="department" @departmentChoose="departmentChoose">
        <common-disease :disease="disease"></common-disease>
      </department-nav>
    </div>
  </scroller>
</template>

<script>
import {
  NavBar,
  SwitchButton,
  DepartmentNav,
  Header,
  CommonDisease
} from '@/components/'

import { imagePath } from '@/config'

export default {
  name: 'App',
  data () {
    return {
      imagePath,
      gender: 1,
      part: 0,
      department: [
        '内科','外科','妇产科','皮肤性病科','内科'
      ],
      disease: ['高血脂','脂肪肝','高血脂','高血脂','高血脂']
    }
  },
  methods: {
    tap(e){
      this[e.name] = e.value
      // console.log(e)
    },
    departmentChoose (e) {
      console.log(e)
    },
    choosePart (e) {
      this.$router.push({name:'SymptomSearch'})
    },
    src: path => imagePath + path
  },
  components: {
    'nav-bar': NavBar,
    'switch-btn': SwitchButton,
    'department-nav': DepartmentNav,
    'home-header': Header,
    'common-disease': CommonDisease
  }
}
</script>

<style scoped>
.home-wrapper{
  background-color: #f6f6f6;
}
.main-pic {
  background-color: #fff;
  height: 896px;
}
.options{
  height: 58px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 23px;
}
.body-wrapper{
  align-items: center;
}
.body{
  width: 379px;
  height: 777px;
}
.body-parts{
  position: absolute;
  top: 0;
  left: 139px;
  width: 506px;
  height: 783px;
}
.breast{
  position: absolute;
  width: 115px;
  height: 125px;
  top: 150px;
  left: 189px;
}
</style>
