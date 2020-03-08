import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.
    {props.repos.map(repo=>(
      <RepoListEntry repo={repo}/>
    ))}
    {/* TODO finish mapping for each repo add a */}
  </div>
)

export default RepoList;