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

  add: firestoreAction((context, { title, content }) => {
    postsRef
      .add({
        title,
        content,
        created_at: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((result) => {
        alert(result.path)
      })
      .catch((error) => {
        alert(error)
      })
  }),
}

export const getters = {
  posts: (state) => {
    return state.postDatas
  },
  getPostById: (state) => (postId) => {
    return state.postDatas.find((post) => {
      return postId === post.id
    })
  },
}
