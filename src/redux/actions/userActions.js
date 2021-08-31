import firebase from '../../functions/Firestore'

export const userList = () => async dispatch => {
  let db = firebase.firestore()
  let res = await db.collection('users').get()
  let res1 = []
  res.forEach(doc => {
    let res3 = doc.data()
    res1.push({ ...res3, id: doc.id })
  })
  return dispatch({
    type: 'USER_LIST',
    payload: res1
  })
}
export const userAdd = data => async dispatch => {
  let db = firebase.firestore()
  let res = await db.collection('users').add(data)
  return dispatch({
    type: 'USER_ADD',
    payload: res
  })
}

export const userData = username => async dispatch => {
  let db = firebase.firestore()
  let res = await db
    .collection('users')
    .where('username', '==', username)
    .get()
  let res1 = []
  res.forEach(doc => {
    let res2 = doc.data()
    res1.push({ ...res2, id: doc.id })
  })
  return dispatch({
    type: 'USER_SINGLE',
    payload: res1[0]
  })
}
export const userDataByID = id => async dispatch => {
  let db = firebase.firestore()
  let res = await db
    .collection('users')
    .doc(id)
    .get()
  let resd = res.data()
  let res1 = { ...resd, id: res.id }
  return dispatch({
    type: 'USER_SINGLE_BY_ID',
    payload: res1
  })
}
export const UsernameChange = (id, username) => async dispatch => {
  let db = firebase.firestore()
  let res = await db
    .collection('users')
    .doc(id)
    .update({ username: username })
  return dispatch({
    type: 'USER_CHANGE',
    payload: res
  })
}
