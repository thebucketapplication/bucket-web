import firebase from '../../functions/Firestore'
export const addTask = body => async dispatch => {
  let db = firebase.firestore()
  let res = await db.collection('GlobalBuckets').add(body)
  return dispatch({
    type: 'TASK_ADD',
    payload: res
  })
}

const pageSize = 20;

export const getTasks = (id, lastVisit, completed) => async dispatch => {
  let db = firebase.firestore();
  if (!lastVisit) {
    let res = await db
      .collection('GlobalBuckets')
      .where('usersApartOfBucket', 'array-contains', id)
      .where('isPrivate', '==', false)
      .where('completed', '==', completed || false)
      .orderBy('createdTimeStamp', 'desc')
      .limit(pageSize)
      .get();
    let res1 = [];
    res.forEach(doc => {
      res1.push(doc.data());
    });
    res1 = [...res1];
    const hasMore = res1.length === pageSize;
    return dispatch({
      type: completed ? 'TASK_LIST_COMPLETE' : 'TASK_LIST_TODO',
      payload: res1,
      hasMore: hasMore,
      lastVisit: res.docs[res.docs.length - 1]
    })
  } else {
    let res = await db
      .collection('GlobalBuckets')
      .where('usersApartOfBucket', 'array-contains', id)
      .where('isPrivate', '==', false)
      .where('completed', '==', completed || false)
      .orderBy('createdTimeStamp', 'desc')
      .startAfter(lastVisit)
      .limit(pageSize)
      .get();
    let res1 = [];
    res.forEach(doc => {
      res1.push(doc.data());
    });
    res1 = [...res1];
    const hasMore = res1.length === pageSize;
    return dispatch({
      type: completed ? 'TASK_MORE_LIST_COMPLETE' : 'TASK_MORE_LIST_TODO',
      payload: res1,
      hasMore: hasMore,
      lastVisit: res.docs[res.docs.length - 1]
    });
  }
}

// collection get buckets
export const getCollectionTasks = (id, lastVisit, completed) => async dispatch => {
  let db = firebase.firestore();
  if (!lastVisit) {
    let res = await db
      .collection('GlobalBuckets')
      .where('collectionReferences', 'array-contains', id)
      .where('isPrivate', '==', false)
      .where('completed', '==', completed || false)
      .orderBy('createdTimeStamp', 'desc')
      .limit(pageSize)
      .get();
    let res1 = [];
    res.forEach(doc => {
      res1.push(doc.data());
    });
    res1 = [...res1];
    const hasMore = res1.length === pageSize;
    return dispatch({
      type: completed ? 'TASK_LIST_COMPLETE' : 'TASK_LIST_TODO',
      payload: res1,
      hasMore: hasMore,
      lastVisit: res.docs[res.docs.length - 1]
    })
  } else {
    let res = await db
      .collection('GlobalBuckets')
      .where('collectionReferences', 'array-contains', id)
      .where('isPrivate', '==', false)
      .where('completed', '==', completed || false)
      .orderBy('createdTimeStamp', 'desc')
      .startAfter(lastVisit)
      .limit(pageSize)
      .get();
    let res1 = [];
    res.forEach(doc => {
      res1.push(doc.data());
    });
    res1 = [...res1];
    const hasMore = res1.length === pageSize;
    return dispatch({
      type: completed ? 'TASK_MORE_LIST_COMPLETE' : 'TASK_MORE_LIST_TODO',
      payload: res1,
      hasMore: hasMore,
      lastVisit: res.docs[res.docs.length - 1]
    });
  }
}