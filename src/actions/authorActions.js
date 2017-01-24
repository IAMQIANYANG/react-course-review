import authorApi from '../api/mockAuthorApi'
import * as types from './actionTypes'

export function loadAuthorsSucces(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors}
}

export function loadAuthors() {
  return function(dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSucces(authors));
    }).catch(err => {
      throw(err);
    });
  };
}