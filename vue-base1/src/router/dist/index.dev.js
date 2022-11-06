"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HelloWorld = _interopRequireDefault(require("@/components/HelloWorld.vue"));

var _demo = _interopRequireDefault(require("@/components/demo.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [{
    path: '/one',
    name: 'One',
    component: _HelloWorld["default"],
    meta: {
      title: ''
    }
  }, {
    path: '/',
    name: 'one',
    component: _HelloWorld["default"],
    meta: {
      title: ''
    }
  }, {
    path: '/two',
    name: 'Two',
    component: _demo["default"],
    meta: {
      title: ''
    }
  }]
});
var _default = router;
exports["default"] = _default;