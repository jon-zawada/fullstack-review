import React from 'react';

var RepoListEntry = (props) =>(
  <div>
    <br/>
    <div> Repo Name: <span> </span>
      <a href={props.repo.url}>
    {props.repo.repoName}
      </a>
    </div>
    <div> Owner: <span> </span>
      <a href={props.repo.ownerUrl}>
      {props.repo.owner}
      </a>
    </div>
    <div>
     {`Fork Count: ${props.repo.forks_count}`}
     </div>
     <br/>
  </div>
)


export default RepoListEntry;