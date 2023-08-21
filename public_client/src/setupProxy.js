const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
    app.use(
        createProxyMiddleware(
            '/influencer',
            {
                target: process.env.PROXY,
                changeOrigin: true,
            }   
        )
    );
}