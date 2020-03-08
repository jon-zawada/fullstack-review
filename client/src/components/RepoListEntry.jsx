import React from 'react';

var RepoListEntry = (props) =>(
  <div>
    {`Repo Name: ${props.repo.repoName} \n
      Fork Count: ${props.repo.forks_count}`}
  </div>
)


export default RepoListEntry;