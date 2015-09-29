var express = require('express'),
    app = express(),
    path = require('path'),
    isProduction = process.env.NODE_ENV === 'production',
    port = isProduction ? process.env.PORT || 8080 : 3000 // Set ports for prod (8080) and dev (3000)

app.disable('x-powered-by')
app.set('view engine', 'ejs') // Set view engine
app.set('views', __dirname + '/views') // Set views directory
app.use(express.static(__dirname + '/public')) // Set public directory

/* Webpack hot loading / automatic refresh (in development)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
if (!isProduction) {
  var bundle = require('./../webpack/webpackDevelopmentBundle.js'),
      httpProxy = require('http-proxy'),
      proxy = httpProxy.createProxyServer()

  // Run developmentBundle()
  bundle()

  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    })
  })

  // It is important to catch any errors from the proxy or the server will crash
  proxy.on('error', function(e) {
    console.log('Could not connect to proxy.')
  })
}

/* Hashed webpack bundle (in production)
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
if (isProduction) {
  var assets = require('express-hash-webpack')

  app.use(assets({
    hashPath: './server/public/build',
    hashFileName: 'hash.txt',
    hashTemplate: '[value]',
    assetTemplate: function(req, res) {
      return 'app.[hash][ext]'
    },
    cache: true
  }))
}

/* Index page
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
app.get('/', function(req, res){
  res.render('index', {
    title: '',
    description: '',
    isProduction: isProduction
  })
})

/* 404
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
app.get('*', function(req, res){
  res.send('What???', 404)
})

app.listen(port, function(){
  console.log("It's on, Ricky. Go to localhost:"+port)
})
