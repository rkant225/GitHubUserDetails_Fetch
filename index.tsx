import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Users from './Users'
import SelectedUserDetails from './SelectedUserDetails'

interface AppProps { }
interface AppState {
  name: string;
  searchText: string;
  searchResult: [];
  displayClickedUser:boolean;
  displaySearchPage:boolean;
  clickedUserData:object;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      searchText:"Rahul",
      name: 'React',
      searchResult:[],
      displayClickedUser:false,
      displaySearchPage:true,
      clickedUserData:null
    };
  } 

  searchUsers = (searchText) =>{   
    const url = 'https://api.github.com/search/users?q=' + searchText;    
    fetch(url)
    .then(res => res.json())
    .then(res => {
      this.setState({searchResult:res.items});
    });  
  }

  handleClick = () =>{
    this.searchUsers(this.state.searchText);
  }

  handleInputChange=(e)=>{
    this.setState({searchText : e.target.value})
  }

  handleUsersButtonClick=(data)=>{    
    this.setState({clickedUserData:data,displayClickedUser:true,displaySearchPage:false})
  }

  render() {    
    return (
      <div>        
        <p>

        {this.state.displaySearchPage && 
        <div>
        <input value={this.state.searchText} onChange={this.handleInputChange} />
          <button onClick={this.handleClick}>Click Me</button>          
          {this.state.searchResult && this.state.searchResult.length > 0 && this.state.searchResult.map((user)=>  { return(<Users userData={user}
          onUsersButtonClick={(res)=>{this.handleUsersButtonClick(res)}}/>) })
          }
        </div>
        }
        {this.state.displayClickedUser && this.state.clickedUserData &&
        <SelectedUserDetails  
        onGoBackClicked={()=>{this.setState({displaySearchPage:true,displayClickedUser:false})}}
        data={this.state.clickedUserData}/>
        }
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
