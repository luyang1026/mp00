<template>
  <scroller :show-scrollbar="false">
    <div class="symptom-search-wrapper">
      <home-header :home="false" class="home-header"></home-header>
      <nav-bar title="内科常见病"></nav-bar>
      <item-holder :src="commonDisease" class="item-holder" :row-count="4"></item-holder>
      <nav-bar title="全部科室与病症"></nav-bar>
      <department-nav :department="department" @departmentChoose="departmentChoose">
        <wxc-indexlist 
          :normal-list="list"
          @wxcIndexlistItemClicked="listItemClick">
        </wxc-indexlist>
      </department-nav>
    </div>
  </scroller>
</template>

<script>
import {
  NavBar,
  Header,
  itemHolder,
  DepartmentNav
} from '@/components/'
import { WxcIndexlist } from 'weex-ui';
export default {
  data(){
    return {
      commonDisease: [
        '肝硬化','肝硬化','肝硬化','肝硬化','肝硬化','肝硬化'
      ],
      department: [
        '内科','外科','妇产科','皮肤性病科','内科'
      ],
      list: [
         {
          name: '阿里',
          pinYin: 'ali',
          py: 'al'
        }, {
          name: '北京',
          pinYin: 'beijing',
          py: 'bj'
        },
      ]
    }
  },
  methods: {
    listItemClick () {
    },
    departmentChoose () {}
  },
  components: {
    'nav-bar': NavBar,
    'home-header': Header,
    'item-holder': itemHolder,
    WxcIndexlist,
    DepartmentNav
  }
}
</script>
<style scoped>
.symptom-search-wrapper{
  background-color: #f6f6f6;
}
.item-holder{
  background-color: #fff;
}
</style>


