import React, { Component } from 'react';
import TextInput from '../../components/TextInput'
import { setSearchKey, fetchRepoByName } from '../../actions/repo'
import { connect } from 'react-redux'


class SearchBar extends Component {

  _onChangeName (name) {
    const {dispatch} = this.props
    dispatch(setSearchKey(name))
  }

  _onSubmit (e) {
    e.preventDefault()
    const {dispatch, searchKey} = this.props
    dispatch(fetchRepoByName(searchKey))
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this._onSubmit(e)}>
        <TextInput id={"nameSearch"} onChange={e => this._onChangeName(e.target.value)} />
        </form>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    searchKey: state.repo.searchKey
  }
}

export default connect(mapStateToProps)(SearchBar);
