const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/users', createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true}));


app.use('ml', createProxyMiddleware({
    target: 'http://ml-service:3002',
    changeOrigin: true
  }));

app.listen(3000, () => {
  console.log('API Gateway is running on port 3000');
});
