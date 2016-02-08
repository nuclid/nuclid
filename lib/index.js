'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nuclid = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

var _koa2 = require('koa');

var _koa3 = _interopRequireDefault(_koa2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var koa = new _koa3.default();

koa.use(function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
    var message, status;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(ctx.request.url === '/favicon.ico')) {
              _context.next = 3;
              break;
            }

            ctx.status = 404;
            return _context.abrupt('return');

          case 3:
            _context.prev = 3;
            _context.next = 6;
            return next();

          case 6:
            _context.next = 14;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](3);
            message = _context.t0.message;
            status = _context.t0.status;

            ctx.body = { message: message };
            ctx.status = status || 500;

          case 14:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[3, 8]]);
  })),
      _this = undefined;

  return function (_x, _x2) {
    return ref.apply(_this, arguments);
  };
}());

koa.use(function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return next();

          case 2:
            if (!ctx.body) ctx.body = "No template registered.";

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })),
      _this = undefined;

  return function (_x3, _x4) {
    return ref.apply(_this, arguments);
  };
}());

var Nuclid = exports.Nuclid = function () {
  function Nuclid() {
    _classCallCheck(this, Nuclid);

    this.koa = koa;
  }

  _createClass(Nuclid, [{
    key: 'register',
    value: function register(Comp) {
      var _this2 = this;

      koa.use(function () {
        var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  ctx.body = (0, _server.renderToStaticMarkup)(_react2.default.createElement(Comp, {
                    posts: [{ id: 1, title: 'title', text: 'epix' }, { id: 2, title: 'another title', text: 'Lorem dolor' }]
                  }));

                case 1:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3, _this2);
        })),
            _this = _this2;

        return function (_x5, _x6) {
          return ref.apply(_this, arguments);
        };
      }());
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _koa;

      (_koa = this.koa).listen.apply(_koa, arguments);
    }
  }]);

  return Nuclid;
}();