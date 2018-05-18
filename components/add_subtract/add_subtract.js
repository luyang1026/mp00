// components/add_subtract/add_subtract.js
const values = {
  maxValue: 99,
  initValue: 1,
  minValue: 1
};
const showText = {
  beyond: {
    title: '不能再多了啦',
    icon: 'none',
    duration: 800
  }
}
const eventsName = {
  change: 'input-change' 
}
Component({
  properties: {
    value: {
      type: Number,
      value: values.initValue
    }
  },
  data: {
  },
  methods: {
    add(){
      if (this.data.value >= values.maxValue) {
        this.data.value = values.maxValue;
        wx.showToast(showText.beyond)
        return;
      }
      this.setData({
        value: ++this.data.value
      })
      this._emitEvent(eventsName.change, {value:this.data.value})
    },
    substract(){
      if (this.data.value <= values.minValue) {
        return;
      }
      this.setData({
        value: --this.data.value
      })
      this._emitEvent(eventsName.change, { value: this.data.value })
    },
    _emitEvent(name, detail = {}){
      this.triggerEvent(name, detail)
    }
  }
})
