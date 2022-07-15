import firebase from '../../functions/Firestore'

export const collectionData = collectionId => async dispatch => {
    let db = firebase.firestore()
    let res = await db
      .collection('BucketCollections')
      .where('collectionID', '==', collectionId)
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