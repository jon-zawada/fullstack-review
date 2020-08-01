import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }
  componentDidMount(){
    this.getRepos();
  }
  //successful post request to server index.js
  search (state) {
    // TODO
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: state,
      success: (res)=>{
        console.log(res)
        console.log(`${state.term} was searched`);
        this.getRepos();
      },
      error: ()=> {
        console.log('uh oh')
      }
    })
  }

  getRepos(){
    $.ajax({
      method: 'GET',
      url: '/repos',
      success: (data)=>{
        this.setState({
          repos: data
        });
        console.log(this.state)
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));