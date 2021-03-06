const proxy = require('http-proxy-middleware').createProxyMiddleware

const target = process.env.REACT_APP_LIVEURL

module.exports = function(app) {
  if (target) {
    app.use(
      proxy('/api', {
        target: target,
        changeOrigin: true
      })
    )
  }
}
