import Vue from 'vue'
import Vuex from 'vuex'

// Store
import allPhotos from "./module/allPhotos";
import searchPhoto from "@/store/module/searchPhoto";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    allPhotos,
    searchPhoto
  }
})
