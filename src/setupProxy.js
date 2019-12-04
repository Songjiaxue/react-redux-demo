const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    proxy('/api', {
      target: 'https://192.168.1.167:10802/',
      changeOrigin: true,
      pathRewrite:{
        '^/api': "wechat/wechat",
      },
      https: true,
      secure: false,
    })
  );
};
