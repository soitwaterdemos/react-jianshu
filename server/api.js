const Koa = require('koa');
let app = new Koa();


app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin);
  ctx.set('Access-Control-Allow-Headers', 'content-type');
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,PUT,POST,DELETE,PATCH')
  await next();
});


app.use(async ctx => {
  if (ctx.url === '/get-todolist') {
    ctx.body = 'cookies is seted;'
  } 
})

app.listen(3333, () => {
  console.log('listening...')
})