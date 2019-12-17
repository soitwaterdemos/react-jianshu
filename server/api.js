const Koa = require('koa');
let app = new Koa();
const path = require('path')

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
  await next();
});

const KoaStatic = require('koa-static');
app.use(KoaStatic(path.join(__dirname, 'static')));

app.use(async ctx => {
  if (ctx.url === '/get-todolist') {
    ctx.body = 'cookies is seted;'
  } else if (ctx.url === '/api/headerList.json') {
    ctx.body = {
      "success": true,
      data: [
        '物理1', '物理2', '物理3', '物理4', '物理5', '物理6', '物理7', '物理8', '物理9', 
        '历史1', '历史2', '历史3', '历史4', '历史5', '历史6', '历史7', '历史8', '历史9'
      ]
    }
  } else if (ctx.url === '/api/home.json') {
    ctx.body = {
      "success": true,
      "data": {
        "topicList": [{
          "id": 1,
          "title": "社会热点",
          "imgUrl": "http://localhost:3333/pic1.png"
        }, {
          "id": 2,
          "title": "手手绘",
          "imgUrl": "http://localhost:3333/pic1.png"
        }],
        "articleList": [{
          "id": 1,
          "title": "胡歌12年后首谈车祸",
          "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
          "imgUrl": "http://localhost:3333/pic1.png"
        }, {
          "id": 2,
          "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
          "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
          "imgUrl": "http://localhost:3333/pic1.png"
        }, {
          "id": 3,
          "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
          "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
          "imgUrl": "http://localhost:3333/pic1.png"
        }, {
          "id": 4,
          "title": "胡歌12年后首谈车祸：既然活下来了，就不能白白活着",
          "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
          "imgUrl": "http://localhost:3333/pic1.png"
        }],
        "recommendList": [{
          "id": 1,
          "imgUrl": "http://localhost:3333/pic2.png"
        }, {
          "id": 2,
          "imgUrl": "http://localhost:3333/pic2.png"
        }]
      }
    }
  } else if (ctx.url.indexOf('/api/homeList.json?page=') >= 0) { // 底部文章
    ctx.body = {
      "success": true,
      "data": [{
        "id": 5,
        "title": "胡歌12年后首谈车祸",
        "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
        "imgUrl": "http://localhost:3333/pic1.png"
      }, {
        "id": 6,
        "title": "胡歌12年后首谈车祸2",
        "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
        "imgUrl": "http://localhost:3333/pic1.png"
      }, {
        "id": 7,
        "title": "胡歌12年后首谈车祸3",
        "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
        "imgUrl": "http://localhost:3333/pic1.png"
      }, {
        "id": 8,
        "title": "胡歌12年后首谈车祸4",
        "desc": "文/麦大人 01 胡歌又刷屏了。 近日他上了《朗读者》，而这一期的主题是“生命”，他用磁性的嗓音，朗读了一段《哈姆雷特》中的经典独白，相当震撼：...",
        "imgUrl": "http://localhost:3333/pic1.png"
      }]
    }
  } else if (ctx.url.indexOf('/api/detail.json?id=' >= 0)) {
    ctx.body = {
      "success": true,
      "data": {
        "title": "衡水中学，被外地人占领的高考工厂",
        "content": "<img src='http://localhost:3333/pic1.png'/><p><b>2017年，衡水中学考上清华北大的人数是176人</b>，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p><p>2017年，衡水中学考上清华北大的人数是176人，2016年是139人，再往前推到2015年，这个人数是119人。但是在这些辉煌的名单背后，却是外地来衡水上学人数暴涨，本地人上好高中越来越艰难的尴尬处境。</p>"
      }
    }
  } else if ((/^\/api\/login\.json\?account=([\S]+)\&password=[\S]+$/g).test(ctx.url)) {
    ctx.body = {
      "success": true,
      "data": true
    }
  }
})

app.listen(3333, () => {
  console.log('listening in localhost:3333')
})