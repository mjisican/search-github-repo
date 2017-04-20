export const SET_SEARCH_KEY = 'SET_SEARCH_KEY'
export function setSearchKey (keyword) {
  return {
    type: SET_SEARCH_KEY,
    keyword
  }
}

export const REPO_FETCH_REQUEST = 'REPO_FETCH_REQUEST'
export function repoFetchRequest () {
  return {
    type: REPO_FETCH_REQUEST
  }
}

export const REPO_FETCH_SUCCESS = 'REPO_FETCH_SUCCESS'
export function repoFetchSuccess (repo) {
  return {
    type: REPO_FETCH_SUCCESS,
    repo
  }
}

export const REPO_FETCH_FAILURE = 'REPO_FETCH_FAILURE'
export function repoFetchFailure () {
  return {
    type: REPO_FETCH_FAILURE
  }
}

export function fetchRepoByName (name) {
  return (dispatch) => {
    dispatch(repoFetchRequest())
    fetch(`https://api.github.com/search/repositories?sort=stars&order=desc&q=/${name}`)
      .then(response => response.json())
      .then(repo => {
        if (repo.items && repo.items.length > 0) {
          dispatch(repoFetchSuccess(repo.items))
        } else {
          dispatch(repoFetchFailure())
        }
      })
  }
}
