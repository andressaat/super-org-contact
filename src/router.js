import Vue from 'vue'
import Router from 'vue-router'
import Login from './view/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '*',
        redirect: '/login'
    },
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // divisão do código no nível da rota
    //   // isso gera um pedaço(chunk) separado (about. [hash] .js) para esta rota
    //   // que é carregado quando a rota é visitada..
    //   // webpackChunkName irá criar o pedaço(chunk) com o nome passado para ela, 
    //   // sem o webpackChunkName é gerado um arquivo (chunk. [hash] .js)
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})