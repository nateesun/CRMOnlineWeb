const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const basicAuth = require("express-basic-auth")
const indexRouter = require("./routes/index")

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

const helmet = require("helmet")
const cors = require("cors")
const nocache = require('nocache');

const fixPassword = 'softpos2013';
const options = {
  imagePath: __dirname + '/public/images',
}

const app = express()
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

app.use(
  cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

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
app.use("/api/redeem", basicAuth({ users: { admin: fixPassword } }), redeemRouter)
app.use("/api/role", basicAuth({ users: { admin: fixPassword } }), roleRouter)
app.use("/api/member", basicAuth({ users: { admin: fixPassword } }), memberRouter)

// order shopping
app.use("/api/carts", basicAuth({ users: { admin: fixPassword } }), cartsRouter)
app.use("/api/carts_detail", basicAuth({ users: { admin: fixPassword } }), cartsDetailRouter)
app.use("/api/shipping", basicAuth({ users: { admin: fixPassword } }), memberShippingRouter)
app.use("/api/validate_slip", basicAuth({ users: { admin: fixPassword } }), slipImageRouter(options))
app.use("/api/orders", basicAuth({ users: { admin: fixPassword } }), ordersRouter)

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

module.exports = app
