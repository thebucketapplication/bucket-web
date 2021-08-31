const initialState = {
  add: null,
  list: null,
  single: null,
  singleById: null,
  userChange: null
}

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'USER_LIST':
      return { ...state, list: payload }

    case 'USER_ADD':
      return { ...state, add: payload }

    case 'USER_SINGLE':
      return { ...state, single: payload }

    case 'USER_SINGLE_BY_ID':
      return { ...state, singleById: payload }

    case 'USER_CHANGE':
      return { ...state, userChange: payload }

    default:
      return state
  }
}
export default userReducer
