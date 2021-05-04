import firebase from '~/plugins/firebase'

function updatePost(postId, post) {
  const db = firebase.firestore()
  const postsRef = db.collection('posts')

  if (post) {
    const documentRef = postsRef.doc(postId)
    documentRef.update({
      title: post.title,
      content: post.content,
      updated_at: firebase.firestore.FieldValue.serverTimestamp(),
    })
    return true
  } else {
    return false
  }
}

export { updatePost }
