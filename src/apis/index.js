import backendAPI from './gates' 
const stream = weex.requireModule('stream')
const modal = weex.requireModule('modal')
const rooturl = 'http://www.geeklist.cn:8080/api/'
// const rooturl = 'http://192.168.0.158:8080/api/'

const request = {
  log(from, data) {
    // console.log(from, '---->', data)
  },
  errorHandler() {
    modal.toast({message: '服务器异常'}) 
  },
  post(url, body, callback) {
    let arr = []
    for (let name in body) {
      arr.push(`${name}=${body[name]}`)
    }
    stream.fetch({
      method: 'POST',
      type: 'json',
      url: this.rooturl + url,
      headers: {"Content-Type": "application/x-www-form-urlencoded"},
      body: arr.join('&')
    }, (res) => {
      this.log(url, res.data)
      callback(res)
    })
  },
  get(url, data, callback) {
    stream.fetch({
      method: 'GET',
      url: this.rooturl + url,
      type: 'json'
    }, (res) => {
      this.log(url, res.data)
      callback(res)
    })
  },
  api(api_name, data, callback){
    let chosen_api = backendAPI[api_name]
    if (chosen_api) {
      request[`${chosen_api.method}`](chosen_api.url, data, callback)
    }
  }
}
export default request
