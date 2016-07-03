
var
    http = require('http'),
    httpProxy = require('http-proxy');



//
// Basic Http Proxy Server
//
var proxy = httpProxy.createServer({
})

//
// Target Http Server
//
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    proxy.web(req, res, { target: 'http://picaman.picacomic.com:80',changeOrigin: true});
}).listen(9003);
