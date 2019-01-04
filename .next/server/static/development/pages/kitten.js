module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/KittenItem.js":
/*!**********************************!*\
  !*** ./components/KittenItem.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KittenItem = function KittenItem(_ref) {
  var kitten = _ref.kitten,
      index = _ref.index,
      inProgress = _ref.inProgress,
      handleUpdate = _ref.handleUpdate,
      handleDelete = _ref.handleDelete;
  return _react.default.createElement("div", {
    className: inProgress === kitten._id ? 'inProgress' : ''
  }, kitten.name, _react.default.createElement("a", {
    className: "update",
    onClick: handleUpdate.bind(_this, index, kitten._id)
  }, "Update"), _react.default.createElement("a", {
    className: "delete",
    onClick: handleDelete.bind(_this, index, kitten._id)
  }, "Delete"), _react.default.createElement("style", null, "\n\t\t\ta {\n\t\t\t\tmargin-left: 0.5em;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-size: 0.6em;\n\t\t\t\ttext-transform: uppercase;\n\t\t\t}\n\t\t\ta.update {\n\t\t\t\tcolor: lime;\n\t\t\t}\n\t\t\ta.delete {\n\t\t\t\tcolor: tomato;\n\t\t\t}\n\t\t\t.inProgress {\n\t\t\t\topacity: 0.3;\n\t\t\t}\n\t\t"));
};

var _default = KittenItem;
exports.default = _default;

/***/ }),

/***/ "./components/PageHead.js":
/*!********************************!*\
  !*** ./components/PageHead.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! next/head */ "next/head"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHead = function PageHead(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return _react.default.createElement(_head.default, null, _react.default.createElement("title", null, title), _react.default.createElement("meta", {
    name: "description",
    content: description
  }), _react.default.createElement("meta", {
    charSet: "utf-8"
  }), _react.default.createElement("meta", {
    httpEquiv: "content-language",
    content: "en"
  }), _react.default.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), _react.default.createElement("link", {
    rel: "stylesheet",
    href: "/static/app.css"
  }));
};

var _default = PageHead;
exports.default = _default;

/***/ }),

/***/ "./lib/reduxApi.js":
/*!*************************!*\
  !*** ./lib/reduxApi.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash */ "lodash"));

__webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");

var _reduxApi = _interopRequireWildcard(__webpack_require__(/*! redux-api */ "redux-api"));

var _fetch = _interopRequireDefault(__webpack_require__(/*! redux-api/lib/adapters/fetch */ "redux-api/lib/adapters/fetch"));

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var PORT = process.env.PORT || 3005;
var API_URL =  false ? undefined : "http://localhost:".concat(PORT);
var jsonOptions = {
  headers: {
    'Content-Type': 'application/json'
  }
};

var apiTransformer = function apiTransformer(data, prevData, action) {
  var actionMethod = _lodash.default.get(action, 'request.params.method');

  switch (actionMethod) {
    case 'POST':
      return [].concat(_toConsumableArray(prevData), [data]);

    case 'PUT':
      return prevData.map(function (oldData) {
        return oldData._id === data._id ? data : oldData;
      });

    case 'DELETE':
      return (0, _lodash.default)(prevData).filter(function (oldData) {
        return oldData._id === data._id ? undefined : oldData;
      }).compact().value();

    default:
      return _reduxApi.transformers.array.call(this, data, prevData, action);
  }
}; // redux-api documentation: https://github.com/lexich/redux-api/blob/master/docs/DOCS.md


var _default = (0, _reduxApi.default)({
  // Simple endpoint description
  //oneKitten: '/api/kittens/:id',
  // Complex endpoint description
  kittens: {
    url: '/api/kittens/:id',
    crud: true,
    // Make CRUD actions: https://github.com/lexich/redux-api/blob/master/docs/DOCS.md#crud
    // base endpoint options `fetch(url, options)`
    options: jsonOptions,
    // reducer (state, action) {
    // 	console.log('reducer', action);
    // 	return state;
    // },
    // postfetch: [
    // 	function ({data, actions, dispatch, getState, request}) {
    // 		console.log('postfetch', {data, actions, dispatch, getState, request});
    // 		dispatch(actions.kittens.sync());
    // 	}
    // ],
    // Reimplement default `transformers.object`
    //transformer: transformers.array,
    transformer: apiTransformer
  }
}).use('fetch', (0, _fetch.default)(fetch)).use('rootUrl', API_URL);

exports.default = _default;

/***/ }),

/***/ "./pages/kitten.js":
/*!*************************!*\
  !*** ./pages/kitten.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _style = _interopRequireDefault(__webpack_require__(/*! styled-jsx/style */ "styled-jsx/style"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _redux = __webpack_require__(/*! redux */ "redux");

var _reduxThunk = _interopRequireDefault(__webpack_require__(/*! redux-thunk */ "redux-thunk"));

var _nextReduxWrapper = _interopRequireDefault(__webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper"));

var _reduxApi = _interopRequireDefault(__webpack_require__(/*! ../lib/reduxApi */ "./lib/reduxApi.js"));

var _PageHead = _interopRequireDefault(__webpack_require__(/*! ../components/PageHead */ "./components/PageHead.js"));

var _KittenItem = _interopRequireDefault(__webpack_require__(/*! ../components/KittenItem */ "./components/KittenItem.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var IndexPage =
/*#__PURE__*/
function (_Component) {
  _inherits(IndexPage, _Component);

  _createClass(IndexPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var store, isServer, pathname, query, kittens;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                store = _ref.store, isServer = _ref.isServer, pathname = _ref.pathname, query = _ref.query;
                _context.next = 3;
                return store.dispatch(_reduxApi.default.actions.kittens.sync());

              case 3:
                kittens = _context.sent;
                return _context.abrupt("return", {
                  kittens: kittens
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function IndexPage(props) {
    var _this;

    _classCallCheck(this, IndexPage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndexPage).call(this, props));
    _this.state = {
      name: ''
    };
    return _this;
  }

  _createClass(IndexPage, [{
    key: "handleChangeInputText",
    value: function handleChangeInputText(event) {
      this.setState({
        name: event.target.value
      });
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(event) {
      var _this2 = this;

      // Progress indicator
      this.setState({
        inProgress: true
      });

      var callbackWhenDone = function callbackWhenDone() {
        return _this2.setState({
          name: '',
          inProgress: null
        });
      }; // Actual data request


      var newKitten = {
        name: this.state.name
      };
      this.props.dispatch(_reduxApi.default.actions.kittens.post({}, {
        body: JSON.stringify(newKitten)
      }, callbackWhenDone));
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(index, kittenId, event) {
      var _this3 = this;

      // Progress indicator
      this.setState({
        inProgress: kittenId
      });

      var callbackWhenDone = function callbackWhenDone() {
        return _this3.setState({
          inProgress: null
        });
      }; // Actual data request


      var newKitten = {
        name: prompt('New name?')
      };
      this.props.dispatch(_reduxApi.default.actions.kittens.put({
        id: kittenId
      }, {
        body: JSON.stringify(newKitten)
      }, callbackWhenDone));
    }
  }, {
    key: "handleDelete",
    value: function handleDelete(index, kittenId, event) {
      var _this4 = this;

      // Progress indicator
      this.setState({
        inProgress: kittenId
      });

      var callbackWhenDone = function callbackWhenDone() {
        return _this4.setState({
          inProgress: null
        });
      }; // Actual data request


      this.props.dispatch(_reduxApi.default.actions.kittens.delete({
        id: kittenId
      }, callbackWhenDone));
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var kittens = this.props.kittens; //dd

      var kittenList = kittens.data ? kittens.data.map(function (kitten, index) {
        return _react.default.createElement(_KittenItem.default, {
          key: index,
          kitten: kitten,
          index: index,
          inProgress: _this5.state.inProgress,
          handleUpdate: _this5.handleUpdate.bind(_this5),
          handleDelete: _this5.handleDelete.bind(_this5)
        });
      }) : [];
      return _react.default.createElement("div", null, _react.default.createElement(_PageHead.default, {
        title: "Next.js (React) + Express REST API + MongoDB + Mongoose-Crudify boilerplate",
        description: "Demo of nextjs-express-mongoose-crudify-boilerplate"
      }), _react.default.createElement("h1", null, "Kittens"), kittenList, _react.default.createElement("div", {
        className: "jsx-2222815631" + " " + "jsx-2222815631"
      }, _react.default.createElement("input", {
        placeholder: "Enter a kitten name",
        value: this.state.name,
        onChange: this.handleChangeInputText.bind(this),
        disabled: this.state.inProgress,
        className: "jsx-2222815631" + " " + "jsx-2222815631"
      }), _react.default.createElement("button", {
        onClick: this.handleAdd.bind(this),
        disabled: this.state.inProgress,
        className: "jsx-2222815631" + " " + "jsx-2222815631"
      }, "Add kitten"), _react.default.createElement(_style.default, {
        id: "2222815631"
      }, "div.jsx-2222815631{margin-top:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMvV2ViIERldmVsb3BtZW50L1dlYi9yZWFjdC90YXNrLWFwcC9wYWdlcy9raXR0ZW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkc0QixBQUdzQixlQUNoQiIsImZpbGUiOiIvVXNlcnMvbWFjL1dlYiBEZXZlbG9wbWVudC9XZWIvcmVhY3QvdGFzay1hcHAvcGFnZXMva2l0dGVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tYmluZVJlZHVjZXJzfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCByZWR1eEFwaSBmcm9tICcuLi9saWIvcmVkdXhBcGknO1xuXG5pbXBvcnQgUGFnZUhlYWQgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlSGVhZCc7XG5pbXBvcnQgS2l0dGVuSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0tpdHRlbkl0ZW0nO1xuXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcblxuICAgICAgICAvLyBvbmVLaXR0ZW46IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIC8vIFx0bG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgLy8gXHRkYXRhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAvLyBcdFx0dGV4dDogUHJvcFR5cGVzLnN0cmluZ1xuICAgICAgICAvLyBcdH0pLmlzUmVxdWlyZWRcbiAgICAgICAgLy8gfSkuaXNSZXF1aXJlZCxcblxuICAgICAgICBraXR0ZW5zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICAgICAgICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXG4gICAgICAgIH0pLmlzUmVxdWlyZWQsXG5cbiAgICAgICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcblxuICAgIH07XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHtzdG9yZSwgaXNTZXJ2ZXIsIHBhdGhuYW1lLCBxdWVyeX0pIHtcbiAgICAgICAgLy8gR2V0IGFsbCBraXR0ZW5zXG4gICAgICAgIGNvbnN0IGtpdHRlbnMgPSBhd2FpdCBzdG9yZS5kaXNwYXRjaChyZWR1eEFwaS5hY3Rpb25zLmtpdHRlbnMuc3luYygpKTtcbiAgICAgICAgcmV0dXJuIHtraXR0ZW5zfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtuYW1lOiAnJ31cbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VJbnB1dFRleHQoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQWRkKGV2ZW50KSB7XG4gICAgICAgIC8vIFByb2dyZXNzIGluZGljYXRvclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtpblByb2dyZXNzOiB0cnVlfSk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrV2hlbkRvbmUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtuYW1lOiAnJywgaW5Qcm9ncmVzczogbnVsbH0pO1xuXG4gICAgICAgIC8vIEFjdHVhbCBkYXRhIHJlcXVlc3RcbiAgICAgICAgY29uc3QgbmV3S2l0dGVuID0ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlZHV4QXBpLmFjdGlvbnMua2l0dGVucy5wb3N0KHt9LCB7Ym9keTogSlNPTi5zdHJpbmdpZnkobmV3S2l0dGVuKX0sIGNhbGxiYWNrV2hlbkRvbmUpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVVcGRhdGUoaW5kZXgsIGtpdHRlbklkLCBldmVudCkge1xuICAgICAgICAvLyBQcm9ncmVzcyBpbmRpY2F0b3JcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5Qcm9ncmVzczoga2l0dGVuSWR9KTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tXaGVuRG9uZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe2luUHJvZ3Jlc3M6IG51bGx9KTtcblxuICAgICAgICAvLyBBY3R1YWwgZGF0YSByZXF1ZXN0XG4gICAgICAgIGNvbnN0IG5ld0tpdHRlbiA9IHtcbiAgICAgICAgICAgIG5hbWU6IHByb21wdCgnTmV3IG5hbWU/JyksXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gocmVkdXhBcGkuYWN0aW9ucy5raXR0ZW5zLnB1dCh7aWQ6IGtpdHRlbklkfSwge2JvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0tpdHRlbil9LCBjYWxsYmFja1doZW5Eb25lKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRGVsZXRlKGluZGV4LCBraXR0ZW5JZCwgZXZlbnQpIHtcbiAgICAgICAgLy8gUHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2luUHJvZ3Jlc3M6IGtpdHRlbklkfSk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrV2hlbkRvbmUgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtpblByb2dyZXNzOiBudWxsfSk7XG5cbiAgICAgICAgLy8gQWN0dWFsIGRhdGEgcmVxdWVzdFxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHJlZHV4QXBpLmFjdGlvbnMua2l0dGVucy5kZWxldGUoe2lkOiBraXR0ZW5JZH0sIGNhbGxiYWNrV2hlbkRvbmUpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge2tpdHRlbnN9ID0gdGhpcy5wcm9wczsvL2RkXG5cbiAgICAgICAgY29uc3Qga2l0dGVuTGlzdCA9IGtpdHRlbnMuZGF0YVxuICAgICAgICAgICAgPyBraXR0ZW5zLmRhdGEubWFwKChraXR0ZW4sIGluZGV4KSA9PiA8S2l0dGVuSXRlbVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAga2l0dGVuPXtraXR0ZW59XG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICAgIGluUHJvZ3Jlc3M9e3RoaXMuc3RhdGUuaW5Qcm9ncmVzc31cbiAgICAgICAgICAgICAgICBoYW5kbGVVcGRhdGU9e3RoaXMuaGFuZGxlVXBkYXRlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgaGFuZGxlRGVsZXRlPXt0aGlzLmhhbmRsZURlbGV0ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgLz4pXG4gICAgICAgICAgICA6IFtdO1xuXG4gICAgICAgIHJldHVybiA8ZGl2PlxuICAgICAgICAgICAgPFBhZ2VIZWFkXG4gICAgICAgICAgICAgICAgdGl0bGU9J05leHQuanMgKFJlYWN0KSArIEV4cHJlc3MgUkVTVCBBUEkgKyBNb25nb0RCICsgTW9uZ29vc2UtQ3J1ZGlmeSBib2lsZXJwbGF0ZSdcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj0nRGVtbyBvZiBuZXh0anMtZXhwcmVzcy1tb25nb29zZS1jcnVkaWZ5LWJvaWxlcnBsYXRlJ1xuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGgxPktpdHRlbnM8L2gxPlxuXG4gICAgICAgICAgICB7a2l0dGVuTGlzdH1cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSdFbnRlciBhIGtpdHRlbiBuYW1lJyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VJbnB1dFRleHQuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuaW5Qcm9ncmVzc30vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVBZGQuYmluZCh0aGlzKX0gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuaW5Qcm9ncmVzc30+QWRkIGtpdHRlbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0bWFyZ2luLXRvcDogMWVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgfTtcblxufVxuXG5jb25zdCBjcmVhdGVTdG9yZVdpdGhUaHVua01pZGRsZXdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKShjcmVhdGVTdG9yZSk7XG5jb25zdCBtYWtlU3RvcmUgPSAocmVkdXhTdGF0ZSwgZW5oYW5jZXIpID0+IGNyZWF0ZVN0b3JlV2l0aFRodW5rTWlkZGxld2FyZShjb21iaW5lUmVkdWNlcnMocmVkdXhBcGkucmVkdWNlcnMpLCByZWR1eFN0YXRlKTtcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChyZWR1eFN0YXRlKSA9PiAoe2tpdHRlbnM6IHJlZHV4U3RhdGUua2l0dGVuc30pOyAvLyBVc2UgcmVkdXhBcGkgZW5kcG9pbnQgbmFtZXMgaGVyZVxuXG5jb25zdCBJbmRleFBhZ2VDb25uZWN0ZWQgPSB3aXRoUmVkdXgoe2NyZWF0ZVN0b3JlOiBtYWtlU3RvcmUsIG1hcFN0YXRlVG9Qcm9wc30pKEluZGV4UGFnZSlcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZUNvbm5lY3RlZDtcbiJdfQ== */\n/*@ sourceURL=/Users/mac/Web Development/Web/react/task-app/pages/kitten.js */")));
    }
  }]);

  return IndexPage;
}(_react.Component);

_defineProperty(IndexPage, "propTypes", {
  // oneKitten: PropTypes.shape({
  // 	loading: PropTypes.bool.isRequired,
  // 	data: PropTypes.shape({
  // 		text: PropTypes.string
  // 	}).isRequired
  // }).isRequired,
  kittens: _propTypes.default.shape({
    loading: _propTypes.default.bool.isRequired,
    data: _propTypes.default.array.isRequired
  }).isRequired,
  dispatch: _propTypes.default.func.isRequired
});

var createStoreWithThunkMiddleware = (0, _redux.applyMiddleware)(_reduxThunk.default)(_redux.createStore);

var makeStore = function makeStore(reduxState, enhancer) {
  return createStoreWithThunkMiddleware((0, _redux.combineReducers)(_reduxApi.default.reducers), reduxState);
};

var mapStateToProps = function mapStateToProps(reduxState) {
  return {
    kittens: reduxState.kittens
  };
}; // Use reduxApi endpoint names here


var IndexPageConnected = (0, _nextReduxWrapper.default)({
  createStore: makeStore,
  mapStateToProps: mapStateToProps
})(IndexPage);
var _default = IndexPageConnected;
exports.default = _default;

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/kitten.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/kitten.js */"./pages/kitten.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-api":
/*!****************************!*\
  !*** external "redux-api" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-api");

/***/ }),

/***/ "redux-api/lib/adapters/fetch":
/*!***********************************************!*\
  !*** external "redux-api/lib/adapters/fetch" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-api/lib/adapters/fetch");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=kitten.js.map