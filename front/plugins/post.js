import firebase from '~/plugins/firebase'

function updatePost(postId, post) {
  const db = firebase.firestore()
  const postsRef = db.collection('posts')

  if (post) {
    const documentRef = postsRef.doc(postId)
    documentRef
      .update({
        title: post.title,
        content: post.content,
        updated_at: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        alert(`${post.title}を更新しました`)
      })
      .catch((error) => {
        alert(`更新に失敗しました \n Error: ${error}`)
      })
  } else {
    alert('記事が存在しません')
  }
}

function deletePost(postId) {
  const db = firebase.firestore()
  const documentRef = db.collection('posts').doc(postId)

  documentRef
    .delete()
    .then(() => {
      alert(`${postId}の削除に成功しました`)
    })
    .catch((error) => {
      alert(`削除に失敗しました \n Error: ${error}`)
    })
}

export { updatePost, deletePost }
