import React from 'react';

var RepoListEntry = (props) =>(
  <div>
    <br/>
    <div>
    {`Repo Name: ${props.repo.repoName}`
    }</div>
    <div>
      {`Owner: ${props.repo.owner}`}
    </div>
    <div>
     {`Fork Count: ${props.repo.forks_count}`}
     </div>
     <br/>
  </div>
)


export default RepoListEntry;