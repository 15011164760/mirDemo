"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;
exports.mount = mount;
exports.unmount = unmount;

require("./public-path.js");

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("./router/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from './store';
_vue["default"].config.productionTip = false;
/* const app=new Vue({
  router,
  render: h => h(App),
}).$mount('#app'); */

var instance = null;

function render() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var container = props.container;
  instance = new _vue["default"]({
    router: _index["default"],
    // store,
    render: function render(h) {
      return h(_App["default"]);
    }
  }).$mount(container ? container.querySelector('#app') : '#app');
}

console.log(window.__POWERED_BY_QIANKUN__); // 独立运行时

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

function bootstrap() {
  return regeneratorRuntime.async(function bootstrap$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('[vue] vue app bootstraped');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}

function mount(props) {
  return regeneratorRuntime.async(function mount$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('[vue] props from main framework', props);
          props.onGlobalStateChange(function (state, prev) {
            // state: 变更后的状态; prev 变更前的状态
            console.log(state, prev); // setTimeout(()=>{
            //   props.setGlobalState({...state,age:900});
            // },2000)
          });
          render(props);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function unmount() {
  return regeneratorRuntime.async(function unmount$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          instance.$destroy();
          instance.$el.innerHTML = '';
          instance = null;
          _index["default"] = (null, function () {
            throw new Error('"' + "router" + '" is read-only.');
          }());

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}
