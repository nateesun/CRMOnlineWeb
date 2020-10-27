const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const basicAuth = require("express-basic-auth")
const socketIo = require('socket.io')

// api document
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'CRM API SERVICE',
      description: 'Support Web Daily Online Web',
      contact: {
        name: 'Nathee Sungthong-ngam'
      },
      servers: ['http://localhost:5000']
    },
    basePath: '/api',
    securityDefinitions: {
      auth: {
        type: 'basic'
      }
    },
    security: [
      { 
        auth: [] 
      }
    ]
  },
  apis: ['./routes/*.js']
}

const indexRouter = require("./routes/index")

if(!global.requireModel) {
  global.requireModel = name=>{
    return require(__dirname+'/models/'+name+'.model.js');
  }
}
if(!global.requireControl) {
  global.requireController = name=>{
    return require(__dirname+'/controllers/'+name+'.controller.js');
  }
}
if(!global.requireRoute) {
  global.requireRoute = name=>{
    return require(__dirname+'/routes/'+name+'.route.js');
  }
}

const memberMasterRouter = require("./routes/login.route")
const lineLoginRouter = require("./routes/line_login.route")
const crudRouter = require("./routes/table_crud.route")
const companyRouter = require("./routes/company.route")
const branchRouter = require("./routes/branch.route")
const productRouter = require("./routes/product.route")
const stockRouter = require("./routes/stock.route")
const promotionRouter = require("./routes/promotion.route")
const roleRouter = require("./routes/role.route")
const memberRouter = require("./routes/member.route")
const redeemRouter = require("./routes/redeem.route")

// router for shopping
const cartsRouter = require("./routes/carts.route")
const cartsDetailRouter = require("./routes/carts_detail.route")
const memberShippingRouter = require("./routes/member_shipping.route")
const slipImageRouter = require("./routes/slip_image.route")
const ordersRouter = require("./routes/orders.route")

// router for database config
const dbConfigRouter = require('./routes/database_config.route');

const helmet = require("helmet")
// const cors = require("cors")
const nocache = require('nocache');

const fixPassword = 'softpos2013';
const options = {
  imagePath: __dirname + '/public/images',
}

const app = express()

// Socket.io
const io = socketIo();
app.io = io;

app.use(helmet())
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(nocache());
app.use(helmet.hidePoweredBy({ setTo: 'SOFTPOS' }));
app.disable('etag');

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// swagger api document
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/api/", indexRouter)
app.use("/api/login", basicAuth({ users: { admin: fixPassword } }), memberMasterRouter)
app.use("/api/line", basicAuth({ users: { admin: fixPassword } }), lineLoginRouter)
app.use("/api/crud", crudRouter)

// master
app.use("/api/company", basicAuth({ users: { admin: fixPassword } }), companyRouter)
app.use("/api/branch", basicAuth({ users: { admin: fixPassword } }), branchRouter)
app.use("/api/product", basicAuth({ users: { admin: fixPassword } }), productRouter)
app.use("/api/stock", basicAuth({ users: { admin: fixPassword } }), stockRouter)
app.use("/api/promotion", basicAuth({ users: { admin: fixPassword } }), promotionRouter)
app.use("/api/redeem", basicAuth({ users: { admin: fixPassword } }), redeemRouter(io))
app.use("/api/role", basicAuth({ users: { admin: fixPassword } }), roleRouter)
app.use("/api/member", basicAuth({ users: { admin: fixPassword } }), memberRouter)

// order shopping
app.use("/api/carts", basicAuth({ users: { admin: fixPassword } }), cartsRouter)
app.use("/api/carts_detail", basicAuth({ users: { admin: fixPassword } }), cartsDetailRouter)
app.use("/api/shipping", basicAuth({ users: { admin: fixPassword } }), memberShippingRouter)
app.use("/api/validate_slip", basicAuth({ users: { admin: fixPassword } }), slipImageRouter(options))
app.use("/api/orders", basicAuth({ users: { admin: fixPassword } }), ordersRouter)

// database config
app.use("/api/database_config", basicAuth({ users: { admin: fixPassword } }), dbConfigRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json({
    status: 'Someting wrong with api request'
  })
})

// socket.io events
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
});

module.exports = app
