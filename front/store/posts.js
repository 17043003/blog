import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const postsRef = db.collection('posts')

export const state = () => ({
  postDatas: [],
})

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('postDatas', postsRef)
  }),
}

export const getters = {
  posts: (state) => {
    return state.postDatas
  },
}
