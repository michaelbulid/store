// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import VueResource from 'vue-resource'
import router from './router/index'

Vue.use(VueResource)
Vue.config.productionTip = false

Vue.filter('dCurrency', function (value) {
  return '￥' + value
})
Vue.filter('dTofixed', function (value) {
  var isNum = parseFloat(value)
  if (!isNum) {
    alert('请输入数字')
    return '请输入数字'
  } else {
    var myValue = Math.round(isNum * 100) / 100
    var item = myValue.toString().split('.')
    if (item.length === 1) {
      myValue = myValue.toString() + '.00'
      return myValue
    }
    if (item.length > 1) {
      if (item[1].length < 2) {
        myValue = myValue.toString() + '0'
      }
      return myValue
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
    return {
    }
  },
  router
})
