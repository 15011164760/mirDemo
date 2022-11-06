import './public-path.js';
import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
// import store from './store';
Vue.config.productionTip = false;
/* const app=new Vue({
  router,
  render: h => h(App),
}).$mount('#app'); */
let instance = null;
function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    // store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}
console.log(window.__POWERED_BY_QIANKUN__);
// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  props.onGlobalStateChange((state, prev) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(state, prev);
      // setTimeout(()=>{
      //   props.setGlobalState({...state,age:900});
      // },2000)
    });
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}



