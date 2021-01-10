export default {
  actions: {
    async fetchSearchPhoto(ctx, query) {
      const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=wrNdh1CzRuXK4Q8wa083yhC8sZoag7AXbXw6JZJvGzg`)
      const photo = await res.json()
      this.photos = photo
      ctx.commit('updatePhotos', photo)
      console.log(photo)
    }
  },
  mutations: {
    updatePhotos(state, photo) {
      state.photos = photo
    }
  },
  state: {
    photos: []
  },
  getters: {
    searchPhotos(state) {
      return state.photos
    }
  }
}