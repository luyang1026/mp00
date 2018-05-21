// components/custom_tabbar/custom_tabbar.js
Component({
  relations: {
    './custom_tabbar_item': {
      type: 'child'
    }
  },
  properties: {
    tabConfig: {
      type: Array,
      value: []
    }
  },
  data: {
    _tabArray:[]
  },
  ready(){
  },
  methods: {
    choose(e){
      let arr = this.data._tabArray;
      if (arr.length === 0) {
        for (let i = 0; i < this.data.tabConfig.length; i++) {
          arr.push(false)
        }
      }
      arr.forEach( (item,index) => arr[index] = false)
      arr[e.target.id] = true
      this.setData({
        _tabArray: arr
      })
    }
  }
})
