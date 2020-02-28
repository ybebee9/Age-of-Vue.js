import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


// new Vue({
//   el: '#app'
//   // 템플릿 이라는 속성을 정의했을때 내부적으로 render라는 함수가 실행이 된다.
//   render: h => h(App),
// })