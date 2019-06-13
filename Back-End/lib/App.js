"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _user = _interopRequireDefault(require("./routes/user"));

var _rides = _interopRequireDefault(require("./routes/rides"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // Middleware

app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_bodyParser["default"].json());
/* CORS */

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, PATCH');
    return res.status(200).json({});
  }

  next();
});
app.use('/api/v1/rides', _rides["default"]);
app.use('/api/v1/users', _user["default"]); // error handling

app.use(function (res, req, next) {
  var error = new Error('Not found');
  res.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
var _default = app;
exports["default"] = _default;