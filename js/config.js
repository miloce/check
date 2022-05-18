// 配置
window.Config = {

  // 站点名
  SiteName: '服务器状态监控',

  // 站点链接
  SiteUrl: 'https://luozhinet.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'u1735047-3047b43a32696a5e5b6d6b15',
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 15,

  // 导航栏菜单
  Navi: [
    {
      text: '没有刷新出来就等下，不要刷新！不要刷新！不要刷新！',
    },
  ]
};
