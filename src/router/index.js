import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import HelloWorld2 from '@/components/HelloWorld2'
import Footer from '@/components/Footer'
import Toolbar from '@/components/Toolbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        Footer: Footer,
        Toolbar: Toolbar
      }

    }
  ]
})
