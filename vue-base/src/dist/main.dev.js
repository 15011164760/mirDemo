"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _qiankun = require("qiankun");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = {
  nickname: 'one',
  age: 888
}; // 初始化 state

var actions = (0, _qiankun.initGlobalState)(state);
actions.onGlobalStateChange(function (state, prev) {// state: 变更后的状态; prev 变更前的状态
  // console.log(state, prev);
});
setTimeout(function () {
  actions.setGlobalState(state);
}, 2000); // actions.offGlobalStateChange();

(0, _qiankun.registerMicroApps)([{
  name: 'vue-base1',
  entry: '//localhost:3001',
  container: '#vue-base1',
  activeRule: '/vue-base1',
  props: {
    // name:"yang1",
    age: 180
  }
}, {
  name: 'vue-base2',
  entry: '//localhost:3002',
  container: '#vue-base2',
  activeRule: '/vue-base2',
  props: {
    name: "yang2",
    age: 19
  }
}, {
  name: 'gtm-loan-web',
  entry: '//localhost:8088',
  container: '#gtm-loan-web',
  activeRule: '/gtm-loan-web',
  props: {
    name: "yang2",
    age: 19
  }
}]); // 启动 qiankun

(0, _qiankun.start)();
_vue["default"].config.productionTip = false;
new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');