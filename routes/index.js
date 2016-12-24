export default function (api) {
  api.get('/getname/:name', async (ctx, next) => {
    ctx.body = `Welcome to my play room ${ctx.params.name}.`;
    ctx.response.status = 200;
  });

  api.get('/list', async (ctx, next) => {
    ctx.body = 'gg了';
    ctx.response.status = 200;
  });

  api.post('/', async (ctx, next) => {
    console.info('API get request body =', ctx.request.body);
    ctx.response.status = 200;
    ctx.response.body = 'Test';
  });
}
