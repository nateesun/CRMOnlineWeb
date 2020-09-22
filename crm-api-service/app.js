const createError = require("http-errors")
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const basicAuth = require("express-basic-auth")
const indexRouter = require("./routes/index")
const memberRouter = require("./routes/memmaster.route")
const stockRouter = require("./routes/stock.route")
const lineLoginRouter = require("./routes/line_login.route")
const crudRouter = require("./routes/table_crud.route")
const companyRouter = require("./routes/company.route")
const branchRouter = require("./routes/branch.route")
const helmet = require("helmet")
const cors = require("cors")
const nocache = require('nocache');

const fixPassword = 'softpos2013';

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
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use("/api/", indexRouter)
app.use("/api/member", basicAuth({ users: { admin: fixPassword } }), memberRouter)
app.use("/api/stock", basicAuth({ users: { admin: fixPassword } }), stockRouter)
app.use("/api/line", basicAuth({ users: { admin: fixPassword } }), lineLoginRouter)
app.use("/api/crud", crudRouter)

// master
app.use("/api/company", companyRouter)
app.use("/api/branch", branchRouter)

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
  res.render("error")
})

module.exports = app
