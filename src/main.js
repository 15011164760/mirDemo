import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start,initGlobalState } from 'qiankun';
const state={
  nickname:'one',
  age:888
}
// 初始化 state
const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  // console.log(state, prev);
});
setTimeout(()=>{
  actions.setGlobalState(state);
},2000)
// actions.offGlobalStateChange();
registerMicroApps([
  {
    name: 'vue-base1',
    entry: '//localhost:3001',
    container: '#vue-base1',
    activeRule: '/vue-base1',
    props:{
      // name:"yang1",
      age:180
    }
  },
  
  {
    name: 'vue-base2',
    entry: '//localhost:3002',
    container: '#vue-base2',
    activeRule: '/vue-base2',
    props:{
      name:"yang2",
      age:19
    }
  },
  {
    name: 'gtm-loan-web',
    entry: '//localhost:8088',
    container: '#gtm-loan-web',
    activeRule: '/gtm-loan-web',
    props:{
      name:"yang2",
      age:19
    }
  },
]);
// 启动 qiankun
start();
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
