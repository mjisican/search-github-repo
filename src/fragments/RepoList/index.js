import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import { connect } from 'react-redux'

class RepoList extends Component {
  render() {
    const { isFetching, repoArray } = this.props
    return (
      <div style={{padding: 50}}>
        {isFetching
          ? <p>Loading</p>
          : !repoArray
            ? <p>No Results</p>
            : <div>
              <p>Repositories</p>
              <List>
              {repoArray.map((repo, index) => {
                return (
                  <ListItem
                    key={index}
                    leftAvatar={<Avatar src={repo.owner.avatar_url} />}
                    primaryText={repo.name}
                    secondaryText={
                      <p><span>{repo.description}</span><br/>
                      <span>Fork count: <b>{repo.forks_count}</b>; Stars: <b>{repo.stargazers_count}</b>; Issues Open: <b>{repo.open_issues_count}</b></span>
                      </p>
                    }
                    secondaryTextLines={2}
                     />
                )
              })}
              </List>
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    isFetching: state.repo.isFetching,
    repoArray: state.repo.repoArray
  }
}

export default connect(mapStateToProps)(RepoList);
