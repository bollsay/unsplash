import Vue from 'vue'
import VueRouter from 'vue-router'

// Routs
import Home from "@/views/Home"
import Photo from "@/views/Photo"
import Search from "@/views/Search";
import Favorite from "@/views/Favorite";
import page404 from "@/views/404"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photo',
    name: 'Photo',
    component: Photo
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/favorite',
    name: 'Favorite',
    component: Favorite
  },
  {
    path: '*',
    name: '404',
    component: page404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
