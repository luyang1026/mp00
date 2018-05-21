// components/order_item/order_item.js
const eventName = {
  checked: 'order-item-check'
}
Component({
  properties: {
    _id: {
      type: Number,
      value: undefined
    },
    checked: {
      type: Boolean,
      value: false
    },
    type:{
      type: Number,
      value: 0
    },
    des: {
      type: String
    },
    count: {
      type: Number,
      value: 1
    },
    price: {
      type: Number
    },
    status: {
      type: Number,
      value: 0
    }
  },
  data: {

  },
  methods: {
    check(){
      let _id = this.data._id;
      let checked = this.data.checked;
      checked = this.data.checked = !this.data.checked;
      this.setData({
        checked : this.data.checked
      })
      this.triggerEvent(eventName.checked, {_id, checked})
    }
  }
})
