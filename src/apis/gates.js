const backendAPI = {
  get_weather: {
    url: 'dcuser/getWeather',// 根据经纬度获取天气城市信息
    method: 'post'
  },
  get_news: {
    url: 'dcuser/getNews',//获取资讯列表
    method: 'get'
  },
  get_headlines: {
    url: 'dcuser/getHeadlines',// 获取首页轮播头条
    method: 'get'
  },
  get_bannerImg: {
    url: 'dcuser/getInformation', // 获取资讯焦点图
    method: 'get'
  },
  get_news_detail: { // 获取资讯详情
    url: 'dcuser/getNewsById',
    method: 'post'
  }
}

export default backendAPI