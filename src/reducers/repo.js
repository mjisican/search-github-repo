import {
  REPO_FETCH_REQUEST,
  REPO_FETCH_SUCCESS,
  REPO_FETCH_FAILURE,
  SET_SEARCH_KEY
} from '../actions/repo'

function repo (state = {
  isFetching: false,
  repoArray: null
}, action) {
  switch (action.type) {
    case SET_SEARCH_KEY:
      return Object.assign({}, state, {
        searchKey: action.keyword
      })
    case REPO_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case REPO_FETCH_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        repoArray: action.repo
      })
    case REPO_FETCH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        userData: null
      })
    default:
      return state
  }
}

export default repo
